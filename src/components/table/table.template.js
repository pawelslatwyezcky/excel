const CODES = {
  A: 65,
  Z: 90,
};

function createCol(col) {
  return `
 <div class="column">${col}</div>`;
}

function createRow(row, content = '') {
  return `
<div class="row">
<div class="row-info">${row}</div>
<div class="row-data">${content}
</div>
</div>
`;
}

function createCell() {
  return `<div class="cell" contenteditable></div>`;
}

export function createTable(rowsCount = 100) {
  const colsCount = CODES.Z - CODES.A + 1;
  const cols = new Array(colsCount)
    .fill('')
    .map((_, idx) => String.fromCharCode(CODES.A + idx))
    .map(createCol)
    .join('');
  const rows = [];
  const cells = new Array(colsCount).fill('').map(createCell).join('');
  for (let i = 0; i < rowsCount; i++) {
    if (i === 0) rows.push(createRow('', cols));
    else rows.push(createRow(i, cells));
  }
  return rows.join('');
}
