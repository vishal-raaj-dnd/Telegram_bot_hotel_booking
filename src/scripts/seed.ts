import { prisma } from '@db/prisma';
import bcrypt from 'bcryptjs';
import { subMonths, addDays, startOfMonth, subDays } from 'date-fns';

async function main() {
  console.log('Cleaning database...');
  await prisma.bookingEvent.deleteMany({});
  await prisma.booking.deleteMany({});
  await prisma.roomCategory.deleteMany({});
  await prisma.tenantGuest.deleteMany({});
  await prisma.guest.deleteMany({});
  await prisma.tenantUser.deleteMany({});
  await prisma.tenant.deleteMany({});

  console.log('Seeding database...');

  // 1. Create Tenant
  const tenant = await prisma.tenant.create({
    data: {
      name: 'Grand Royale Hotel',
      telegramBotToken: '543210987:AAH_DEMO_BOT_TOKEN_FOR_PREVIEW_ONLY',
      subscriptionStatus: 'active',
      settings: {
        welcomeMessage: 'Welcome to Grand Royale Hotel! Find and book your ideal room in seconds.',
        timezone: 'EST',
        currency: 'USD',
        notificationEmail: 'frontdesk@grandroyale.com',
        brandColor: '#6366f1',
        defaultLanguage: 'en'
      }
    }
  });

  // 2. Create Owner Staff User
  const passwordHash = await bcrypt.hash('password123', 10);
  await prisma.tenantUser.create({
    data: {
      tenantId: tenant.id,
      email: 'manager@hotel.com',
      passwordHash,
      role: 'owner'
    }
  });

  // 3. Create Room Categories
  const deluxeOcean = await prisma.roomCategory.create({
    data: {
      tenantId: tenant.id,
      name: 'Deluxe Ocean Suite',
      description: 'Stunning floor-to-ceiling panoramic ocean views, private balcony, marble bathroom, and state-of-the-art entertainment center.',
      pricePerNight: 299.00,
      currency: 'USD',
      maxGuests: 3,
      totalInventory: 10,
      imageUrls: ['https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80'],
      amenities: ['Ocean View', 'King Bed', 'Balcony', 'Minibar', 'Free Wi-Fi', 'Room Service']
    }
  });

  const penthouse = await prisma.roomCategory.create({
    data: {
      tenantId: tenant.id,
      name: 'Presidential Penthouse',
      description: 'The ultimate luxury experience. Full-floor penthouse features private infinity pool, chef-kitchen, dedicated butler service, and 360 city/ocean views.',
      pricePerNight: 899.00,
      currency: 'USD',
      maxGuests: 6,
      totalInventory: 2,
      imageUrls: ['https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80'],
      amenities: ['Infinity Pool', 'Butler Service', 'Private Kitchen', 'King Beds', 'Terrace', 'Jacuzzi']
    }
  });

  const standardTwin = await prisma.roomCategory.create({
    data: {
      tenantId: tenant.id,
      name: 'Standard Twin Room',
      description: 'Elegant and comfortable room featuring two double beds, working desk, flat-screen TV, and high-speed Wi-Fi. Ideal for business and casual travelers.',
      pricePerNight: 129.00,
      currency: 'USD',
      maxGuests: 2,
      totalInventory: 25,
      imageUrls: ['https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80'],
      amenities: ['Double Beds', 'Desk', 'Free Wi-Fi', 'Smart TV', 'Air Conditioning']
    }
  });

  // 4. Create Guests
  const guestNames = [
    { firstName: 'Alice', lastName: 'Smith', telegramId: 10001n },
    { firstName: 'John', lastName: 'Doe', telegramId: 10002n },
    { firstName: 'Emily', lastName: 'Johnson', telegramId: 10003n },
    { firstName: 'Michael', lastName: 'Brown', telegramId: 10004n },
    { firstName: 'Sophia', lastName: 'Williams', telegramId: 10005n },
    { firstName: 'David', lastName: 'Miller', telegramId: 10006n },
    { firstName: 'Olivia', lastName: 'Davis', telegramId: 10007n }
  ];

  const createdGuests = [];
  for (const g of guestNames) {
    const guest = await prisma.guest.create({
      data: {
        telegramId: g.telegramId,
        firstName: g.firstName,
        lastName: g.lastName,
        phoneNumber: '+15550100' + g.telegramId.toString().slice(-2),
        languageCode: 'en'
      }
    });

    await prisma.tenantGuest.create({
      data: {
        tenantId: tenant.id,
        guestId: guest.id
      }
    });

    createdGuests.push(guest);
  }

  // 5. Create Bookings (spread over last 6 months for chart rendering)
  const now = new Date();
  
  const bookingTemplates = [
    // Month -5
    { guest: createdGuests[0], room: standardTwin, nights: 3, checkInDaysAgo: 150, amount: 387.00, status: 'completed' as const },
    { guest: createdGuests[1], room: deluxeOcean, nights: 2, checkInDaysAgo: 145, amount: 598.00, status: 'completed' as const },
    // Month -4
    { guest: createdGuests[2], room: standardTwin, nights: 5, checkInDaysAgo: 120, amount: 645.00, status: 'completed' as const },
    { guest: createdGuests[3], room: penthouse, nights: 2, checkInDaysAgo: 115, amount: 1798.00, status: 'completed' as const },
    // Month -3
    { guest: createdGuests[4], room: deluxeOcean, nights: 4, checkInDaysAgo: 90, amount: 1196.00, status: 'completed' as const },
    { guest: createdGuests[5], room: standardTwin, nights: 1, checkInDaysAgo: 85, amount: 129.00, status: 'completed' as const },
    // Month -2
    { guest: createdGuests[6], room: deluxeOcean, nights: 3, checkInDaysAgo: 60, amount: 897.00, status: 'completed' as const },
    { guest: createdGuests[0], room: penthouse, nights: 3, checkInDaysAgo: 55, amount: 2697.00, status: 'completed' as const },
    // Month -1
    { guest: createdGuests[1], room: standardTwin, nights: 2, checkInDaysAgo: 30, amount: 258.00, status: 'completed' as const },
    { guest: createdGuests[2], room: deluxeOcean, nights: 5, checkInDaysAgo: 25, amount: 1495.00, status: 'completed' as const },
    // Current Month (Active/Upcoming)
    { guest: createdGuests[3], room: deluxeOcean, nights: 3, checkInDaysAgo: 5, amount: 897.00, status: 'confirmed' as const },
    { guest: createdGuests[4], room: standardTwin, nights: 2, checkInDaysAgo: -2, amount: 258.00, status: 'confirmed' as const }, // future
    { guest: createdGuests[5], room: penthouse, nights: 2, checkInDaysAgo: -10, amount: 1798.00, status: 'confirmed' as const }, // future
    { guest: createdGuests[6], room: deluxeOcean, nights: 4, checkInDaysAgo: -15, amount: 1196.00, status: 'pending' as const }, // pending future
  ];

  for (let idx = 0; idx < bookingTemplates.length; idx++) {
    const bt = bookingTemplates[idx];
    const checkIn = subDays(now, bt.checkInDaysAgo);
    const checkOut = addDays(checkIn, bt.nights);

    const booking = await prisma.booking.create({
      data: {
        tenantId: tenant.id,
        guestId: bt.guest.id,
        roomCategoryId: bt.room.id,
        bookingReference: `GRD-${1000 + idx}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`,
        checkIn,
        checkOut,
        nightsCount: bt.nights,
        guestCount: 2,
        totalAmountPaid: bt.amount,
        status: bt.status,
        createdAt: subDays(checkIn, 5) // Booked 5 days before check-in
      }
    });

    // Create a booking event
    await prisma.bookingEvent.create({
      data: {
        bookingId: booking.id,
        event: 'booking_created',
        metadata: { source: 'telegram_bot' }
      }
    });

    if (bt.status === 'confirmed' || bt.status === 'completed') {
      await prisma.bookingEvent.create({
        data: {
          bookingId: booking.id,
          event: 'payment_received',
          metadata: { provider: 'stripe', amount: bt.amount }
        }
      });
    }
  }

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
