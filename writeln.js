const reversedString = str => str.split('').reverse().join('');
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
console.log(false === '0');