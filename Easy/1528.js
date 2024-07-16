var restoreString = function (s, indices) {
    let ans = [];
    for (let i = 0; i < s.length; i++) {
        ans[indices[i]] = s[i];
    }
    return ans.join('');
};

let s = "codeleet"
let indices = [4, 5, 6, 7, 0, 2, 1, 3]
let result = restoreString(s, indices);
console.log(result);
