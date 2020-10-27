/* TAG ==> 链表 双指针

    给定一个链表，判断链表中是否有环。
    为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 
    如果 pos 是 -1，则在该链表中没有环。

    输入：head = [3,2,0,-4], pos = 1
    输出：true
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
 * @return {boolean}
 */
const hasCycle = function (head) {
    if (!head || !head.next) return false

    // 快慢指针 有环必定相交
    let slow = head
    let fast = head.next

    while (slow !== fast) {
        if (!fast || !fast.next) {
            return false
        }

        slow = slow.next
        fast = fast.next.next
    }
    return true
};

const hasCycle = function (head) {
    if (!head || !head.next) return false

    let cur = head

    // 遍历标记，有环必定标记为true
    while(cur.next) {
        if (cur.next.flag) {
            return true
        }
        cur.next.flag = true
        cur = cur.next
    }
    return false
};
