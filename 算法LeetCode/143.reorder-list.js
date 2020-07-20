/* TAG ===> 链表

    给定一个单链表 L：L0→L1→…→Ln-1→Ln 
    将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…

    例如：
        给定链表 1->2->3->4, 重新排列为 1->4->2->3.
        给定链表 1->2->3->4->5, 重新排列为 1->5->2->4->3.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function (head) {
    const arr = []
    let cur = head
    while (cur) {
        arr.push(cur)
        cur = cur.next
    }

    let i = 0
    let j = arr.length - 1
    while (i <= j) {
        if (i === j) {
            arr[i].next = null
            break
        }
        console.log(i, j);
        arr[i].next = arr[j]
        i++
        if (i === j) {
            arr[i].next = null
            break
        }
        arr[j].next = arr[i]
        j--
    }
    return head
};

reorderList()

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const l5 = new ListNode(5, null)
const l4 = new ListNode(4, l5)
const l3 = new ListNode(3, l4)
const l2 = new ListNode(2, l3)
const head = new ListNode(1, l2)

console.log(head);

let res = reorderList(head)
while (res) {
    console.log(res.val);
    res = res.next
}

