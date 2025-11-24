function stringify(list) {
  
  if(list === null) return "null"
  let result = ""
  let current = list
  while(current !== null)
    {
      result += current.data + " -> "
      current = current.next
    }

  return result + "null";
}