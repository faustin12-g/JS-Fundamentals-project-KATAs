function capitalizeOdd(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (i % 2 !== 0) {
      result += char.toUpperCase();
    } else {
      result += char;
    }
  }

  return result;
}

capitalizeOdd("hello world");
