function firstUniqChar(s: string): number {
    const chars = s.split('');
    let charsCount = {};
    for (const char of chars) {
        charsCount[char] = charsCount[char] ? charsCount[char] + 1 : 1
    }
    for (const char of chars) {
        if (charsCount[char] === 1) {
            return chars.indexOf(char);
        }
    }

    return -1;
};

console.log(firstUniqChar('leetcode'))
console.log(firstUniqChar('loveleetcode'))
console.log(firstUniqChar('aabb'))
