function check(obj1, obj2)
{
    for(let key in obj1)
    {
        for(let key2 in obj2)
        {
            if((obj1 && obj1[key])===((obj2 && obj2[key2])))
            {
                return true
            }
            return false
        }
    }


}

console.log(check({ a: 1, b: { c: 2, d: [3, 4] } }, { a: 1, b: { c: 2, d: [3, 4] } }))