const abbreviation = (str)=>{
    return str.replace(/\b[a-zA-Z]{4,}\b/g,(word)=>{
        const first = word[0];
        const middle = word.length-2
        const last = word[word.length-1];
        return `${first}${middle}${last}`;
        })
}
