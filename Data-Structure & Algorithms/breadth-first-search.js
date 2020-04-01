/**
 * @description 广度优先遍历
 * @author Jalen Tang<jalen2017@hotmail.com>
 * @date 2020-04-01
 * @param {object} nodes 节点树
 */
function breadthFirstSearch(tree) {
    const result = []
    const queue = []
    if (tree) {
        queue.push(tree)

        while (queue.length > 0) {
            const item = queue.shift()
            result.push(item)
            for (const v of item.children) {
                queue.push(v)
            }
        }
    }

    return result
}

class Node {
    constructor(id, children = []) {
        this.id = id
        this.children = children
    }
}

// 测试
const childNode11 = new Node('child11')
const childNode1 = new Node('child1', [childNode11])

const childNode21 = new Node('child21')
const childNode22 = new Node('child22')
const childNode23 = new Node('child23')
const childNode2 = new Node('child2', [childNode21, childNode22, childNode23])

const childNode31 = new Node('child31')
const childNode32 = new Node('child32')
const childNode3 = new Node('child3', [childNode31, childNode32])

const parentNode = new Node('parent', [childNode1, childNode2, childNode3])

const result = breadthFirstSearch(parentNode)

console.log(result.map(i => i.id));
// 输出 ['parent', 'child1', 'child2', 'child3', 'child11', 'child21', 'child22', 'child23', 'child31', 'child32']