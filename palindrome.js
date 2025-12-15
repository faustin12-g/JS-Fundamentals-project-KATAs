const palindrome = (string) => {
  return string.replace(/[^a-zA-Z0-9]/g, '').split('').reverse().join('').toLowerCase() === string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}