var buildArray = function (nums) {
  let ans = [];

  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[nums[i]]);
  }

  return ans;
};

const arr = [5, 0, 1, 2, 3, 4];
let result = buildArray(arr);
console.log(result);