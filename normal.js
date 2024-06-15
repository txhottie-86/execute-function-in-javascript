var c = new Counter(); c.add(); c.add(); c.add();
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';