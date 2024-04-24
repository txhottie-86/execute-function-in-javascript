const isWeekday = (date) => date.getDay() % 6 !== 0;
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const getRandomBoolean = () => Math.random() >= 0.5;
console.log(1 +  +"2" + "2");
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));