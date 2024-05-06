const intermediateAppPath = path.join(buildOutputPath, 'app');
const isWeekday = (date) => date.getDay() % 6 !== 0;
const isTabInView = () => !document.hidden;