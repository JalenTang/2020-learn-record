/* TAG ==> Linked-List
    给定两个（单向）链表，判定它们是否相交并返回交点

    输入：[4,1,8,4,5], [5,0,1,8,4,5]
    返回：8

    输入：[0,9,1,2,4], [3,2,4]
    返回：2
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null

    var curA = headA
    var curB = headB

    while(curA !== curB) {
        curA = curA.next
    }

    return true
};
