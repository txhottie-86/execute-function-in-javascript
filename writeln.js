const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const uniqueArray = arr => [...new Set(arr)];
const minNumber = arr => Math.min(...arr);