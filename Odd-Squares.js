function oddSquares(arr)
{
    const odd = arr.filter((num)=> num % 2!== 0);
        
    const squares = odd.map( num => num * num)
    console.log(odd)
    
    return squares

}

console.log(oddSquares([1, 2, 3, 4, 5, 6]));

function chec(nums)
{
    const numbersOnly = nums.filter(n=>{ 
        return typeof n === "number"
    })
    const square = numbersOnly.map(sq=>sq*sq)
    console.log(square)
    
}

chec([1,2,"wv", null, true, 9])