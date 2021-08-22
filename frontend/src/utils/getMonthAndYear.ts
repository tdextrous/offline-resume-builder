export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const getMonthAndYear = (date: Date) => {
    let selectedMonth,
        selectedYear;
    if (!date) {
        selectedMonth = '';
        selectedYear = '';
    } else if (typeof date === 'object') {
        selectedMonth = months[date.getUTCMonth()];
        selectedYear = date.getFullYear().toString();
    }
    return [selectedMonth, selectedYear];
}
