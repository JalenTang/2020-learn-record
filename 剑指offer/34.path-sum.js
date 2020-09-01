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
    if (root === null) return []

    const result = []
    const path = []
    const stack = []
    stack.push(root)

    backtrack(path, stack, sum)

    return result

    function backtrack(path, stack, sum) {
        const cur = stack.pop()
        if (cur.left && cur.right && add(path) === sum) {
            result.push(path.slice())
            return
        }


        if (cur.right) {
            stack.push(cur.right)
        }

        if (cur.left) {
            stack.push(cur.left)
        }

        path.push(cur.val)
        backtrack(path, stack, sum - cur.val)
    }

    function add(arr) {
        return arr.reduce((a, b) => a + b, 0)
    }
};