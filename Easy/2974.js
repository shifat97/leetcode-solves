var numberGame = function (nums) {
  nums.sort((a, b) => a - b);
  let ans = [];

  for (let i = 0; i < nums.length; i += 2) {
    let alice = nums[i];
    let bob = nums[i + 1];
    ans.push(bob);
    ans.push(alice);
  }

  return ans;
};

const nums = [17, 2, 4, 11, 14, 18];
const result = numberGame(nums);
console.log(result);