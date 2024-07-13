var maximumWealth = function (accounts) {
  let max = 0;
  for (let i = 0; i < accounts.length; i++) {
    let wealth = 0;

    for (let j = 0; j < accounts[i].length; j++) {
      wealth = wealth + accounts[i][j];
    }

    if (wealth > max) {
      max = wealth;
    }
  }

  return max;
};

accounts = [[1, 5], [7, 3], [3, 5]]
let result = maximumWealth(accounts);
console.log(result);