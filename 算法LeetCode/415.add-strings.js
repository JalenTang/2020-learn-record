/*
    TAG ==> 大数相加
    解题思路：摆竖式，处理进位
*/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var addStrings = function(str1, str2) {
    let res = ''
    const len1 = str1.length
    const len2 = str2.length
    const len = Math.max(len1, len2)

    for (let i = len1; i < len; i++) str1 = "0" + str1
    for (let i = len2; i < len; i++) str2 = "0" + str2

    let add = 0
    for (let i = len - 1; i >= 0; i--) {
        const cur1 = str1.charAt(i)
        const cur2 = str2.charAt(i)
        console.log(cur1, cur2);
        const temp = parseInt(cur1)+parseInt(cur2) + add
        add = Math.floor(temp / 10)
        res = (temp - add * 10) + '' + res
    }
    if (add !== 0) {
        res = '' + add + res
    }
    return res
}