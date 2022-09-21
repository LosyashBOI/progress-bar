export function countValues(items) {
    let totalValue = 0;

    items.forEach((item) => {
        totalValue += item.value;
    })

    return totalValue;
}

export function getPercentOfValue(value1, value2) {
    return value1 / value2 * 100;
}

export function getValueOfPercent(value, percent) {
    return value / 100 * percent;
}


