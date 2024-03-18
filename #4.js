function str(n, p = 0) {
  return n.toString(2).padStart(8, p);
}

class BCD {
  numbers = [];

  constructor(num) {
    this.numbers = String(num)
      .split("")
      .map((number) => +number);
    //   .reverse();
  }

  valueOf() {
    let binaryValueStr = "0b";

    const numbers = [...this.numbers];

    const binaryNumbers = numbers.map((number) =>
      number.toString(2).padStart(4, 0)
    );

    const decimalValueStr = parseInt(binaryNumbers.join(""), 2);

    binaryValueStr = binaryValueStr.concat(binaryNumbers.join("_"));

    return `${binaryValueStr} или ${decimalValueStr}`;
  }

  get(idx = 0) {
    // Учитываем отрицательный индекс
    const idxTmp = idx >= 0 ? this.numbers.length - 1 - idx : idx * -1 - 1;

    console.log({ len: this.numbers.length, idxTmp });
    return this.numbers[idxTmp];
  }
}

const n = new BCD(65536);

console.log(n.valueOf());
console.log(n.get(1));
console.log(n.get(-2));
