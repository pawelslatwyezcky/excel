export function capitalize(string) {
  if (typeof string !== 'string') return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function range(start, end) {
  return new Array(Math.abs(start - end) + 1)
    .fill('')
    .map((_, idx) => Math.min(start, end) + idx);
}
