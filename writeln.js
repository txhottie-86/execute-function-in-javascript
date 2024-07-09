const removeDuplicates = (arr) => [...new Set(arr)];
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());