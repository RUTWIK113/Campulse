
import { Event } from './types';

/**
 * Formats a Date object into a readable string format.
 * Example: "October 26, 2024 at 02:30 PM"
 */
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long',
    timeStyle: 'short',
  }).format(date);
};

/**
 * Generates a Google Calendar event creation link.
 * Assumes a default event duration of 2 hours.
 */
export const generateGoogleCalendarLink = (event: Event, userEmail?: string): string => {
  const formatGoogleDate = (date: Date): string => {
    return date.toISOString().replace(/-|:|\.\d\d\d/g, '');
  };

  const startTime = event.date;
  const endTime = new Date(startTime.getTime() + 2 * 60 * 60 * 1000); // Add 2 hours duration

  const url = new URL('https://calendar.google.com/calendar/render');
  url.searchParams.append('action', 'TEMPLATE');
  url.searchParams.append('text', event.title);
  url.searchParams.append('dates', `${formatGoogleDate(startTime)}/${formatGoogleDate(endTime)}`);
  url.searchParams.append('details', event.description);
  url.searchParams.append('location', event.location);

  if (userEmail) {
    url.searchParams.append('login_hint', userEmail);
  }

  return url.toString();
};
