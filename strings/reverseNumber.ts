const MAX = Math.pow(2, 31) - 1
const MIN = Math.pow(-2, 31)

function reverseNumber(x: number): number {
    let rev = 0;
    while (x != 0) {
        let pop = x % 10;
        x = (x / 10) >> 0;
        ;
        if (rev > (MAX / 10) >> 0 || (rev == (MAX / 10) >> 0 && pop > 7)) return 0;
        if (rev < (MIN / 10 >> 0) || (rev == (MIN / 10 >> 0) && pop < -8)) return 0;
        rev = rev * 10 + pop;
    }
    return rev;
};


function reverseNumber2(x: number): number {
    const isNegative = x < 0;
    let result = Math.abs(x).toString().split('').reverse().join('');
    result = result.replace(/^0*/, '');
    result = (isNegative ? '-' : '') + result;
    result = result == '' ? '0' : result;
    let resultNum = parseInt(result, 10);

    return resultNum.toString() == result && resultNum >= MIN && resultNum <= MAX ? resultNum : 0;
};


// console.log(reverseNumber2(123))
// console.log(reverseNumber2(-123))
// console.log(reverseNumber2(120))
// console.log(reverseNumber2(0))
// console.log(reverseNumber2(-1563847412))
console.log(reverseNumber2(1534236469))
console.log(reverseNumber2(1111111111199999999999999))

// console.assert(reverseNumber2(123) == -123)
// console.assert(reverseNumber2(-123) == -321)
// console.assert(reverseNumber2(120) == 21)
// console.assert(reverseNumber2(0) == 0)
// console.assert(reverseNumber2(-1563847412) == 0)
console.assert(reverseNumber2(1534236469) == 0)
