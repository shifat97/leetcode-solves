var arrayStringsAreEqual = function (word1, word2) {
  let sen1 = '', sen2 = '';
  for (let i = 0; i < word1.length; i++) {
    sen1 += word1[i];
  }

  for (let i = 0; i < word2.length; i++) {
    sen2 += word2[i];
  }

  if (sen1 == sen2)
    return true;

  return false;
};

const word1 = ["ab", "c"];
const word2 = ["a", "bc"];
const result = arrayStringsAreEqual(word1, word2);
console.log(result);