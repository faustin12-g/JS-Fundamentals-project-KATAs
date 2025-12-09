const vowelRecognition = (str) =>{
    const vowels = new Set("aeiouAEIOU");
    let total = 0;

    for(let i=0; i<str.length; i++){
        if(vowels.has(str[i]))
        {
            total += (i+1)*(str.length-i)
        }
    }
    return total;
}

console.log(vowelRecognition("baceb"));