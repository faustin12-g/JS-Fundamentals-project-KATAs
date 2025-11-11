function isSortedAndHow(array) {
  let asc = true
  let dec = true
  
  for(let i=0; i<array.length; i++)
    {
      if(array[i]<array[i+1])
        {
          dec = false;
        }
      if(array[i]>array[i+1])
        {
          asc = false
        }
    }
 if(asc) return 'yes, ascending'
 if(dec) return 'yes, descending'
 return 'no'
}
