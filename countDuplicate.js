function countDuplicate(text)
{
    let count = {}
    let sum = 0
    for(let c of text)
    {
        if(count[c])
        {
            count[c]++
        }
        else{
            count[c]=1
        }
    }
    for(let key in count)
    {
        if(count[key]>1)
        {
            sum++
        }
    }
    return sum

}
console.log(countDuplicate("Faustin Nshimiyimana ability to you to make man feel well"))