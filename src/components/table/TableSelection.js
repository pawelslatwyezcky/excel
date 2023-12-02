export class TableSelection {
  static className = 'selected';
  constructor() {
    this.group = [];
    this.current = null;
  }

  select($el) {
    this.clear();
    $el.addClass(TableSelection.className);
    $el.focus();
    this.group.push($el);
    this.current = $el;
  }

  clear() {
    this.group.forEach((cell) => cell.removeClass(TableSelection.className));
    this.group = [];
  }

  get selectedIds() {
    return this.group.map(($cell) => $cell.id());
  }

  selectGroup($cells = []) {
    this.clear();
    this.group = $cells;
    this.group.forEach((cell) => cell.addClass(TableSelection.className));
  }

  applyStyle(style) {
    this.group.forEach(($el) => $el.css(style));
  }
}
