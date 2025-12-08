/**
 * Event Emitter - Observer Pattern - Publisher/Subscriber
 * constructor, on, off, emit
 */

class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
    return this;
  }

  off(event, listener) {
    const listeners = this.events[event];
    if (!listeners) return this;

    const index = listeners.indexOf(listener);

    if (index !== -1) {
      listeners.splice(index, 1);
      if (listeners.length === 0) {
        delete this.events[event];
      }
    }

    return this;
  }

  emit(event, ...args) {
    const listeners = this.events[event];

    if (!listeners || listeners.length === 0) return false;

    const copy = listeners.slice();
    copy.forEach((fn) => fn(...args));

    return true;
  }
}

// Implementation
const customEventEmitter = new EventEmitter();

const greetFunction = () => console.log("Welcome to Custom Event Emitter");

customEventEmitter.on("greeting", greetFunction).emit("greeting", null);

customEventEmitter.off("greeting", greetFunction);
