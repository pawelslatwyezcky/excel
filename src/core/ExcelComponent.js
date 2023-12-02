import { DOMListener } from '@core/DOMListener';

export class ExcelComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.emitter = options.emitter;
    this.subscribe = options.subscribe || [];
    this.store = options.store;
    this.unsubscribe = [];

    this.prepare();
  }

  prepare() {}

  toHTML() {
    return '<div></div>';
  }

  $emit(eventName, ...args) {
    this.emitter.emit(eventName, ...args);
  }

  $on(eventName, callback) {
    const unsubscribe = this.emitter.subscribe(eventName, callback);
    this.unsubscribe.push(unsubscribe);
  }

  $dispatch(action) {
    this.store.dispatch(action);
  }

  // $subscribe(fn) {
  //   this.store.subscribe(fn);
  // }

  storeChanged() {}

  init() {
    this.initDOMListeners();
  }

  destroy() {
    this.removeDOMListeners();
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
}
