/**
 *
 * @param date
 * @returns String
 * This function formats a Timestamped date to  MM/dd/yyyy format
 */
export const formatTDate = (date: string): string => {
  date = date || new Date().toISOString();
  const newDate: string = date.split('T')[0];
  return newDate.split('-').join('/'); // convert to MM/dd/yyyy format
};
