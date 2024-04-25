const repositoryRootPath = path.resolve(__dirname, '..');
const isEmptyObject = obj => Object.keys(obj).length === 0;
const toggleBool = () => (bool = !bool);
const randomBoolean = () => Math.random() >= 0.5;
const symbolsPath = path.join(buildOutputPath, 'symbols');
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();