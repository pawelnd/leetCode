
function reverseNumber(input: number): number {
    const isNegative = input < 0;
    const abs = Math.abs(input);
    const absReversed = abs.toString().split('').reverse().join('');

    let result = parseInt(absReversed, 10);
    if(result.toString().split('').reverse().join('') !== abs.toString()){
        return 0;
    }
    return parseInt(absReversed, 10) * (isNegative ? -1 : 1);
};


console.log(reverseNumber(123))
console.log(reverseNumber(-123))
console.log(reverseNumber(120))
console.log(reverseNumber(0))
console.log(reverseNumber(1534236469))

console.assert(reverseNumber(123) == -123)
console.assert(reverseNumber(-123) == -321)
console.assert(reverseNumber(120) == 21)
console.assert(reverseNumber(0) == 0)
console.assert(reverseNumber(1534236469) == 0)
