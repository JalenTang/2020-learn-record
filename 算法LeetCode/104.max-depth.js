/* TAG ==> 递归 BFS
    给定一个二叉树，找出其最大深度。
    二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
    说明: 叶子节点是指没有子节点的节点。

    输入：[3, 9, 20, null, null, 15, 7]
    返回：3
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (root === null) return 0

    // 递归
    var leftHeight = maxDepth(root.left)
    var rightHeight = maxDepth(root.right)
    return Math.max(leftHeight, rightHeight) + 1
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepthWithBFS = function (root) {
    if (root === null) return 0

    var depth = 0

    // 利用BFS遍历 每层遍历 深度加+
    var queue = []
    queue.push(root)

    while (queue.length !== 0) {
        // 通过size和for循环 保证每一次处理同层级的节点
        var size = queue.length
        for (var i = 0; i < size; i++) {
            var node = queue.shift()
            if (node.left) {
                queue.push(left)
            }
            if (node.right) {
                queue.push(right)
            }
        }
        depth++
    }

    return depth
};