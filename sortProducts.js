function sortProducts(products){
    const arr = Object.entries(products).sort((a,b)=>a[1]-b[1])
    return arr
}

console.log(sortProducts({
    apple: 10,
    banana: 5,
    orange: 20
})) // Output: [["orange", 20], ["banana", 5], ["apple", 10]]