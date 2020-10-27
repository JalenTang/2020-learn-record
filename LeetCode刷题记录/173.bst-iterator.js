/*
    TAG ===> 栈 二叉树
    题目：
        实现一个二叉搜索树迭代器。你将使用二叉搜索树的根节点初始化迭代器。
        调用 next() 将返回二叉搜索树中的下一个最小的数。
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
 */
const BSTIterator = function(root) {
    this.sortStack = (function(root){
        const res = []

        function inorderTraversal(node) {
            if (node === null) return
            
            inorderTraversal(node.left)
            res.push(node.val)
            inorderTraversal(node.right)
        }
        inorderTraversal(root)
        return res.reverse()
    })(root);
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    return this.sortStack.pop()
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.sortStack.length > 0
};
