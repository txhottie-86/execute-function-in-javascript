const flattenedArray = arr => [].concat(...arr);
const resultingPromises = urls.map((url) => makHttpRequest(url));