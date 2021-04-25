function fizzBuzz(n: number): string[] {
    const result = []
    for (let i = 0; i < n; i++) {
        const num = i + 1;
        result[i] = (num % 3 == 0 ? 'Fizz' : '') + (num % 5 == 0 ? 'Buzz' : '');
        result[i] = result[i] == '' ? '' + num : result[i];
    }
    return result
};

console.log(fizzBuzz(1));
console.log(fizzBuzz(2));
console.log(fizzBuzz(15));
