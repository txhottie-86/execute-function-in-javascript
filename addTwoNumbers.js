const updated = numbers.filter(element => element > 6);
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const reversedString = str => str.split('').reverse().join('');