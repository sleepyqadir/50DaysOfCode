/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    b = b.split("")
    a = a.split("")
    const result = []
    let acc = "0"
    if (a.length > b.length) {
        appends = "0".repeat(a.length - b.length)
        console.log({ appends })
        b = (appends + b.join("")).split("")
        console.log({ b })
    }
    else if (a.length < b.length) {

        appends = "0".repeat(b.length - a.length)
        console.log({ appends })
        a = (appends + a.join("")).split("")
        console.log({ a })
    }
    for (let index = a.length - 1; index >= 0; index--) {
        length = (a[index] + b[index] + acc).split("1").length
        console.log("lem", { length })
        if (length === 2) {
            result.push(1)
            acc = "0"
        }
        else if (length === 3) {
            result.push(0)
            acc = "1"
        }
        else if (length === 4) {
            result.push(1)
            acc = "1"
        }
        else {
            result.push(0)
            acc = "0"
        }
    }
    if (acc === "1") {
        result.push(1)
    }
    return result.reverse().join("")
};

// console.log({ "c": addBinary("1010", "1011") })
// console.log({ "c": addBinary("111", "1") })
console.log({ "c": addBinary("1111", "1111") })