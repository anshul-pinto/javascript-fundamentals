// please complete the implementation
class EventEmitter {
  emmitters = {};

  subscribe(eventName, callback) {
    if (this.emmitters[eventName]) this.emmitters[eventName].push(callback);
    else this.emmitters[eventName] = [callback];

    return {
      release: () => {
        const emmiterMap = this.emmitters[eventName];
        if (!emmiterMap) return;

        const cbIdx = emmiterMap.indexOf(callback);
        if (cbIdx >= 0) this.emmitters[eventName] = emmiterMap.splice(cbIdx, 1);

        if (emmiterMap.length === 0) delete this.emmitters[eventName];
      },
    };
  }

  emit(eventName, ...args) {
    const emmitMap = this.emmitters[eventName];
    if (emmitMap && emmitMap.length) {
      emmitMap.forEach((emmiter) => {
        emmiter(...args);
      });
    }
  }
}

const emitter = new EventEmitter();
const callback1 = console.log("callback1");
const sub1 = emitter.subscribe("event1", callback1);
emitter.emit("event1", 1, 2, 3);
sub1.release();
emitter.emit("event1", 4, 5, 6);
