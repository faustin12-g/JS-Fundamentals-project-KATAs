const sing =  () => {
  let lines = []
  for(let i=10; i>0; i--)
    {
      let bottle = i === 1 ? "bottle" : "bottles"
      let next = i-1 === 0 ? "no more bottles": i-1 === 1 ? "bottle" : "bottles"
      
      lines.push(`${i} ${bottle} f beer on the wal, ${i} ${bottle} of beer.`)
      lines.push(`Take one down and pass it around, ${next} of beer on the wall.`)
      
    }
  lines.push("No more bottles of beer on the wall, no more bottles of beer.");
  lines.push("Go to the store and buy some more, 99 bottles of beer on the wall.");


  
  return lines.join('\n');
};

console.log(sing());