console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
const currentDate = () => new Date().toLocaleDateString('en-US');
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;