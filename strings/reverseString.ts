
function reverseString(s: string[]): void {
    let reversed = s.reverse();
    for (let i = 0; i < s.length; i++) {
        s[i] = reversed[i]
    }
};


const test = ['a','b','c'];
reverseString(test);
console.log(test)
