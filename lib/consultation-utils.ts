export const indiaTimeZone = 'Asia/Kolkata';

function formatDateParts(date: Date, options: Intl.DateTimeFormatOptions) {
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: indiaTimeZone,
    ...options,
  });
  return formatter.format(date);
}

export function getIndiaTodayDateString(referenceDate = new Date()) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: indiaTimeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(referenceDate);

  const year = parts.find((part) => part.type === 'year')?.value;
  const month = parts.find((part) => part.type === 'month')?.value;
  const day = parts.find((part) => part.type === 'day')?.value;

  if (!year || !month || !day) {
    throw new Error('Unable to determine the current date in India.');
  }

  return `${year}-${month}-${day}`;
}

export function formatIndiaDate(
  dateInput: string,
  options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  },
) {
  const date = new Date(`${dateInput}T12:00:00Z`);
  return formatDateParts(date, options);
}

export function isSundayInIndia(dateInput: string) {
  const date = new Date(`${dateInput}T12:00:00Z`);
  const weekday = new Intl.DateTimeFormat('en-US', {
    timeZone: indiaTimeZone,
    weekday: 'short',
  }).format(date);
  return weekday === 'Sun';
}

export function isPastInIndia(dateInput: string, referenceDate = new Date()) {
  return dateInput < getIndiaTodayDateString(referenceDate);
}

export function normalizeIndianPhoneNumber(input: string) {
  const digits = input.replace(/\D/g, '');
  if (digits.length === 10) return digits;
  if (digits.length === 12 && digits.startsWith('91')) {
    return digits.slice(2);
  }
  return digits;
}

export function formatIndianMobile(input: string) {
  const digits = normalizeIndianPhoneNumber(input);
  if (digits.length !== 10) return input;
  return `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`;
}

