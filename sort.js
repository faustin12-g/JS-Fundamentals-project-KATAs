function sort(sentence) {
  sentence = sentence.replace(/[^a-zA-Z ]/g, "");
  let words = sentence.split(" ").filter(w => w.length > 0);
  let lower = [];
  let upper = [];
  for (let word of words) {
    if (word[0] === word[0].toUpperCase()) {
      upper.push(word);
    } else {
      lower.push(word);
    }
  }
  lower.sort((a, b) => a.localeCompare(b));
  upper.sort((a, b) => b.localeCompare(a));

  return [...lower, ...upper].join(" ");
}


console.log(sort('and and burden eternal lesson take task the the the up '))
// and land land of of the Vermont Thirteen Old Massachusetts Land Connecticut