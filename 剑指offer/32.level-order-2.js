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
var levelOrder = function (root) {
	if (root === null) return [];
	var res = [];

	var queue = [];
	queue.push(root);

	while (queue.length !== 0) {
		// 提前计算好每一层的length，防止循环中push影响length的值
		var len = queue.length;
		var level = [];

		for (var i = 0; i < len; i++) {
			var node = queue.shift();
			level.push(node.val);

			if (node.right) {
				queue.push(node.right);
			}
			if (node.left) {
				queue.push(node.left);
			}
		}

		res.push(level);
	}

	return res;
};
