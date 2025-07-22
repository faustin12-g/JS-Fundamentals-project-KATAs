function convertNullableValues(data)
{
    for(let key in data)
    {
        if(data[key] === null)
        {
            data[key] = 0;
        } 
        if(data[key]===undefined)
        {
            data[key] = "";
        }
    }
    return data;
}

console.log(convertNullableValues({name: null, age: undefined, gender: "male"}));