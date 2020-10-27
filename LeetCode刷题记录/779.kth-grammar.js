/*
    TAG ===> 递归 DP
    题目：
        在第一行我们写上一个 0。接下来的每一行，将前一行中的0替换为01，1替换为10。
        给定行数 N 和序数 K，返回第 N 行中第 K个字符。（K从1开始）
*/

/** DP
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
const kthGrammar = function (N, K) {
    const map = new Map()
    map.set('0', '01')
    map.set('1', '10')

    const dp = []
    dp[0] = '0'

    for (let i = 1; i < N + 1; i++) {
        let curr = ''
        for (let j = 0; j < dp[i - 1].length; j++) {
            curr += map.get(dp[i - 1][j])
        }
        dp[i] = curr
    }

    return dp[N].charAt(K - 1)
};

/** 递归
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
const kthGrammar2 = function (N, K) {
    const map = new Map()
    map.set('0', '01')
    map.set('1', '10')

    return helper(N, K)

    function helper(N, K) {
        if (N === 1) return '0'.charAt(K - 1)
        const isEven = K % 2 === 0
        const res = helper(N - 1, Math.ceil(K / 2))
        console.log({ N, isEven, res });
        return isEven ? map.get(res)[1] : map.get(res)[0]
    }
};
