/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
	if (root === null) return [];
	var res = [];

	// 利用 BFS
	var queue = [];
	queue.push(root);

	while (queue.length !== 0) {
		var node = queue.shift();

		if (node.left) {
			queue.push(node.left);
		}

		if (node.right) {
			queue.push(node.right);
		}

		res.push(node.val);
	}

	return res;
};
