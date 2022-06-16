/**
 * Convert a passed date to a french format string
 * @param date can be a Date or string type
 */
export function dateToFRString(date: Date | string): string {
    const toFormat = new Date(date);
    function needAZeroInFront(value: number) {
        return value > 9 ? value : `0${value}`;
    }
    return `${needAZeroInFront(toFormat.getDate())}/${needAZeroInFront(toFormat.getMonth())}/${toFormat.getFullYear()}`;
}
