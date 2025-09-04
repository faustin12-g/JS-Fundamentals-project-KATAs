// using for loop
function flatten(arr) {
    let flatArr = [];
    for(let a of arr)
    {
        if(Array.isArray(a))
        {
            for(let b of a)
            {
                flatArr.push(b);
            }
        }
        else{
            flatArr.push(a);
        }
    }
}
// Shorter syntax
const flatten = (arr)=> arr.reduce((acc, val)=> acc.concat(val),[])
