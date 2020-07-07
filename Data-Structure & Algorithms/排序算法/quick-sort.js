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

const arr = [2, 34, 5, 7, 13, 88];
const res = quickSort(arr);
console.log(res);
