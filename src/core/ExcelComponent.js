import { DOMListener } from '@core/DOMListener';

export class ExcelComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.emitter = options.emitter;
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

  init() {
    this.initDOMListeners();
  }

  destroy() {
    this.removeDOMListeners();
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
}
