const scramble = (str, arr) =>
{
    let result = new Array(arr.length);

    for(let i=0; i<arr.length; i++)
        {
            result[arr[i]] = str[i];
        }
    return result.join('')
}

console.log(scramble("cbda", [2, 1, 3, 0]));

