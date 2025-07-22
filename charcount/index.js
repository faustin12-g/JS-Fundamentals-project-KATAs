function charCount(str) {
    var arr = str.split('')
    let count = {}
    var sum = 0;
    for(let c of arr)
    {
        if (c.toLowerCase() in count)
        {
            sum ++;
        }
        count[c] = sum
    }
    return count
}

console.log(charCount('Aaamazigng'))