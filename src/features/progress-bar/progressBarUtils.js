export function countValues(items) {
    return items.reduce((previous, current) => previous + current.value, 0);
}

export function getPercentOfValue(value1, value2) {
    return value1 / value2 * 100;
}

export function getValueOfPercent(value, percent) {
    return value / 100 * percent;
}


