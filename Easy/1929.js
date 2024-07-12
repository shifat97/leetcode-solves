var getConcatenation = function (nums) {
  let len = nums.length;
  let ans = [];

  for (let i = 0; i < len; i++) {
    ans[i] = nums[i];
  }

  let len2 = ans.length;
  for (let i = 0; i < len; i++) {
    ans[len2 + i] = nums[i];
  }

  return ans;
};

const nums = [1, 3, 2, 1]
const result = getConcatenation(nums);
console.log(result);