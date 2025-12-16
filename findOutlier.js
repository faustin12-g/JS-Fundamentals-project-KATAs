function findOutlier(integers){
 let odds = []
 let evens = []
 for(let i of integers)
   {
     if( i%2 === 0)
       {
         evens.push(i)
}
     else
       {
         odds.push(i)
       }
   }
  if(evens.length===1) return evens[0]
  if(odds.length===1) return odds[0]
}
