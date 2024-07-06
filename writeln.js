const merge = [...new Set(a.concat(b))];
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const stringReverse = str => str.split("").reverse().join("");