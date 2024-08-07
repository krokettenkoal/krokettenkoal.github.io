/**
 * Source: https://basarat.gitbook.io/typescript/main-1/typed-event
 */
/** passes through events as they happen. You will not get events from before you start listening */
export class TypedEvent {
    listeners = [];
    listenersOncer = [];
    on = (listener) => {
        this.listeners.push(listener);
        return {
            dispose: this.off.bind(this, listener)
        };
    };
    once = (listener) => {
        this.listenersOncer.push(listener);
    };
    off = (listener) => {
        const callbackIndex = this.listeners.indexOf(listener);
        if (callbackIndex > -1)
            this.listeners.splice(callbackIndex, 1);
    };
    emit = (event) => {
        /** Update any general listeners */
        this.listeners.forEach((listener) => listener(event));
        /** Clear the `once` queue */
        if (this.listenersOncer.length > 0) {
            const toCall = this.listenersOncer;
            this.listenersOncer = [];
            toCall.forEach((listener) => listener(event));
        }
    };
    pipe = (te) => {
        return this.on((e) => te.emit(e));
    };
}
//# sourceMappingURL=TypedEvent.js.map