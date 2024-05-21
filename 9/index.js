//## Реализовать класс для реализации двусторонней очереди на основе связного списка типизированных массивов
const assert = require("assert");

class Dequeue {
  constructor(ArrayType, capacity) {
    this.buffer = new ArrayType(capacity);
    this.last = Math.floor(this.buffer.length / 2);
    this.first = this.last;
  }

  isLastFront() {
    return this.last === -1;
  }

  isLastRear() {
    return this.last === this.buffer.length - 1;
  }

  pushFirst(value, position) {
    const isFirst = position === "left";
    const positionText = isFirst ? "first" : "last";
    this.buffer[this[positionText]] = value;

    // обязательный сдвиг начала и конца
    this.first--;
    this.last++;

    return;
  }

  /**
 * Pushes a value to the left (front) of the dequeue.
 *
 * @param {*} value - The value to be pushed to the left.
 */
  pushLeft(value) {
    if (this.first === this.last) {
      this.pushFirst(value, "left");
      return;
    }

    this.buffer[this.first] = value;
    this.first--;
  }

  /**
 * Pops a value from the left (front) of the dequeue.
 *
 * @returns {number} The value that was popped from the left.
 */
  popLeft() {
    if (this.first === this.last) {
      return this.buffer[this.last];
    }

    const idx = this.first;
    this.first++;

    return this.buffer[idx];
  }

  pushRight(value) {
    if (this.first === this.last) {
      this.pushFirst(value, "right");

      return;
    }

    this.buffer[this.last] = value;

    this.last++;

    if (this.isLastRear()) {
      // change buffer, save change next, change prev
    }
  }

  popRight() {
    if (this.first === this.last) {
      return this.buffer[this.last];
    }

    const idx = this.first;
    this.first++;

    return this.buffer[idx];
  }
}

{
  const dequeue = new Dequeue(Uint8Array, 6);

  dequeue.pushRight(9);
  dequeue.pushLeft(1);
  dequeue.pushLeft(4);
  dequeue.pushLeft(3);

  dequeue.pushRight(6);
  dequeue.pushRight(7);
  dequeue.pushRight(2);
  console.log(dequeue.buffer);

  const arr = new Uint8Array([3, 4, 1, 9, 6, 7]);

  assert(JSON.stringify(dequeue.buffer) === JSON.stringify(arr));
}
