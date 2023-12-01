const CODES = {
  A: 65,
  Z: 90,
};

function createCol(col, idx) {
  return `
 <div class="column" data-type="resizable" data-col="${idx + 1}">${col}
  <div class="col-resize" data-resize="col"></div>
 </div>`;
}

function createRow(row, content = '') {
  return `
<div class="row" data-type="resizable">
<div class="row-info" >${row}
  ${row !== '' ? '<div class="row-resize" data-resize="row"></div>' : ''}
</div>
<div class="row-data">${content}
</div>
</div>
`;
}

function createCell(row, col) {
  return `<div class="cell" data-row="${row}" data-col="${col}" data-id="${row}:${col}" data-type="cell" contenteditable></div>`;
}

export function createTable(rowsCount = 100) {
  const colsCount = CODES.Z - CODES.A + 1;
  const cols = new Array(colsCount)
    .fill('')
    .map((_, idx) => String.fromCharCode(CODES.A + idx))
    .map((el, idx) => createCol(el, idx))
    .join('');
  const rows = [];
  // const cells = new Array(colsCount).fill('').map(createCell).join('');
  for (let i = 0; i < rowsCount; i++) {
    if (i === 0) rows.push(createRow('', cols));
    else {
      const cells = [];
      for (let j = 1; j < colsCount; j++) {
        cells.push(createCell(i, j));
      }
      rows.push(createRow(i, cells.join('')));
    }
  }
  // for (let i = 0; i < rowsCount; i++) {
  //   if (i === 0) rows.push(createRow('', cols));
  //   else rows.push(createRow(i, cells));
  // }
  return rows.join('');
}
