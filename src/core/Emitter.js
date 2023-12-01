export class Emitter {
  constructor() {
    this.listeners = {};
  }

  emit(eventName, ...args) {
    if (!Array.isArray(this.listeners[eventName])) return;
    this.listeners[eventName].forEach((listener) => listener(...args));
  }

  subscribe(eventName, callback) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    this.listeners[eventName].push(callback);
    return () => {
      this.listeners[eventName] = this.listeners[eventName].filter(
        (listener) => listener !== callback
      );
    };
  }
}
