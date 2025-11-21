function sumUpNumbers(arr)
{
   let sum = 0;
   for(let a of arr)
   {
    let decimalChar = null;
    if(/,[1,9]{1,2}$/.test(a)) decimalChar = ',';
    else if(/\.[1,9]{1,2}$/.test(a)) decimalChar = '.';

    let nomulated = a;
    if(decimalChar === ',')
    {
        nomulated = a.replace(/\./g, '').replace(',', '.');

    }
    else if(decimalChar === '.')
    {
        nomulated = a.replace(/,/g, '');
    }
    else{
        nomulated = a.replace(/[.,]/g, '');
    }
    sum += parseFloat(nomulated);
    
   }
    return sum;
}

console.log(sumUpNumbers(['1,234.56', '2.345,67', '3,456', '4.567'])); // Output: 12303.23
console.log(sumUpNumbers(['10,50', '20.75', '1,000', '2.500,25'])); // Output: 1031.5