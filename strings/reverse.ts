function reverse(input: number): number {
    const isNegative = input < 0;
    const abs  = Math.abs(input)
    const length = abs.toString().length;
    let result = '';
    for (let i = 0; i < length; i++) {

    }

    return result.length > 0 ? parseInt(result, 10) : 0;
};


console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))
console.log(reverse(0))
console.log(reverse(1534236469))

console.assert(reverse(123) == -123)
console.assert(reverse(-123) == -321)
console.assert(reverse(120) == 21)
console.assert(reverse(0) == 0)
console.assert(reverse(1534236469) == 0)
