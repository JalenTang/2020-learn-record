/*
    函数柯里化
*/

function currying(fn) {
	let args = [].slice.call(arguments, 1);

	return function () {
		let innerArgs = [].slice.call(arguments);
		let arr = args.concat(innerArgs);
		return fn.apply(null, arr);
	};
}
