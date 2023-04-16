/**
 * Source: https://basarat.gitbook.io/typescript/main-1/typed-event
 */

export interface IListener<T> {
  (event: T): any;
}

export interface IDisposable {
  dispose(): void;
}

/** passes through events as they happen. You will not get events from before you start listening */
export class TypedEvent<T> {
  private listeners: IListener<T>[] = [];
  private listenersOncer: IListener<T>[] = [];

  on = (listener: IListener<T>): IDisposable => {
    this.listeners.push(listener);

    return {
      dispose: this.off.bind(this, listener)
    };
  }

  once = (listener: IListener<T>): void => {
    this.listenersOncer.push(listener);
  }

  off = (listener: IListener<T>) => {
    const callbackIndex = this.listeners.indexOf(listener);

    if (callbackIndex > -1)
      this.listeners.splice(callbackIndex, 1);
  }

  emit = (event: T) => {
    /** Update any general listeners */
    this.listeners.forEach((listener) => listener(event));

    /** Clear the `once` queue */
    if (this.listenersOncer.length > 0) {
      const toCall = this.listenersOncer;
      this.listenersOncer = [];
      toCall.forEach((listener) => listener(event));
    }
  }

  pipe = (te: TypedEvent<T>): IDisposable => {
    return this.on((e) => te.emit(e));
  }
}