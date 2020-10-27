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
    if (root === null) return 0


    var depthList = []

    for (var i = 0; i < root.children.length; i++) {
        console.log(root.children[i]);
        depthList.push(maxDepth(root.children[i]))
    }

    console.log('--------------');

    // console.log(depthList);

    return Math.max(...depthList) + 1
};

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepthWithBFS = function (root) {
    if (root === null) return 0

    var depth = 0

    // 利用BFS遍历 按层分组
    var queue = []
    queue.push(root)

    while (queue.length !== 0) {
        var size = queue.length

        for (var i = 0; i < size; i++) {
            var node = queue.shift()
            depth ++
            if(node.children) {
                queue.push(node.children)
            }
        }
    }

    return depth
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
