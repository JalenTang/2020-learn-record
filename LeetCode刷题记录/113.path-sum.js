/*
    TAG ===> DFS + 树的遍历

    输入：              
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
        sum = 22 
    输出：
        [[5, 4, 11, 2], [5, 8, 4, 5]]
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
 * @param {number} sum
 * @return {number[][]}
 */
const pathSum = function (root, sum) {
    const result = []
    const path = []

    dfs(root, sum, result, path)

    return result

    function dfs(root, sum, result, path) {
        const stack = []
        stack.push(root)

        while (stack.length !== 0) {
            const node = stack.pop()
            path.push(node.val)

            // console.log(add(path));

            if (!node.right && !node.left) {
                if (add(path) === sum) {
                    result.push(path)
                    console.log(path);
                    path.pop()
                } else {
                    path.pop()
                }
            }

            if (node.right) {
                stack.push(node.right)
            }
            if (node.left) {
                stack.push(node.left)
            }
        }
    }

    function add(arr) {
        return arr.reduce((a, b) => a + b, 0)
    }
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const root = new TreeNode(5)
const node1 = new TreeNode(4)
const node2 = new TreeNode(8)
const node3 = new TreeNode(11)
const node4 = new TreeNode(13)
const node5 = new TreeNode(4)
const node6 = new TreeNode(7)
const node7 = new TreeNode(2)
const node8 = new TreeNode(5)
const node9 = new TreeNode(1)

root.left = node1
root.right = node2

node1.left = node3

node2.left = node4
node2.right = node5

node3.left = node6
node3.right = node7

node5.left = node8
node5.right = node9

pathSum(root, 22)