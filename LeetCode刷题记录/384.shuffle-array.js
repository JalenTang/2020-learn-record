/*
    TAG ===> 数组，原地洗牌算法
    原地洗牌算法：随机选取一个当前位置至数组尾部的index，将当前位置的数和该index位置的数交换，时间复杂度O(n)
*/


/**
 * @param {number[]} nums
 */
const Solution = function (nums) {
	this.arr = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
	return this.arr;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
	const nums = this.arr.slice();

	for (let i = 0; i < nums.length; i++) {
		const random = Math.floor(Math.random() * (nums.length - i) + i);
		[nums[i], nums[random]] = [nums[random], nums[i]];
	}
	return nums;
};
