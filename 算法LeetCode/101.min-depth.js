/* TAG ==> BFS
    给定一个二叉树，找出其最小深度。
    二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
    说明: 叶子节点是指没有子节点的节点。

    输入：[3, 9, 20, null, null, 15, 7]
    返回：2
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
const minDepth = function (root) {
    if (root === null) return 0

    let depth = 1
    const queue = []
    queue.push(root)

    while (queue.length > 0) {
        const size = queue.length
        for (let i = 0; i < size; i++) {
            const node = queue.shift()

            if (node.left === null && node.right === null) {
                return depth
            }

            if (node.left !==null) {
                queue.push(node.left)
            }

            if (node.right !==null) {
                queue.push(node.right)
            }
        }
        depth++
    }
};
