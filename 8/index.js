class Vector {
  lastIdx = null;

  constructor(arrayType, { capacity }) {
    this.buffer = new arrayType(capacity);
    this.arrayConstructor = arrayType;
    this.capacity = capacity;

    console.log(
      `Создан вектор [${this.buffer}] с ёмкостью ${this.capacity}, типом ${this
        .arrayConstructor.name}`
    );
  }

  /**
   * Функция для добавления элемента в вектор, при переполнении вектора
   * создаётся новый вектор с длинной 2 * capacity, в который аллоцируются все
   * элементы из предыдщущего вектора
   * @param {*} value - значение для добавления
   * @return {number} Возвращает длину вектора
   */
  push(value) {
    if (this.getLength() + 1 > this.capacity) {
      this.multiplyCapacity();

      console.log(
        "создаём новый вектор с длинной 2 * capacity, копируем все элементы из предыдущего вектора"
      );
    }

    // добавление первого элемента в вектор
    if (this.lastIdx === null) {
      this.lastIdx = 0;
      this.buffer[this.lastIdx] = value;

      console.log(`Добавлено значение ${value} в индекс ${this.lastIdx}`);
      return this.getLength();
    }

    this.buffer[this.lastIdx + 1] = value;
    this.lastIdx += 1;

    console.log(`Добавлено значение ${value} в индекс ${this.lastIdx}`);

    return this.getLength();
  }

  pop() {
    const lastEl = this.buffer[this.lastIdx];
    this.buffer[this.lastIdx] = 0;

    this.lastIdx -= 1;

    return lastEl;
  }
  multiplyCapacity() {
    this.buffer = [...this.buffer, ...new this.arrayConstructor(this.capacity)];

    this.capacity *= 2;
  }

  // функция для уменьшения размера вектора
  shrinkToFit() {
    try {
      // если ёмкость вектора используется не эффективно, то уменьшим его ёмкость
      const prevCapacity = this.capacity / 2;

      console.log({ prevCapacity, len: this.buffer.length });

      for (let idx = prevCapacity; idx < this.buffer.length - 1; idx++) {
        console.log(
          `Проверка на нулевое значение  ${this.buffer[idx]} в индексе ${idx}`
        );

        if (this.buffer[idx] !== 0) {
          throw new Error(
            "Не могу уменьшить размер вектора с не нулевыми элементами"
          );
        }
      }

      this.buffer = this.buffer.slice(0, prevCapacity);
      this.capacity = prevCapacity;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  getLength() {
    return this.lastIdx + 1;
  }
}

const vec = new Vector(Int32Array, { capacity: 2 });

vec.push(1);
vec.push(2);
vec.push(3);
vec.push(4);
vec.push(2);

console.log(vec);
