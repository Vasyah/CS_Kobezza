"use strict";
exports.__esModule = true;
var helper_1 = require("./helper");
var BCD = /** @class */ (function () {
    function BCD(num) {
        /* конвертировать исходное число в BCD
       если число больше, чем 28 бит (7 bcd символов), то
       оставшуюся часть добавляем следующем элементом массива this.numbers
    */
        this.numbers = [];
        this.isNegative = false;
        this.numbers = this.getBCD(num);
    }
    BCD.prototype.getBCD = function (num) {
        this.isNegative = num < 0;
        var numHelper = num;
        var BCD_SYMBOL_SIZE = 4;
        var MAX_DIGIT_SIZE = 7;
        var idx = 0;
        var result = [];
        // Добавить признак отрицательного числа
        if (this.isNegative) {
            var LAST_DIGIT = 29;
            result.push(1 << LAST_DIGIT);
        }
        console.log(result);
        while (numHelper > 0) {
            var digit = numHelper % 10n;
            var arrayIdx = Math.floor((idx + 1) / MAX_DIGIT_SIZE);
            // значение разряда числа
            var offset = idx * BCD_SYMBOL_SIZE;
            console.log({ numHelper: numHelper, idx: idx, arrayIdx: arrayIdx, digit: digit, offset: offset });
            result[arrayIdx] = result[arrayIdx] | Number(digit) << offset;
            numHelper /= 10n;
            idx += 1;
        }
        return result;
    };
    BCD.prototype.valueOf = function () {
        var resultNum = this.numbers.reduce(function (prev, current, idx) {
            var offset = BigInt(idx * 32);
            var big = BigInt(current);
            return prev | big << offset;
        }, 0n);
        return helper_1.binary(resultNum) + " \u0438\u043B\u0438 " + resultNum + "n";
    };
    return BCD;
}());
var n = new BCD(65536n);
console.log(n.valueOf());
// console.log(n.get(2));
// console.log(n.get(3));
// console.log(n.get(-10));
// console.log(n.get(-2));
