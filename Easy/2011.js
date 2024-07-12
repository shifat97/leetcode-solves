var finalValueAfterOperations = function (operations) {
  let x = 0;

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] == 'X++')
      x = x + 1;
    if (operations[i] == '++X')
      x = x + 1;
    if (operations[i] == 'X--')
      x = x - 1;
    if (operations[i] == '--X')
      x = x - 1;
  }

  return x;
};

const operations = ["X++", "++X", "--X", "X--"];
const result = finalValueAfterOperations(operations);
console.log(result);