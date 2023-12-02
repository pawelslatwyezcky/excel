import { ExcelComponent } from '@core/ExcelComponent';
import { createHeader } from './header.template';
import * as actions from '@/state/actions';
import { $ } from '@core/dom';
import { ActiveRoute } from '../../core/router/ActiveRoute';

export class Header extends ExcelComponent {
  static className = 'excel__header';
  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input', 'click'],
      subscribe: ['titleState'],
      ...options,
    });
  }
  toHTML() {
    return createHeader(this.store.getState());
  }

  storeChanged({ titleState }) {
    console.log(titleState);
  }

  onInput(event) {
    this.$dispatch(actions.changeTitle(event.target.value));
  }

  onClick(event) {
    const $target = $(event.target);
    if ($target.data.button === 'remove') {
      localStorage.removeItem(`excel:${ActiveRoute.params}`);
      ActiveRoute.navigate('');
    }
    if ($target.data.button === 'exit') {
      ActiveRoute.navigate('');
    }
  }
}
