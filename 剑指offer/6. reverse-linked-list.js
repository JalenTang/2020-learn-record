/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
    var res = []
    var stack = []
    var cur = head

    while (cur) {
        stack.push(cur)
        cur = cur.next
    }
    

    while (stack.length !== 0) {
        res.push(stack[stack.length - 1].val)
        stack.pop()
    }

    return res
};

reversePrint([1, 3, 2])