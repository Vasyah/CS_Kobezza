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
    const isNegative = idx < 0;
    const numbersLength = this.numbers.length;

    
    if (isNegative && idx * -1 > numbersLength) {
      throw new Error("Указанный индекс введён неверно");
    }

    // добавляем единицу, чтобы считать с конца
    const negativeIdx = numbersLength + 1 + idx;
    // Учитываем отрицательный индекс
    const idxTmp = idx >= 0 ? idx : negativeIdx;

    console.log({ len: numbersLength, idxTmp });
    return this.numbers[idxTmp];
  }
}

const n = new BCD(65536);

console.log(n.valueOf());
console.log(n.get(1));
console.log(n.get(2));
console.log(n.get(3));
console.log(n.get(-10));
console.log(n.get(-2));
