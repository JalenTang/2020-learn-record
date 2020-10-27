/* TAG ==> 栈
    根据 逆波兰表示法，求表达式的值。
    效的运算符包括 +, -, *, / 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。

    题目：["2", "1", "+", "3", "*"], 返回：9
    题目：["4", "13", "5", "/", "+"], 返回：6
    题目：["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"], 返回：22
*/

/**
 * @param {string[]} tokens
 * @return {number}
 */
function evalRPN(tokens) {
	const calSym = ['+', '-', '*', '/'];
	const stack = [];
	let index = 0;
	let len = tokens.length;

    // 直接执行字符串的运算操作
	function cal(str) {
		return parseInt(
			Function(
				`
            'use strict'
            return ${str}
            `
			)()
		);
	}

	while (index < len) {
		if (calSym.includes(tokens[index])) {
			const num1 = stack.shift();
			const num2 = stack.shift();
			const sym = tokens[index];
			console.log(num2, sym, num1);
			stack.unshift(cal(`(${num2})` + sym + `(${num1})`).toString());
		} else {
			stack.unshift(tokens[index]);
		}

		index++;
	}
	return stack.toString();
}

// 优化 运算符的具体处理
function evalRPN(tokens) {
	const stack = [];
	let num;

	for (let char of tokens) {
		console.log(stack);
		switch (char) {
			case '+':
				stack.unshift(stack.shift() + stack.shift());
				break;
			case '-':
				num = stack.shift();
				stack.unshift(stack.shift() - num);
				break;
			case '*':
				stack.unshift(stack.shift() * stack.shift());
				break;

			case '/':
				num = stack.shift();
				stack.unshift(parseInt(stack.shift() / num));
				break;
			default:
				stack.unshift(parseInt(char));
		}
	}
	return stack.shift();
}
