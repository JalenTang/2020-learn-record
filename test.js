/**
 * @param {number[]} cost
 * @param {number[]} val
 * @param {number} total
 * @return {number}
 */
const zeroOnePack = function (cost, val, total) {
    const dp = []

    const base = Array(total + 1).fill(0)
    dp.push(base)

    const len = val.length
    for (let i = 1; i < len + 1; i++) {
        dp.push([0])
        for (let j = 1; j < total + 1; j++) {
            let [inPack, notInPack] = [0, 0]
            if (j >= cost[i - 1]) {
                inPack = dp[i - 1][j - cost[i - 1]] + val[i - 1]  // 装
                notInPack = dp[i - 1][j] // 不装
                dp[i][j] = Math.max(inPack, notInPack)
            } else {
                dp[i][j] = dp[i - 1][j] // 只能不装
            }
        }
    }

    console.log(dp);

    return dp[len][total]
};

const res = zeroOnePack([1, 2, 3], [2, 3, 1], 6);
console.log(res);

