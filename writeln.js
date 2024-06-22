const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const timeFromDate = date => date.toTimeString().slice(0, 8);