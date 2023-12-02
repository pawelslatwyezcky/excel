import { ExcelComponent } from '@core/ExcelComponent';
import { createHeader } from './header.template';
import * as actions from '@/state/actions';

export class Header extends ExcelComponent {
  static className = 'excel__header';
  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input'],
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
}
