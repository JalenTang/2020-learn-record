/*
	快速排序主要思想：拿到一个标准值，将数组分成左右2组，递归实现，递归出口为单元素数组返回本身
*/

function quickSort(arr) {
	if (arr.length < 2) return arr;
	const midIndex = Math.floor(arr.length / 2);
	const pivot = arr.splice(midIndex, 1);
	const left = [];
	const right = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] >= pivot) {
			right.push(arr[i]);
		} else {
			left.push(arr[i]);
		}
	}

	// 递归
	return quickSort(left).concat(pivot, quickSort(right));
}

const arr = Array(3).fill(0).map(i => Math.floor(Math.random() * 100));
const res = quickSort(arr);
console.log(res);


// function quickSort(arr) {
// 	if (arr.length < 2) return arr;

// 	const base = arr[0];

// 	const left = [];
// 	const right = [];

// 	for (let i = 1; i < arr.length; i++) {
// 		if (arr[i] >= base) {
// 			right.push(arr[i]);
// 		} else {
// 			left.push(arr[i]);
// 		}
// 	}

// 	// 递归
// 	return quickSort(left).concat(base, quickSort(right));
// }
