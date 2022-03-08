import isEqual from 'lodash/isEqual';

type listener<T> = (arg: T) => unknown;

/**
 * Observer class to implement the observable pattern.
 * This patter whatches any changes in a single value, and notifies the 
 * subscribed functions as needed.
 */
class Observer<T> {
  handlers: Array<listener<T>> = [];
  currentValue: T;
  callFunctionOnSubscribe: boolean;

  /**
   * @constructor Create a new Observer class.
   * @param value The initial value of the Observer.
   * @param shouldCall Flag to determine if, each time a new function subscribes, immediately
   * call only that function with the current value, as a way to update rigth away instead of
   * checking the current value prop.
   */
  constructor(value: T, shouldCall = false) {
    this.currentValue = value;
    this.callFunctionOnSubscribe = shouldCall;
  }

  /**
   * Subscribe a listener that will be called each time the value that is been watched
   * updates.
   * @param fn The listener that will be called on new updates
   */
  subscribe (fn: listener<T>) {
    this.handlers.push(fn);
    if (this.callFunctionOnSubscribe) {
      fn(this.currentValue);
    }
  }

  /**
   * Unsubscribe a given listener from receiving more updates.
   * @param fn The listener that will be removed, **must be the same instance that was used to
   * subscribe**
   */
  unsubscribe (fn: listener<T>) {
    this.handlers.filter((item) => item !== fn);
  }

  /** Call each listener subscribed with the current value, usefull for values updates */
  notify() { this.handlers.forEach((fn) => fn(this.currentValue)); }

  /**
   * Update the current value been watched with a new one.
   * **Note:** the value is deeply comprared before calling the listeners,
   * so if a diferent object with same props is called, no listener calls will be done.
   * 
   * @param newValue The new value that will be stored
   */
  updateValue(newValue: T) {
    this.currentValue = newValue;

    if (!isEqual(newValue, this.currentValue)) {
      this.notify();
    }
  }
}

export { Observer };
