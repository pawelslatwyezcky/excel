export function capitalize(string) {
  if (typeof string !== 'string') return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function range(start, end) {
  return new Array(Math.abs(start - end) + 1)
    .fill('')
    .map((_, idx) => Math.min(start, end) + idx);
}

export function storage(key, data) {
  if (!data) return JSON.parse(localStorage.getItem(key));
  localStorage.setItem(key, JSON.stringify(data));
}

export function isEqual(a, b) {
  if (typeof a === 'object' && typeof b === 'object') {
    return JSON.stringify(a) === JSON.stringify(b);
  }
  return a === b;
}

export function camelToDash(str) {
  return str.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);
}

export function toInlineStyles(styles = {}) {
  return Object.keys(styles)
    .map((key) => `${camelToDash(key)}: ${styles[key]}`)
    .join('; ');
}

export function debounce(fn, wait) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      // eslint-disable-next-line
      fn.apply(this, args);
    }, wait);
  };
}
