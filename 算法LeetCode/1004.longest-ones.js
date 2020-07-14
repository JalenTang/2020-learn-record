/*
    TAG ===> 滑动窗口 双指针
    给定一个由若干 0 和 1 组成的数组 A，我们最多可以将 K 个值从 0 变成 1 。
    返回仅包含 1 的最长（连续）子数组的长度。
 
    输入：A = [1,1,1,0,0,0,1,1,1,1,0], K = 2 
    输出 6
    输入：A = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3 
    输出 10
*/

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const longestOnes = function (A, K) {
    if (A.length < K) return A.length

    let i = 0
    let maxLength = 0
    let zeroNum = 0

    for (let j = 0; j < A.length; j++) {
        // 判断右指针是否为0，记录当前窗口内0的总数
        if (A[j] === 0) {
            zeroNum++
        }

        // 当窗口内 0 的个数大于 K 时，左指针右移
        while(zeroNum > K) {
            if (A[i] === 0) {
                zeroNum--
            }
            i++
        }
        maxLength = Math.max(maxLength, j - i + 1)
    }

    return maxLength
};

// const A = [1, 1, 1, 0, 0, 0]
const A = [0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1]
const K = 2
console.log(longestOnes(A, K));