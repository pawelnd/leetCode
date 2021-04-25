const MAX = Math.pow(2,31) - 1
const MIN = Math.pow(-2,31)
function reverseNumber(x: number): number {
    let rev = 0;
    while (x != 0) {
        let pop = x % 10;
        x = (x / 10) >> 0;;
        if (rev > (MAX / 10) >> 0 || (rev == (MAX / 10) >> 0 && pop > 7)) return 0;
        if (rev < (MIN / 10 >>0) || (rev == (MIN / 10 >>0) && pop < -8)) return 0;
        rev = rev * 10 + pop;
    }
    return rev;
};


console.log(reverseNumber(123))
console.log(reverseNumber(-123))
console.log(reverseNumber(120))
console.log(reverseNumber(0))
console.log(reverseNumber(-1563847412))
console.log(reverseNumber(1534236469))

console.assert(reverseNumber(123) == -123)
console.assert(reverseNumber(-123) == -321)
console.assert(reverseNumber(120) == 21)
console.assert(reverseNumber(0) == 0)
console.assert(reverseNumber(1534236469) == 0)
console.assert(reverseNumber(-1563847412) == 0)
