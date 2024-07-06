const merge = Object.assign({}, obj1, obj2);
var regexp  = new RegExp('{{([^}]+)}}', 'g');
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';