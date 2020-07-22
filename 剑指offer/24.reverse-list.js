/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/** 双指针
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
    let pre = null
    let cur = head
    let tmp = null

    while (cur) {
        tmp = cur.next
        cur.next = pre
        pre = cur
        cur = tmp
    }
    return pre
};

/** 递归
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
    if (!head || !head.next) {
        return head
    }

    let cur = reverseList(head.next)
    head.next.next = head
    head.next = null
    return cur
};
