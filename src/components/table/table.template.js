import { toInlineStyles } from '../../core/utils';
import { defaultStyles } from '../../constants';
import { parse } from '../../core/parse';

const CODES = {
  A: 65,
  Z: 90,
};

const DEFAULT_WIDTH = 120;
const DEFAULT_HEIGHT = 24;

function createCol(col, idx, width) {
  return `
 <div class="column" data-type="resizable" data-col="${idx}" style="width:${width}">${col}
  <div class="col-resize" data-resize="col"></div>
 </div>`;
}

function createRow(state, row, content = '') {
  const height = getHeight(state, row);
  return `
<div class="row" data-type="resizable" data-row="${row}" style="height: ${height}" >
<div class="row-info" >${row}
  ${row !== '' ? '<div class="row-resize" data-resize="row"></div>' : ''}
</div>
<div class="row-data">${content}
</div>
</div>
`;
}

function createCell(row, col, state) {
  const width = getWidth(state.colState, col);
  const content = getContent(row, col, state.dataState);
  const styles = toInlineStyles({
    ...defaultStyles,
    ...state.stylesState[`${row}:${col}`],
  });
  console.log(content);
  return `<div class="cell" data-row="${row}" data-col="${col}" data-id="${row}:${col}" style="${styles}; width:${width}" data-type="cell" data-value="${content}" contenteditable>${parse(
    content
  )}</div>`;
}

function getWidth(state, index) {
  return (state[String(index)] || DEFAULT_WIDTH) + 'px';
}

function getHeight(state, index) {
  return (state[String(index)] || DEFAULT_HEIGHT) + 'px';
}

function getContent(row, col, state) {
  return state[`${row}:${col}`] || '';
}

export function createTable(rowsCount = 100, state) {
  const colsCount = CODES.Z - CODES.A + 1;
  const cols = new Array(colsCount)
    .fill('')
    .map((_, idx) => String.fromCharCode(CODES.A + idx))
    .map((el, idx) => {
      const width = getWidth(state.colState, idx + 1);
      return createCol(el, idx + 1, width);
    })
    .join('');
  const rows = [];
  // const cells = new Array(colsCount).fill('').map(createCell).join('');
  for (let i = 0; i < rowsCount; i++) {
    if (i === 0) rows.push(createRow(state, '', cols));
    else {
      const cells = [];
      for (let j = 1; j < colsCount; j++) {
        cells.push(createCell(i, j, state));
      }
      rows.push(createRow(state.rowState, i, cells.join('')));
    }
  }
  // for (let i = 0; i < rowsCount; i++) {
  //   if (i === 0) rows.push(createRow('', cols));
  //   else rows.push(createRow(i, cells));
  // }
  return rows.join('');
}
