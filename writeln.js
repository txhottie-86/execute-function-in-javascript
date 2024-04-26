const uniqueArr = (arr) => [...new Set(arr)];
const merge = (a, b) => a.concat(b);
const randomBoolean = () => Math.random() >= 0.5;
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
var arr2 = arr1.reverse();