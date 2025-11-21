function sumUpNumbers(arr) {
  let total = 0;

  for (let a of arr) {
    let decimalChar = null;

    if (/,[0-9]{1,2}$/.test(a)) decimalChar = ",";
    else if (/\.[0-9]{1,2}$/.test(a)) decimalChar = ".";

    let normalized = a;

    if (decimalChar === ",") {
      normalized = normalized.replace(/\./g, "");
      normalized = normalized.replace(",", ".");
    } else if (decimalChar === ".") {
      normalized = normalized.replace(/,/g, "");
    } else {
      normalized = normalized.replace(/[.,]/g, "");
    }

    total += Number(normalized);
  }

  return total.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

console.log(sumUpNumbers(['1,234.56', '2.345,67', '3,456', '4.567'])); // Output: 12303.23
console.log(sumUpNumbers(['10,50', '20.75', '1,000', '2.500,25'])); // Output: 1031.5