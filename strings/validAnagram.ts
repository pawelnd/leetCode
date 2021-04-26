function isAnagram(s: string, t: string): boolean {
    if(s.length != t.length){
        return false;
    }

    s.split('').forEach(value => {
        t = t.replace(value,'')
    });

    return t == ''
};


console.log(isAnagram( "anagram",  "nagaram"))
