/* TAG ==> 链表 双指针
    给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
    为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 
    如果 pos 是 -1，则在该链表中没有环。
    说明：不允许修改给定的链表。

    输入：head = [3,2,0,-4], pos = 1
    输出：tail connects to node index 1
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
 * @return {ListNode}
 */
const detectCycle = function (head) {
    // 快慢指针 有环必定相交
    let slow = head
    let fast = head

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        // 找到快慢指针的相遇点 
        if (slow === fast) {
            fast = head
            while (true) {
                if (slow === fast) {
                    return slow
                }
                slow = slow.next
                fast = fast.next
            }
        }
    }
    return null
};


// 标记法
const detectCycle = function (head) {
    if (!head || !head.next) return null

    let cur = head

    // 遍历标记，有环必定标记为true
    while (cur) {
        if (cur.flag) {
            return cur
        }
        cur.flag = true
        cur = cur.next
    }
    return null
};


