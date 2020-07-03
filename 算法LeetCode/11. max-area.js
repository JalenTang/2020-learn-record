/* TAG ==> 双指针
    给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
    在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。
    找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

    输入：[1,8,6,2,5,4,8,3,7]
    返回：9
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    var res = 0

    // 定义左右指针
    var L = 0
    var R = height.length - 1

    while (L < R) {
        // 面积 = 两者较小值 * 下标差值
        var min = Math.min(height[L], height[R])
        res = Math.max(res, min * (R - L))

        if (height[L] <= height[R]) {
            L++
        } else {
            R--
        }
    }

    return res
};