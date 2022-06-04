

export function dateToFRString(date) {
    const toFormat = new Date(date);
    function needAZeroInFront(value) {
        return value > 9 ? value : `0${value}`;
    }
    return `${needAZeroInFront(toFormat.getDate())}/${needAZeroInFront(toFormat.getMonth())}/${toFormat.getFullYear()}`;
}
