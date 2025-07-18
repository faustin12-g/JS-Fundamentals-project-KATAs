function logocalCalc(array, op)
{
    if(op==="AND")
    {
        return array.every(value=>value===true)
    }
    else if(op==="OR")
    {
        return array.some(value=>value===true)
    }
    else if(op==="XOR")
    {

        let count = array.filter(value=>value===true).length;
        return count%2!==0;
    }
    else
    {
        return false;
    }
}
console.log(logocalCalc([false, false, false], "AND")); // true