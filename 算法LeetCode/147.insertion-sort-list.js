/*
    TAG ===> 链表 排序
    对链表进行插入排序。
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
const insertionSortList = function (head) {
	if (head === null) return head;

    // 定义一个哨兵节点
	const dummy = new ListNode(Number.NEGATIVE_INFINITY);
	let cur = head;
	let prev = dummy;

	while (cur) {
		let temp = cur.next;

        // 遍历找到插入的位置
		while (prev.next && prev.next.val < cur.val) {
			prev = prev.next;
		}
		cur.next = prev.next;
		prev.next = cur;

		// 重置前置节点并更新cur
		prev = dummy;
		cur = temp;
	}

	return dummy.next;
};
