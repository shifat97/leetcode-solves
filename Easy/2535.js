var differenceOfSum = function (nums) {
    let sum = 0;

    for (let n of nums)
        sum += n;
    let digitSum = 0;

    for (let n of nums) {
        if (n > 9) {
            while (n != 0) {
                let lastDigit = n % 10;
                digitSum += lastDigit;
                n = parseInt(n / 10);
            }
        }
        digitSum += n;
    }

    return Math.abs(sum - digitSum);
};

var nums = [1, 2, 3, 4]
var result = differenceOfSum(nums);
console.log(result);