var shuffle = function (nums, n) {
  let ans = [];
  for (let i = 0; i < n; i++) {
    let x = nums[i];
    let y = nums[n + i];
    ans.push(x);
    ans.push(y);
  }
  return ans;
};

const nums = [2, 5, 1, 3, 4, 7];
const n = 3;
const result = shuffle(nums, n);
console.log(result);
