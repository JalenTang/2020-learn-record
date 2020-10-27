/*
    TAG => DFS BFS

    题目：给定一个二叉树，它的每个结点都存放一个 0-9 的数字，每条从根到叶子节点的路径都代表一个数字。
    
    输入: [1,2,3] 输出: 25
    输入: [4,9,0,5,1] 输出: 1026
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * BFS 解题
 * @param {TreeNode} root
 * @return {number}
 */
const sumNumbersBFS = function (root) {
    if (root === null) return 0

    const path = []
    const queue = []
    queue.push([root, root.val])

    while (queue.length > 0) {
        const size = queue.length

        for (let i = 0; i < size; i++) {
            const [node, val] = queue.shift()
            if (node.left === null && node.right === null) {
                path.push(parseInt(val))
            }
            if (node.left !== null) {
                queue.push([node.left, `${val}${node.left.val}`])
            }
            if (node.right !== null) {
                queue.push([node.right, `${val}${node.right.val}`])
            }
        }
    }

    return path.reduce((a, b) => a + b, 0)
};

/**
 * DFS 解题
 * @param {TreeNode} root
 * @return {number}
 */
const sumNumbersDFS = function (root) {
    const res = [];
    helper(root, '', res);
    return res.reduce((acc, cur) => acc + (+cur), 0);

    function helper(root, cur, res) {
        if (root === null) return;
        cur += root.val;
        if (root.left === null && root.right === null) {
            res.push(cur);
            return;
        }
        helper(root.left, cur, res);
        helper(root.right, cur, res);
    }
};

