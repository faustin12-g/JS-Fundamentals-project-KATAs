function genaratePairs(n)
{
    let arr = [];
    for(let i=0;i<=n;i++)
    {
        for(let j=i;j<=n;j++)
        {
            arr.push([i,j]);
            
        }
    }
    return arr;
}
console.log(genaratePairs(3))