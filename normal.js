const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
console.log(false == '0');