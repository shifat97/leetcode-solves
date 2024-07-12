var minimumOperations = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let add = nums[i] + 1;
    let sub = nums[i] - 1;
    if (add % 3 == 0)
      count++;
    if (sub % 3 == 0)
      count++;
  }

  return count;
};

const nums = [3, 6, 9];
let result = minimumOperations(nums);
console.log(result);