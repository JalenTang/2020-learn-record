/*
    插入排序思想：依次将元素插入到适当的位置
    时间复杂度 O(n^2)
*/

function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		for (let j = i; j > 0; j--) {
			if (arr[j] < arr[j - 1]) {
				[arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
			}
		}
	}
	return arr;
}

const arr = Array(10)
	.fill(0)
	.map((i) => Math.floor(Math.random() * 10));
console.log('排序前', arr);
const res = insertionSort(arr);
console.log('排序后', res);
