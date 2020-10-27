/*
    TAG ===> 回溯 
    题目：
        给定一个字符串S，通过将字符串S中的每个字母转变大小写，我们可以获得一个新的字符串。
        返回所有可能得到的字符串集合
*/

/**
 * @param {string} S
 * @return {string[]}
 */
const letterCasePermutation = function(S) {
    const res = []
    backtrack('', 0)
    return res

    function backtrack(str, index) {
        if (index === S.length) {
            res.push(str)
            return false
        } 

        const cur = S[index]
        if (/[A-Za-z]/.test(cur)) {
            const lower = str + cur.toLowerCase()
            const upper = str + cur.toUpperCase()
            backtrack(lower, index + 1)
            backtrack(upper, index + 1)
        } else {
            backtrack(str + cur, index + 1)
        }
    }
};