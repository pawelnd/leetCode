function longestCommonPrefix(strs: string[]): string {
    let longest = 0;
    for (const splittedElement of strs) {
        longest = Math.max(splittedElement.length, longest);
    }

    let longestCommon = '';
    for (let i = 1; i <= longest; i++) {
        let parts = strs.map(value => value.substring(0, i));

        if( parts.every(value => value === parts[0])){
            longestCommon = parts[0];
        }
    }
    return longestCommon;
};


console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["a"]))
