export const convertDateToString = (date: Date): string => {
    if (date) {
      const [, , month, year] = date.toUTCString().split(' ');
      return `${month} ${year}`;
    }
    return '';
}
