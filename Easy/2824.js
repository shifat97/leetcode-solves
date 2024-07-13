var countPairs = function (nums, target) {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] < target) {
        count++;
      }
    }
  }
  return count;
};

const nums = [-1, 1, 2, 3, 1];
const target = 2;
const result = countPairs(nums, target);
console.log(result);