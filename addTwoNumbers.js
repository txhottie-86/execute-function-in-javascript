console.log(1 +  +"2" + "2");
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);