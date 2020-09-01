/*
    TAG ===> 树的遍历 BFS
    题目：您需要在二叉树的每一行中找到最大的值。

    输入: 
          1
         / \
        3   2
       / \   \  
      5   3   9 

    输出: [1, 3, 9]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const largestValues = function(root) {
    if (root === null) return []

    const result = []
    const queue = []

    queue.push(root)

    while(queue.length !== 0) {
        const size = queue.length
        let max = -Infinity
        // 层次遍历
        for (let i = 0; i < size; i++) {
            const node = queue.shift()
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
            max = Math.max(max, node.val)
        }
        result.push(max)
    }
    return result
};
