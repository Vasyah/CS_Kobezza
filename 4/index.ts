import { binary } from './helper';

interface IBCD {
    numbers: number[];
    isNegative: boolean;
}
class BCD implements IBCD {
    numbers: number[] = [];
    isNegative: boolean = false;

    constructor(num: bigint) {
        /* конвертировать исходное число в BCD
       если число больше, чем 28 бит (7 bcd символов), то
       оставшуюся часть добавляем следующем элементом массива this.numbers
    */

        this.numbers = this.getBCD(num);
    }

    getBCD(num: bigint): number[] {

        this.isNegative = num < 0;
        let numHelper: bigint = this.isNegative ? num * -1n : num;

        const BCD_SYMBOL_SIZE = 4;
        const MAX_DIGIT_SIZE = 7;
        let idx: number = 0;
        const result: number[] = [];

        // Добавить признак отрицательного числа
        if (this.isNegative) {
            const LAST_DIGIT = 28
            result.push(1 << LAST_DIGIT)
        }

        console.log(result);

        while (numHelper > 0) {

            let digit = numHelper % 10n;
            const arrayIdx = Math.floor((idx + 1) / MAX_DIGIT_SIZE);
            // значение разряда числа
            const offset = idx * BCD_SYMBOL_SIZE;
            console.log({ numHelper, idx, arrayIdx, digit, offset });
            console.log(result[arrayIdx])
            result[arrayIdx] = result[arrayIdx] | Number(digit) << offset;

            numHelper /= 10n;
            idx += 1
        }

        return result;
    }

    valueOf() {
        console.log(this.numbers);
        const numsHelper = [...this.numbers]

        if (this.isNegative) {
            console.log(binary(numsHelper[0]));
            console.log(binary((~0 << 31 >>> 4)));

            // numsHelper[0] = numsHelper[0];
        }

        const resultNum: bigint = this.numbers.reduce((prev, current, idx) => {
            const offset = BigInt(idx * 32)
            const big = BigInt(current);
            return prev | big << offset
        }, 0n);

        return `${binary(-127)} или ${resultNum}n`;
    }

    // get(idx) {}
}

const n = new BCD(-127n);

console.log(n.valueOf());
// console.log(n.get(2));
// console.log(n.get(3));
// console.log(n.get(-10));
// console.log(n.get(-2));
