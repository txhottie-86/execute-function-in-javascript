const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");