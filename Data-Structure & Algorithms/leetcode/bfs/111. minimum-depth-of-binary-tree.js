/* 111. 二叉树的最小深度 Minimum Depth of Binary Tree */
/* https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/ */

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
const minDepth = function (root) {
    if (root === null) return 0
    let depth = 1
    const queue = []
    queue.push(root)

    while (queue.length !== 0) {
        const levelSize = queue.length // 当前层的宽度

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()
            if (node.left === null && node.right === null) { // 判断是否为叶子节点
                return depth
            }
            if (node.left !== null) {
                queue.push(node.left)
            }
            if (node.right !== null) {
                queue.push(node.right)
            }
        }
        depth++
    }
};
