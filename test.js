function sum(a, b) {
	let aIndex = a.length - 1;
	let bIndex = b.length - 1;
	let cur = 0;
	let arr = [];
	let res;

	while (aIndex >= 0 && bIndex >= 0) {
		let m = Number(a[aIndex]);
		let n = Number(b[bIndex]);
		if (m + n + cur >= 10) {
			arr.push((m + n + cur) % 10);
			cur = Math.floor((m + n + cur) / 10);
		} else {
			arr.push((m + n + cur) % 10);
			cur = 0;
		}

		aIndex--;
		bIndex--;

		if (aIndex < 0 && bIndex >= 0) {
			console.log(b.slice(0, bIndex + 1));
			arr.push(Number(b.slice(0, bIndex + 1).toString()) + cur);
			break;
		}

		if (bIndex < 0 && aIndex >= 0) {
			arr.push(Number(a.slice(0, aIndex + 1).toString()) + cur);
			break;
		}

		if (aIndex < 0 && aIndex < 0) {
			if (cur > 0) {
				arr.push(cur);
			}

			break;
		}
	}
	console.log(arr);
	res = arr.reverse().join('');
	console.log(res);
	return res;
}

// "167141802233061013023557799168121920809282032"
sum('401716832807512840963', '167141802233061013023557397451289113296441069');
