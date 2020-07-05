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
	// 定义一个层数
	var layer = 0;
	queue.push(root);

	while (queue.length !== 0) {
		layer++;
		var len = queue.length;
		var level = [];

		for (var i = 0; i < len; i++) {
			var node = queue.shift();
			if (node.left) {
				queue.push(node.left);
			}
			if (node.right) {
				queue.push(node.right);
			}

			level.push(node.val);
		}

		// 根据层数的奇偶性 来反转
		if (layer % 2 === 0) {
			res.push(level.reverse());

		} else {
			res.push(level);
		}
	}

	return res;
};
