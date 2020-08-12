/* TAG ==> 栈
    给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
    有效字符串需满足：
        左括号必须用相同类型的右括号闭合。
        左括号必须以正确的顺序闭合

    题目："()", 返回：true
    题目："()[]{}", 返回：true
    题目："{[]}", 返回：true
    题目："([)]", 返回：false
*/

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    const list = s.split('')
    const len = list.length
    const stack = []
    const map = {
        "(": ")",
        ")": "(",
        "[": "]",
        "]": "[",
        "{": "}",
        "}": "{",
    }

    let index = 0

    while (index < len) {
        const cur = list[index]
        if (stack[0] === map[cur]) {
            stack.shift()
        } else {
            stack.unshift(cur)
        }
        index++
    }
    return stack.length === 0
};
