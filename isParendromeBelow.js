Number.prototype.isPalindromeBelow = function(base)
{
    const isPalindrome = (str)=>str===str.split('').reverse().join('');

    let result = []
    for(let i=1; i<this; i++)
    {
        if(isPalindrome(i.toString(base))) result.push(i);
    }
    return result;
}