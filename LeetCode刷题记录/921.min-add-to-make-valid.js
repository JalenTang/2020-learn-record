/* 
    TAG ==> 栈
    给定一个由 '(' 和 ')' 括号组成的字符串 S，我们需要添加最少的括号（ '(' 或是 ')'，可以在任何位置），以使得到的括号字符串有效。
    给定一个括号字符串，返回为使结果字符串有效而必须添加的最少括号数。

    输入："())"      输出：1
    输入："((("      输出：3
    输入："()"       输出：0
    输入："()))(("   输出：4
*/

/**
 * @param {string} S
 * @return {number}
 */
const minAddToMakeValid = function (S) {
    const stack = []
    let index = 0
    while (index < S.length) {
        const char = S.charAt(index)
        if (char === ')' && stack[0] === '(') {
            stack.shift()
        } else {
            stack.unshift(char)
        }
        index++
    }
    return stack.length;
};
