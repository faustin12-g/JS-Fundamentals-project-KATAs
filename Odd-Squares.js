function oddSquares(arr)
{
    const odd = arr.filter(function(num)
        {
            return num % 2!== 0;
        })
        
    const squares = odd.map( num => num * num)
    console.log(odd)
    
    return squares

}

console.log(oddSquares([1, 2, 3, 4, 5, 6]));