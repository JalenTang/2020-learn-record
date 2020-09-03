/*
    TAG ==> 栈
    题目：
        给你一个字符串 s，「k 倍重复项删除操作」将会从 s 中选择 k 个相邻且相等的字母，并删除它们，使被删去的字符串的左侧和右侧连在一起。
        你需要对 s 重复进行无限次这样的删除操作，直到无法继续为止。
        在执行完所有删除操作后，返回最终得到的字符串。

        输入：s = "abcd", k = 2                     输出："abcd"
        输入：s = "deeedbbcccbdaa", k = 3           输出："aa"
        输入：s = "pbbcggttciiippooaais", k = 2     输出："ps"
*/

/** 
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const removeDuplicates = function (s, k) {
    const stack = []
    for (let i = 0; i < s.length; i++) {
        const val = s[i]
        const len = stack.length

        if (len > 0 && val === stack[len - 1].val) {
            stack[len - 1].count++
            if (stack[len - 1].count === k) {
                stack.pop()
            }
        } else {
            stack.push({ val, count: 1 })
        }
    }

    return stack.reduce((prev, item) => {
        return prev + item.val.repeat(item.count)
    }, '')
};
