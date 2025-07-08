function sum (numbers) {
  var sum = 0;
  for(var i=0; i<numbers.length; i++)
    {
      sum += numbers[i];
    }
  return sum
}
sum([1, 5.2, 4, 0, -1]);