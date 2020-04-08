/* 102. 二叉树的层序遍历 Binary Tree Level Order Traversal */
/* https://leetcode-cn.com/problems/binary-tree-level-order-traversal/ */


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
    const result = []
    if (root === null) return result

    const queue = []
    queue.push(root)

    while (queue.length !== 0) {
        const levelSize = queue.length // 每一层的节点数量
        const level = [] // 当前这一层

        for (let i = 0; i < levelSize; i++) { // for循环保证了【层级】
            const node = queue.shift()
            level.push(node.val)

            if (node.left !== null) {
                queue.push(node.left)
            }
    
            if (node.right !== null) {
                queue.push(node.right)
            }
        }

        result.push(layer)
    }

    return result
};