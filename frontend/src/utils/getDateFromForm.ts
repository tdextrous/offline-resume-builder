const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const parseNewMonth = (monthString: string) =>
    months.findIndex(month => month === monthString);

const isNumeric = (value: any) =>
    !isNaN(value);

/**
 * This function should take the input from the Date form,
 * which is either a month string or a year (or the empty value)
 * And then return the appropriate date object.
 *
 * It takes either
 *  - month name string
 *  - Year (4 digit number)
 *  - undefined/empty value
 *
 * Should return either a Date or empty value.
 */
export const getDateFromForm = (input: string, currentDate: Date | null) => {
    if (!currentDate) {
        currentDate = new Date();
    }
    if (!input) {
        return '';
    } else if (isNumeric(input)) {
        // input is a year
        const newYear = parseInt(input);
        return new Date(newYear, currentDate.getUTCMonth());
    } else if (!isNumeric(input)) {
        // input is a month
        const newMonth = parseNewMonth(input);
        return new Date(currentDate.getFullYear(), newMonth);
    }
};
