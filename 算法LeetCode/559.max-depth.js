/* TAG ==> DFS
    给定一个 N 叉树，找到其最大深度。
    最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。

    输入：[1,null,3,2,4,null,5,6]
    返回：3
*/

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return 0
    if (!root.children || root.children.length === 0) return 1

    var res = 0
    var base = 0

    if (root.children.length > 0) {
        for (child of root.children) {
            console.log(child);
            console.log(maxDepth(child), res);
            res = Math.max(maxDepth(child), base)
        }
    }
    
    return res
};

var root = {
    val: 1,
    children: [
        {
            val: 3, children: [
                { val: 5, children: [] },
                { val: 6, children: [] },
            ]
        },
        { val: 2, children: [] },
        { val: 4, children: [] }
    ]
}

maxDepth(root)
