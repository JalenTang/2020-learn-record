/*
    TAG ==> 栈
    题目：
        实现自定义栈类 CustomStack ：
        CustomStack(int maxSize)：用 maxSize 初始化对象，maxSize 是栈中最多能容纳的元素数量，栈在增长到 maxSize 之后则不支持 push 操作。
        void push(int x)：如果栈还未增长到 maxSize ，就将 x 添加到栈顶。
        int pop()：弹出栈顶元素，并返回栈顶的值，或栈为空时返回 -1 。
        void inc(int k, int val)：栈底的 k 个元素的值都增加 val 。如果栈中元素总数小于 k ，则栈中的所有元素都增加 val 。
*/


/**
 * @param {number} maxSize
 */
const CustomStack = function(maxSize) {
    this.stack = []
    this._maxSize = maxSize
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if (this.stack.length < this._maxSize) {
        this.stack.push(x)
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    if (this.stack.length > 0) {
        return this.stack.pop()
    }
    return -1
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    this.stack = this.stack.map((item, index) => {
        if (index + 1 <= k) {
            return item + val
        } else {
            return item
        }
    })
};
