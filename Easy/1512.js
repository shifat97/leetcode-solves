var numIdenticalPairs = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) count++;
    }
  }
  return count;
};

const nums = [1, 2, 3];
const result = numIdenticalPairs(nums);
console.log(result);