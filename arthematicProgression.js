function findMissing(list)
{
    let diffs = []
    for(let i=0; i<list.length-1; i++)
    {
        diffs.push(list[i+1]-list[i])
    }
    let d = Math.min(...diffs)
    for(let i=0; i<list.length; i++)
    {
        if(list[i]+d !== list[i+1]) return list[i]+d
    }
}
