/*  TAG ===> 双指针
    编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
    不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

    输入：["h","e","l","l","o"]
    输出：["o","l","l","e","h"]
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
    let L = 0
    let R = s.length

    while (L < R) {
        let temp = s[L]
        s[L] = s[R]
        s[r] = temp
        L++
        R--
    }
};

