function max(arr) {
  let max = arr[0];
  for (let x of arr) {
    if (x > max) {
      max = x;
    }
  }
  return max;
}

var kidsWithCandies = function (candies, extraCandies) {
  let ans = [];
  let getMax = max(candies);
  for (let x of candies) {
    let sum = x + extraCandies;
    if (sum >= getMax) {
      ans.push(true);
    } else {
      ans.push(false);
    }
  }
  return ans;
};

candies = [2, 3, 5, 1, 3];
extraCandies = 3
const result = kidsWithCandies(candies, extraCandies);
console.log(result);