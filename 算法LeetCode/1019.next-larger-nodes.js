/*
    TAG ===> 栈 单调栈
*/
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
const nextLargerNodes = function (head) {
    const arr = []
    let cur = head
    while (cur) {
        arr.push(cur.val)
        cur = cur.next
    }

    const stack = []
    const result = Array(arr.length).fill(0)
    for (let i = 0; i < arr.length; i++) {
        while (stack.length > 0 && arr[i] > arr[stack[0]]) {
            result[stack.shift()] = arr[i]
        }
        stack.unshift(i)
    }
    return result
};