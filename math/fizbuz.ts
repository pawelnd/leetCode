function fizzBuzz(n: number): string[] {
    const result = []
    for (let i = 1; i <= n; i++) {
        result[i] = (i % 3 == 0 ? 'Fizz' : '') + (i % 5 == 0 ? 'Buzz' : '');
        result[i] = result[i] =='' ? i : result[i];
    }
    return result
};

console.log(fizzBuzz(1));
console.log(fizzBuzz(2));
console.log(fizzBuzz(15));
