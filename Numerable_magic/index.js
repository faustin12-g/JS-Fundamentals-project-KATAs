function NumMagic(arr, func)
{
    return arr.every(func)
}

console.log(NumMagic([1,2,3,4,5], num=>num==10))