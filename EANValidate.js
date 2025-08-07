function validateEAN(eanCode) {
    let nums = eanCode.split('')
    let nbrs = []
    let sum = 0
    let checkSum = 0
    let ending = Number(nums[nums.length-1])

    for(let i=0; i<nums.length-1; i++)
    {
        nbrs.push(Number(nums[i]))
    }
    for(let i=0; i<nbrs.length; i++)
    {
        if(i%2 == 0)
        {
            sum += nbrs[i]
        }
        else{
            sum += 3*nbrs[i]
        }
    }
    sum%10===0? checkSum = 0 : checkSum = 10 - (sum%10)
    return checkSum === ending

}
console.log(validateEAN("4003301018392"))