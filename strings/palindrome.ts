function isPalindrome(s: string): boolean {
    let str, strReversed;
    str = s.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    str = str.replace(/[\s]/gi, '');;
    strReversed = str.split('').reverse().join('')
    return str.toLowerCase() === strReversed.toLowerCase();
};


console.log(isPalindrome('A man, a plan, a canal: Panama'))
