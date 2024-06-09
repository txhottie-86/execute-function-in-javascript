const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
const timeFromDate = date => date.toTimeString().slice(0, 8);
const merge = [...new Set([...a, ...b])];