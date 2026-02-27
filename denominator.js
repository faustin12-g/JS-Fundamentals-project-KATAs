function dominator(arr) {
   let obj = {}
   arr.forEach(ele=>{
     obj[ele] = (obj[ele]||0)+1
   })
  let newArr = []
  for(let key in obj)
    {
      if(obj[key]>(arr.length/2)) newArr.push(key)
    }
  return newArr.length===0?-1:Number(newArr[0])
  }