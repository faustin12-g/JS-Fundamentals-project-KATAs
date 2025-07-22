function sumMl(n, m)
{
    if(n<=0 || m<=0)
    {
        return 'INVALID';
    }
    let sum = 0;
    for(let i=n; i<=m; i++)
    {
        if(i%2===0)
        {
            sum += i;
        }
    }
    return sum;
}
console.log(sumMl(2, 9)); // Output: 55


