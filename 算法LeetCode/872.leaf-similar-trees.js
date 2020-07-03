/* TAG ==> DFS
    如果有两颗二叉树的叶值序列是相同，那么我们就认为它们是 叶相似 的。

    输入：
    返回：6
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    return dfs(root1).toString() === dfs(root2).toString()
};

function dfs(root) {
    var res = []

    // 利用栈 先进后出 的特性 DFS
    var stack = []
    stack.push(root)

    while(stack.length !== 0) {
        var cur = stack.pop()

        // 先把右节点推进栈，再推左节点
        if (cur.right !== null) {
            stack.push(cur.right)
        }

        if (cur.left !== null) {
            stack.push(cur.left)
        }

        if (cur.left === null && cur.right === null) {
            res.push(cur.val)
        }
    }
    return res
}