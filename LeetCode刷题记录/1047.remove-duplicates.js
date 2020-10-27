/*
    TAG ===> 栈
    给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。
    在 S 上反复执行重复项删除操作，直到无法继续删除。

    输入："abbaca"  输出："ca"
*/

/**
 * @param {string} S
 * @return {string}
 */
const removeDuplicates = function (S) {
    const stack = []
    for (let i = 0; i < S.length; i++) {
        const char = S.charAt(i)
        const head = stack[stack.length - 1]
        if (head === char) {
            stack.pop()
        } else {
            stack.push(char)
        }
    }
    return stack.join('')
};