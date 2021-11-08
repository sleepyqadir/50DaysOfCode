/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    return s.split(" ").filter((s) => {
        return s.length >= 1
    }).map((s) => {
        return s.split("").reverse().join("")
    }).join(" ")
};


console.log(reverseWords("Let's take LeetCode contest"))