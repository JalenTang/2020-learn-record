/* 
    TAG ==> 栈
    给定一个字符串列表，每个字符串可以是以下四种类型之一：
    1.整数（一轮的得分）：直接表示您在本轮中获得的积分数。
    2. "+"（一轮的得分）：表示本轮获得的得分是前两轮有效 回合得分的总和。
    3. "D"（一轮的得分）：表示本轮获得的得分是前一轮有效 回合得分的两倍。
    4. "C"（一个操作，这不是一个回合的分数）：表示您获得的最后一个有效 回合的分数是无效的，应该被移除。

    每一轮的操作都是永久性的，可能会对前一轮和后一轮产生影响。
    你需要返回你在所有回合中得分的总和。

    输入: ["5","2","C","D","+"]  输出: 30
    输入: ["5","-2","4","C","D","9","+","+"] 输出: 27
*/

/**
 * @param {string[]} ops
 * @return {number}
 */
const calPoints = function (ops) {
    let sum = 0
    // 当前轮的分数
    let score = 0
    // 处理过程中每轮的分数
    let stack = []
    for (let i = 0; i < ops.length; i++) {
        const val = ops[i]
        const len = stack.length

        switch (val) {
            case '+':
                score = stack[len - 1] + stack[len - 2]
                stack.push(score)
                sum += score
                break;
            case 'C':
                score = stack.pop()
                sum -= score
                break;
            case 'D':
                score = stack[len - 1] * 2
                stack.push(score)
                sum += score
                break;
            default:
                stack.push(parseInt(val))
                sum = sum + parseInt(val)
                break;
        }
    }
    return sum
};