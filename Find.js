[foo, bar] = [bar, foo];
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';