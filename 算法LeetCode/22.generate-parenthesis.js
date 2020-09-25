/*
    TAG ===> 回溯
    题目：数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
    例如：
        输入：n = 3
        输出：["((()))", "(()())", "(())()", "()(())", "()()()"]
*/

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
    const res = []
    
    const backTrack = (s, left, right) => {
        if (s.length === 2 * n) {
            res.push(s)
            return
        }

        // 左括号可选的条件 只要有剩余
        if (left > 0) {
            backTrack(s + '(', left - 1, right)
        }

        // 右括号可选的条件，必须大于左括号的数量
        if (right > left) {
            backTrack(s + ')', left, right - 1)
        }
    }

    backTrack('', n, n)
    return res
};

generateParenthesis(3)

// [ '((()))', '((()()', '((()()', '(()(()', '(()(()' ]

// ["((()))", "(()())", "(())()", "()(())", "()()()"]