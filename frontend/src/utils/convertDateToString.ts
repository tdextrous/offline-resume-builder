export const convertDateToString = (date: Date): string => {
    if (date && typeof date === 'object') {
      const [, , month, year] = date.toUTCString().split(' ');
      return `${month} ${year}`;
    }
    return '';
}
