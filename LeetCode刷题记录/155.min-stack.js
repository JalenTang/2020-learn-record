/*
    TAG  ===> 栈
    题目：设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
*/

/**
 * initialize your data structure here.
 */
const MinStack = function () {
    this.stack = []
    this.minStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    const min = typeof this.getMin() === 'number' ? this.getMin() : Infinity
    if (x < min) {
        this.minStack.push(x)
    } else {
        this.minStack.push(min)
    }

    this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop();
    this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minStack[this.minStack.length - 1]
};
