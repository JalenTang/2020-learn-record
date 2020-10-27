/*  TAG ==> 滑动窗口
    给你一个字符串 S、一个字符串 T，请在字符串 S 里面找出：包含 T 所有字符的最小子串。

    输入：S = "ADOBECODEBANC", T = "ABC" 
    输出："BANC" 
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
    let left = 0
    let right = 0
    let map = new Map()
    // set中存在t中字符的数量，用于判断循环出口 validNum === t.length
    let validNum = 0

    while (right < s.length) {
        // 增大窗口 将字母加入map并计数
        const char = s[right]
        if (map.get(char)) {
            map.set(char, map.get(char) + 1)
        } else {
            map.set(char, 1)
        }
        right++;

        // 判断当前窗口内 包含多少个t的字符
        if () {

        }

        while () {
            // 缩小窗口
            left++;
        }
    }
};

function count(s) {
    let map = new Map()

    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (map.get(char)) {
            map.set(char, map.get(char) + 1)
        } else {
            map.set(char, 1)
        }
    }
    return map
}