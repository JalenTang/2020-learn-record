/* TAG ==> 双指针
    给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
    说明：本题中，我们将空字符串定义为有效的回文串。

    输入："A man, a plan, a canal: Panama", 
    返回：true

    输入："race a car", 
    返回：false
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    var s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    var res = true
    var L = 0
    var R = s.length - 1

    while (L < R) {
        if (s[L] !== s[R]) {
            res = false
            break
        }
        L++
        R--
    }

    return res
};