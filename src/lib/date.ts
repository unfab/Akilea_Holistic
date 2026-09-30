// Formats a date as YYYY-MM-DD in the browser's local time zone.
// Date.toISOString() converts to UTC first, which shifts local midnight
// back to the previous day in Slovenia (UTC+1/+2).
export function toLocalDateString(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
