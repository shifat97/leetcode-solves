var findWordsContaining = function (words, x) {
  let ans = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x))
      ans.push(i);
  }

  return ans;
};

const words = ["abc", "bcd", "aaaa", "cbc"];
const x = 'z';
const result = findWordsContaining(words, x);
console.log(result);