import { Telegraf, Markup } from 'telegraf';
import { createClient } from '@supabase/supabase-js';
import OpenAI from 'openai';
import * as dotenv from 'dotenv';

dotenv.config();

// 1. Initialize Supabase
const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

// 2. Initialize OpenRouter API (OpenAI compatible)
const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});
const MODEL_NAME = "nvidia/nemotron-3-nano-30b-a3b:free";

// Define Tools
const tools: any[] = [
  {
    type: "function",
    function: {
      name: "update_guest_details",
      description: "Saves the guests personal details to their profile (EXCEPT phone number, which is handled securely via Telegram).",
      parameters: {
        type: "object",
        properties: {
          fullName: { type: "string", description: "Full legal name" },
          email: { type: "string", description: "Email address" },
          passportOrId: { type: "string", description: "ID or Passport number" },
          nationality: { type: "string", description: "Nationality" },
          address: { type: "string", description: "Home address" }
        },
        required: ["fullName", "email", "passportOrId", "nationality", "address"]
      }
    }
  },
  {
    type: "function",
    function: {
      name: "request_calendar",
      description: "Pops up a visual calendar for the user to select a date. Call this to pick check-in or check-out dates.",
      parameters: {
        type: "object",
        properties: {
          reason: { type: "string", description: "Why you need the date (e.g., 'check-in' or 'check-out')" }
        },
        required: ["reason"]
      }
    }
  },
  {
    type: "function",
    function: {
      name: "show_room_photos",
      description: "Sends photos of the requested room to the user.",
      parameters: {
        type: "object",
        properties: {
          roomType: { type: "string", description: "Room type name" }
        },
        required: ["roomType"]
      }
    }
  },
  {
    type: "function",
    function: {
      name: "book_room",
      description: "Finalizes the booking. Use only after collecting Room Name, Check-in, Check-out, Guest Count, Special Requests, and ETA.",
      parameters: {
        type: "object",
        properties: {
          roomName: { type: "string", description: "e.g., 'Standard Room'" },
          checkInDate: { type: "string", description: "YYYY-MM-DD" },
          checkOutDate: { type: "string", description: "YYYY-MM-DD" },
          guestCount: { type: "integer", description: "Number of guests" },
          specialRequests: { type: "string", description: "Dietary or special requests" },
          eta: { type: "string", description: "Estimated time of arrival" }
        },
        required: ["roomName", "checkInDate", "checkOutDate", "guestCount", "specialRequests", "eta"]
      }
    }
  }
];

// 3. Initialize Bot
const botToken = process.env.TELEGRAM_BOT_TOKEN!;
const bot = new Telegraf(botToken);
const chatHistories: Record<number, any[]> = {};

// --- UTILS ---
function parseMarkdownToHTML(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>') 
    .replace(/\*(.*?)\*/g, '<i>$1</i>')     
    .replace(/```(.*?)```/gs, '<code>$1</code>') 
    .replace(/`(.*?)`/g, '<code>$1</code>');
}

function generateCalendar(date: Date, reason: string) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  const keyboard = [];
  keyboard.push([Markup.button.callback(`${monthNames[month]} ${year}`, 'ignore')]);
  const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  keyboard.push(days.map(d => Markup.button.callback(d, 'ignore')));
  
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  let row = [];
  for (let i = 0; i < firstDay; i++) row.push(Markup.button.callback(' ', 'ignore'));
  
  for (let i = 1; i <= daysInMonth; i++) {
    row.push(Markup.button.callback(i.toString(), `CAL_DATE_${reason}_${year}-${(month + 1).toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`));
    if (row.length === 7) { keyboard.push(row); row = []; }
  }
  if (row.length > 0) {
    while (row.length < 7) row.push(Markup.button.callback(' ', 'ignore'));
    keyboard.push(row);
  }
  
  const prevMonth = new Date(year, month - 1, 1);
  const nextMonth = new Date(year, month + 1, 1);
  keyboard.push([
    Markup.button.callback('< Prev', `CAL_NAV_${reason}_${prevMonth.getFullYear()}_${prevMonth.getMonth()}`),
    Markup.button.callback('Next >', `CAL_NAV_${reason}_${nextMonth.getFullYear()}_${nextMonth.getMonth()}`)
  ]);
  return Markup.inlineKeyboard(keyboard);
}

// --- DB SAAS HELPERS ---
async function getHotelId() {
  const { data } = await supabase.from('hotels').select('id, name').eq('telegram_bot_token', botToken).single();
  return data;
}

async function registerGuest(ctx: any, hotelId: string) {
  const telegramId = ctx.from?.id;
  if (!telegramId) return null;
  let { data: guest } = await supabase.from('guests').select('*').eq('telegram_id', telegramId).eq('hotel_id', hotelId).single();
  if (!guest) {
    const { data: newGuest } = await supabase.from('guests').insert([{ 
      hotel_id: hotelId, telegram_id: telegramId, username: ctx.from.username, is_verified: false 
    }]).select().single();
    guest = newGuest;
  }
  return guest;
}

// --- BOT HANDLERS ---
bot.on('text', async (ctx) => {
  const hotel = await getHotelId();
  if (!hotel) return ctx.reply('Error: Bot is not associated with any hotel tenant.');
  
  const guest = await registerGuest(ctx, hotel.id);
  if (!guest) return ctx.reply('Error identifying you.');

  const telegramId = ctx.from.id;
  if (!chatHistories[telegramId]) {
    chatHistories[telegramId] = [
      { 
        role: "system", 
        content: `You are the AI concierge for '${hotel.name}'. 
Act as a highly professional hotel receptionist.
Collect information SEQUENTIALLY:
1. Room Preference (Standard Room $99, Deluxe Suite $199, Ocean View $149). If they ask for photos, call 'show_room_photos'.
2. Dates (Call 'request_calendar' function).
3. Personal Details: Ask for Full Legal Name, Email, Passport/ID, Nationality, and Home Address. DO NOT ask for phone number (it is collected securely via Telegram). When you have all 5, call 'update_guest_details'.
4. Guests Count, Special Requests, ETA.
5. Summarize the booking and call 'book_room'. Note: If 'book_room' returns an error saying "User is not verified", tell the user to click the verification button that appeared on their screen to proceed.
Never ask for everything at once.` 
      }
    ];
  }

  chatHistories[telegramId].push({ role: "user", content: ctx.message.text });

  try {
    ctx.sendChatAction('typing');
    const response = await openai.chat.completions.create({
      model: MODEL_NAME,
      messages: chatHistories[telegramId],
      tools: tools
    });

    const msg = response.choices[0].message;
    chatHistories[telegramId].push(msg);

    if (msg.tool_calls && msg.tool_calls.length > 0) {
      await processToolCalls(ctx, msg.tool_calls, guest, hotel.id, telegramId);
    } else if (msg.content) {
      await ctx.reply(parseMarkdownToHTML(msg.content), { parse_mode: 'HTML' });
    }
  } catch (error: any) {
    console.error('OpenRouter Error:', error);
    ctx.reply('Sorry, I am having trouble connecting to my brain right now. Please try again.');
  }
});

// Secure Telegram Phone Verification Handler
bot.on('contact', async (ctx) => {
  const hotel = await getHotelId();
  if (!hotel) return;
  const guest = await registerGuest(ctx, hotel.id);
  if (!guest) return;

  const contact = ctx.message.contact;
  const telegramId = ctx.from.id;

  if (contact.user_id !== telegramId) {
    return ctx.reply("Authentication Failed: You can only share your own verified phone number.");
  }

  // Update DB to mark as verified
  await supabase.from('guests').update({ 
    phone_number: contact.phone_number, 
    is_verified: true 
  }).eq('id', guest.id);

  // Remove the physical keyboard button
  await ctx.reply("✅ Phone number verified successfully! You are securely authenticated.", Markup.removeKeyboard());

  if (!chatHistories[telegramId]) return;

  // Let AI know verification succeeded
  chatHistories[telegramId].push({ 
    role: "user", 
    content: `(System: The user has successfully authenticated and shared their verified phone number: ${contact.phone_number}. Please proceed with finalizing the booking.)` 
  });

  ctx.sendChatAction('typing');
  try {
    const response = await openai.chat.completions.create({
      model: MODEL_NAME,
      messages: chatHistories[telegramId],
      tools: tools
    });
    const msg = response.choices[0].message;
    chatHistories[telegramId].push(msg);

    if (msg.tool_calls && msg.tool_calls.length > 0) {
      // Refresh guest to get is_verified = true
      const verifiedGuest = await registerGuest(ctx, hotel.id);
      await processToolCalls(ctx, msg.tool_calls, verifiedGuest, hotel.id, telegramId);
    } else if (msg.content) {
      await ctx.reply(parseMarkdownToHTML(msg.content), { parse_mode: 'HTML' });
    }
  } catch (error) {
    console.error(error);
  }
});


async function processToolCalls(ctx: any, toolCalls: any[], guest: any, hotelId: string, telegramId: number) {
  for (const call of toolCalls) {
    const args = JSON.parse(call.function.arguments);
    let functionResult: any = {};

    if (call.function.name === 'update_guest_details') {
      const { error } = await supabase.from('guests').update({ 
        full_name: args.fullName, email: args.email,
        passport_or_id_number: args.passportOrId, nationality: args.nationality, home_address: args.address
      }).eq('id', guest.id);
      functionResult = error ? { success: false, error: error.message } : { success: true };
    } 
    else if (call.function.name === 'book_room') {
      // **AUTHENTICATION WALL**
      if (!guest.is_verified) {
        await ctx.reply(
          "🛡️ **Authentication Required**\n\nTo prevent spam and secure your booking, please verify your identity by sharing your phone number using the button below:",
          Markup.keyboard([Markup.button.contactRequest('📱 Verify Phone Number')]).oneTime().resize()
        );
        functionResult = { success: false, error: 'User is not verified. Authentication request sent to user. Tell the user to click the button.' };
      } else {
        // Proceed with booking if verified
        const { data: room } = await supabase.from('rooms').select('*').eq('hotel_id', hotelId).ilike('name', `%${args.roomName}%`).single();
        if (!room) {
          functionResult = { success: false, error: 'Room not found.' };
        } else {
          const diffTime = Math.abs(new Date(args.checkOutDate).getTime() - new Date(args.checkInDate).getTime());
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;
          
          const { error } = await supabase.from('bookings').insert([{
            hotel_id: hotelId, guest_id: guest.id, room_id: room.id,
            check_in_date: args.checkInDate, check_out_date: args.checkOutDate,
            guest_count: args.guestCount, special_requests: args.specialRequests,
            estimated_arrival_time: args.eta, total_price: room.price_per_night * diffDays
          }]);
          functionResult = error ? { success: false, error: error.message } : { success: true };
        }
      }
    }
    else if (call.function.name === 'request_calendar') {
      await ctx.reply(`Please select your ${args.reason} date from the calendar below:`, generateCalendar(new Date(), args.reason));
      functionResult = { success: true };
    }
    else if (call.function.name === 'show_room_photos') {
      const { data: room } = await supabase.from('rooms').select('image_urls').eq('hotel_id', hotelId).ilike('name', `%${args.roomType}%`).single();
      if (!room || !room.image_urls || room.image_urls.length === 0) {
        await ctx.reply(`Sorry, I couldn't find any photos for the ${args.roomType} right now.`);
        functionResult = { success: false, error: 'No photos found.' };
      } else {
        const mediaGroup = room.image_urls.map((url: string, index: number) => ({
          type: 'photo', media: url, caption: index === 0 ? args.roomType : undefined
        }));
        await ctx.replyWithMediaGroup(mediaGroup);
        functionResult = { success: true };
      }
    }

    chatHistories[telegramId].push({
      role: "tool",
      tool_call_id: call.id,
      content: JSON.stringify(functionResult)
    });
  }

  // Follow-up after tool completion
  try {
    const followUp = await openai.chat.completions.create({
      model: MODEL_NAME,
      messages: chatHistories[telegramId]
    });
    const followUpMsg = followUp.choices[0].message;
    chatHistories[telegramId].push(followUpMsg);
    
    if (followUpMsg.content) {
      await ctx.reply(parseMarkdownToHTML(followUpMsg.content), { parse_mode: 'HTML' });
    }
  } catch (err: any) {
    console.error('OpenRouter Network Error in FollowUp:', err);
  }
}

bot.action(/CAL_NAV_(.*)_(.*)_(.*)/, async (ctx) => {
  const reason = ctx.match[1];
  const year = parseInt(ctx.match[2]);
  const month = parseInt(ctx.match[3]);
  await ctx.editMessageReplyMarkup(generateCalendar(new Date(year, month, 1), reason).reply_markup);
});

bot.action(/CAL_DATE_(.*)_(.*)/, async (ctx) => {
  const reason = ctx.match[1];
  const selectedDate = ctx.match[2];
  await ctx.answerCbQuery();
  await ctx.editMessageText(`✅ Selected ${reason} date: ${selectedDate}`);

  const telegramId = ctx.from.id;
  if (!chatHistories[telegramId]) return;
  
  chatHistories[telegramId].push({ role: "user", content: `(System: User selected date ${selectedDate} for ${reason})` });
  ctx.sendChatAction('typing');
  
  try {
    const response = await openai.chat.completions.create({
      model: MODEL_NAME,
      messages: chatHistories[telegramId],
      tools: tools
    });
    
    const msg = response.choices[0].message;
    chatHistories[telegramId].push(msg);

    const hotel = await getHotelId();
    if (!hotel) return;
    const guest = await registerGuest(ctx, hotel.id);

    if (msg.tool_calls) {
      await processToolCalls(ctx, msg.tool_calls, guest, hotel.id, telegramId);
    } else if (msg.content) {
      await ctx.reply(parseMarkdownToHTML(msg.content), { parse_mode: 'HTML' });
    }
  } catch (error: any) {
    console.error('OpenRouter Network Error in Callback:', error);
    ctx.reply('Sorry, I am having network issues right now. Please try clicking the date again.');
  }
});

bot.action('ignore', (ctx) => ctx.answerCbQuery());

bot.launch().then(() => console.log('🤖 Enterprise HotelBot running with Authentication...'));
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
