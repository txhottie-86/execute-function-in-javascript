const isArray = (arr) => Array.isArray(arr);
const isEmptyArray = arr => !arr.length;
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;