import { Markup } from 'telegraf';
import { getDaysInMonth, startOfMonth, format, isBefore, startOfDay, addMonths, subMonths } from 'date-fns';

/**
 * Builds an inline keyboard calendar.
 * @param year Full year (e.g. 2024)
 * @param month Month index (0-11)
 * @param prefix Prefix for callback data (useful for multiple calendars in one bot)
 */
export function buildCalendar(year: number, month: number, prefix: string = 'cal') {
  const currentDate = new Date(year, month);
  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = startOfMonth(currentDate).getDay(); // 0 is Sunday, 1 is Monday
  
  const today = startOfDay(new Date());

  const keyboard: ReturnType<typeof Markup.button.callback>[][] = [];

  // Header row (Month Year)
  keyboard.push([
    Markup.button.callback(format(currentDate, 'MMMM yyyy'), `${prefix}_ignore`)
  ]);

  // Days of week row
  const dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  keyboard.push(dayNames.map(day => Markup.button.callback(day, `${prefix}_ignore`)));

  let currentWeek: ReturnType<typeof Markup.button.callback>[] = [];
  
  // Empty spaces for previous month
  for (let i = 0; i < firstDay; i++) {
    currentWeek.push(Markup.button.callback('·', `${prefix}_ignore`));
  }

  // Days
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const dateString = format(date, 'yyyy-MM-dd');
    
    let text = day.toString();
    let callbackData = `${prefix}_date_${dateString}`;

    if (isBefore(date, today)) {
      // Past date
      text = `${day}`; // Can use a strike-through or emoji, just the number is cleaner
      callbackData = `${prefix}_ignore_past`;
    }

    currentWeek.push(Markup.button.callback(text, callbackData));

    if (currentWeek.length === 7) {
      keyboard.push(currentWeek);
      currentWeek = [];
    }
  }

  // Empty spaces for next month
  if (currentWeek.length > 0) {
    for (let i = currentWeek.length; i < 7; i++) {
      currentWeek.push(Markup.button.callback('·', `${prefix}_ignore`));
    }
    keyboard.push(currentWeek);
  }

  // Navigation row
  const prevMonth = subMonths(currentDate, 1);
  const nextMonth = addMonths(currentDate, 1);
  
  const prevBtn = isBefore(prevMonth, startOfMonth(today)) 
    ? Markup.button.callback('·', `${prefix}_ignore`)
    : Markup.button.callback('<<', `${prefix}_nav_${prevMonth.getFullYear()}_${prevMonth.getMonth()}`);

  keyboard.push([
    prevBtn,
    Markup.button.callback('>>', `${prefix}_nav_${nextMonth.getFullYear()}_${nextMonth.getMonth()}`)
  ]);

  return Markup.inlineKeyboard(keyboard);
}
