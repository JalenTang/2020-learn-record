/* 101.对称二叉树 Symmetric Tree */
/* https://leetcode-cn.com/problems/symmetric-tree/ */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// 解法一：递归
const isSymmetric = function (root) {
    return isMirror(root, root)

    function isMirror(node1, node2) {
        if (node1 == null && node2 == null) return true
        if (node1 == null || node2 == null) return false
        return node1.val === node2.val && isMirror(node1.left, node2.right) && isMirror(node2.left, node1.right)
    }
};

// 解法二：迭代
const isSymmetric2 = function (root) {
    if (!root) return true
    let result = true
    const queue = []
    queue.push(root.left)
    queue.push(root.right)

    while (queue.length !== 0) {
        // 成双的出队
        const node1 = queue.shift()
        const node2 = queue.shift()
        if (node1 === null && node2 === null) continue
        if (node1 === null || node2 === null) {
            result = false
            break
        }
        if (node1.val !== node2.val) {
            result = false
            break
        }

        // 对称的将节点推入队列
        queue.push(node1.left)
        queue.push(node2.right)
        queue.push(node1.right)
        queue.push(node2.left)
    }

    return result
};
