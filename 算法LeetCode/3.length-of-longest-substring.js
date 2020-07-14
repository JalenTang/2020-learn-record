/*  TAG ==> 双指针 + 滑动窗口 +Set
    给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度

    输入："abcabcbb"  输出：3
    输入："bbbbb      输出：1
    输入："pwwkew"    输出：3
*/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    if (s.length < 2) return s.length

    const set = new Set()

    let maxLength = 0
    let i = 0

    // 滑动窗口 判断当前窗口内的元素是否重复
    for (let j = 0; j < s.length; j++) {
        while (set.has(s[j])) {
            set.delete(s[i])
            i++
        }
        set.add(s[j])
        console.log(set);
        maxLength = Math.max(maxLength, set.size)
    }
    return maxLength
};
