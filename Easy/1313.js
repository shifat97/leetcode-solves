var decompressRLElist = function (nums) {
    let ans = [];
    for (let i = 0; i < nums.length; i += 2) {
        let freq = nums[i];
        let val = nums[i + 1];
        while (freq-- > 0) ans.push(val)
    }
    return ans;
};

nums = [1, 1, 2, 3];
const result = decompressRLElist(nums);
console.log(result);