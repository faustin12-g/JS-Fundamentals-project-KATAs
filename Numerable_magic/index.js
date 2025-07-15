function all(arr, fun)
{
    return arr.every(fun)
}

console.log(all([1, 2, 3, 4, 5], (num) => num > 10))