function countAndSay(n: number): string {
    let result = '1';
    for (let i = 1; i < n; i++) {
        let tmp = result;
        let nextResult = '';
        while (tmp.length > 0) {
            console.log(tmp)
            let index = ((t) => {
                let counter = 0;
                for (const character of t) {
                    if (character === tmp[0]) {
                        counter++;
                    } else {
                        break;
                    }
                }
                return counter;
            })(tmp)
            nextResult += index + tmp[0];
            tmp = tmp.substring(0, index-1 )
        }
        result = nextResult;
    }
    return result;
};

console.log(countAndSay(4))


/*
* 1
* 11
* 21
* 1211
* 111221
* 312211
* */
