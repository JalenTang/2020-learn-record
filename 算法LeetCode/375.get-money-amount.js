/* TAG ==> DP
    我们正在玩一个猜数游戏，游戏规则如下：
    我从 1 到 n 之间选择一个数字，你来猜我选了哪个数字。
    每次你猜错了，我都会告诉你，我选的数字比你的大了或者小了。
    然而，当你猜了数字 x 并且猜错了的时候，你需要支付金额为 x 的现金。直到你猜到我选的数字，你才算赢得了这个游戏。
    给定 n ≥ 1，计算你至少需要拥有多少现金才能确保你能赢得这个游戏。

    例如：n = 10　===> 
*/

/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function (n) {
	const k = getCurrentK(1, n);

    const res =  k + Math.min(getMoneyAmount(1, k - 1), getMoneyAmount(k + 1, n));
    return Math.min(res, Number.MAX_SAFE_INTEGER)
};

function getCurrentK(x, y) {
	for (let i = x; i < y - x + 1; i++) {
		if (getSum(x, i) >= getSum(x, y)) {
			return i;
		}
	}
}

function getSum(x, y) {
	return ((x + y) * (y - x + 1)) / 2;
}

const res = getMoneyAmount(10);
console.log(res);
