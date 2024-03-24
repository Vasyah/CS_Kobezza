interface IBCD {
    numbers: number[];
}
class BCD implements IBCD {
    numbers: number[] = [];

    constructor(num: bigint) {
        /* конвертировать исходное число в BCD
       если число больше, чем 28 бит (7 bcd символов), то
       оставшуюся часть добавляем следующем элементом массива this.numbers
    */

        const symbols = num.toString().split("");
        const BCD_SYMBOL_SIZE = 4;
        const MAX_DIGIT_SIZE = 8;

        symbols.forEach((symbol, index) => {
            const idx = Math.floor(index / MAX_DIGIT_SIZE);
            this.numbers[idx] = (this.numbers[idx] << BCD_SYMBOL_SIZE) | +symbol;
        });
    }

    // метод возвращает
    valueOf() {
        return this.numbers;
    }

    // get(idx) {}
}

const n = new BCD(65536n);

console.log(n.valueOf());
// console.log(n.get(1));
// console.log(n.get(2));
// console.log(n.get(3));
// console.log(n.get(-10));
// console.log(n.get(-2));
