var truncateSentence = function (s, k) {
    s = s.split(" ");
    ans = "";
    for (let i = 0; i <= k - 1; i++) {
        ans += s[i];
        if (i == k - 1)
            break;
        ans += " ";
    }
    return ans;
};

let sen = "Hello how are you Contestant";
let k = 4
let result = truncateSentence(sen, k);
console.log(result);
console.log(result.length);