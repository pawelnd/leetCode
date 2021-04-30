function countSameCharsAs1stLetter(str: string): number {
    if (str.length == 0){
        throw new Error('Illegal arg. EMmpty string')
    }

    const first = str[0];
    let counter = 0;
    for (const letter of str) {
        if (letter != first) {
            break;
        }
        counter++;
    }
    return counter;
}

function countAndSay(n: number): string {
    let result = '1';
    for (let i = 1; i < n; i++) {
        let tmp = result;
        let nextResult = '';
        while (tmp.length > 0) {
            const position = countSameCharsAs1stLetter(tmp);
            nextResult += position + tmp[0];
            tmp = tmp.replace(tmp.substring(0, position),'')
        }
        result = nextResult;
        console.log(' ----------------  ', result)
    }
    return result;
};

console.log(countAndSay(10))


/*
* 1
* 11
* 21
* 1211
* 111221
* 312211
* */
