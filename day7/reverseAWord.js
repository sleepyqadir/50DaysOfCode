/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {

    return s.split(" ").filter((s) => {
        return s.length >= 1
    }).reverse().join(" ")
};


console.log(reverseWords("a good   example"))