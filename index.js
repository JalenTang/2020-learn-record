function repeat(fn, times = 4, wait = 3000) {
	return function () {
		for (let i = 0; i < times; i++) {
			setTimeout(() => {
				fn('helloworld');
			}, wait * i);
		}
	};
}

const log = console.log;
const repeatFunc = repeat(log, 4, 3000);
repeatFunc();
