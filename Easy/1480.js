var runningSum = function (nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;

    if (i == 0) {
      ans.push(nums[i]);
      continue;
    }

    for (let j = 0; j <= i; j++) {
      sum = sum + nums[j];
    }
    ans.push(sum);
  }

  return ans;
};

const nums = [1, 1, 1, 1, 1];
let result = runningSum(nums);
console.log(result);