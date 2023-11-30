import { $ } from '@core/dom';

export function resizeHandler($root, event) {
  const $resizer = $(event.target);
  const $parent = $resizer.closest('[data-type="resizable"]');
  const coords = $parent.getCoords();
  const cells = $root.findAll(`[data-col="${$parent.data.col}"`);
  const type = $resizer.data.resize;
  let value;

  $resizer.css({
    opacity: 1,
  });

  if (type === 'col') {
    $resizer.css({
      bottom: '-5000px',
    });
  } else {
    $resizer.css({
      right: '-5000px',
    });
  }

  document.onmousemove = (e) => {
    if (type === 'col') {
      const delta = e.pageX - coords.right;
      $resizer.css({ right: -delta + 'px' });
      value = coords.width + delta;
    } else {
      const delta = e.pageY - coords.bottom;
      $resizer.css({ bottom: -delta + 'px' });
      value = coords.height + delta;
    }
  };
  document.onmouseup = () => {
    document.onmousemove = null;
    document.onmouseup = null;
    $resizer.css({
      opacity: 0,
      bottom: 0,
      right: 0,
    });
    if (type === 'col') {
      $parent.css({ width: value + 'px' });
      cells.forEach((el) => (el.style.width = value + 'px'));
    } else {
      $parent.css({ height: value + 'px' });
    }
  };
}
