const uniqueArr = (arr) => [...new Set(arr)];
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());