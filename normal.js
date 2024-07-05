const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const shuffledArray = array.sort(() => Math.random() - 0.5); 