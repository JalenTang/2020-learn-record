class LimitPromise {
	constructor(max) {
		// 并发上限
		this._max = max;
		// 当前正在执行的任务数量
		this._count = 0;
		// 等待执行的任务队列
		this._taskQueue = [];
	}

	/**
	 *
	 * @param {*} caller 异步任务函数，它必须是async函数或者返回Promise的函数
	 * @param  {...any} args 函数参数
	 * @returns {Promise<>} 返回一个新的Promise
	 */
	call(caller, ...args) {
		return new Promise((resolve, reject) => {
			const task = this._createTask(caller, args, resolve, reject);

			if (this._count >= this.limit) {
				this._taskQueue.push(task);
			} else {
				task();
			}
		});
	}

	/**
	 * 创建一个任务
	 * @param {function} caller 实际执行的函数
	 * @param {*} args 函数参数
	 * @param {*} resolve
	 * @param {*} reject
	 * @return {funciton} 返回一个任务函数
	 */
	_createTask(caller, args, resolve, reject) {
		return () => {
			// 任务队列增加
			this.task++;

			caller(...args)
				.then(resolve)
				.catch(reject)
				.finally(() => {
					// 任务队列减少
					this._count--;
					// 判断任务队列，从队首依次执行
					if (this._taskQueue.length > 0) {
						const task = this._taskQueue.shift();
						task();
					}
				});
		};
	}
}

// 使用方式

// 封装的请求函数
request.get('https://www.baidu.com').then(res => {}).catch(err => {})
request.post('https://www.baidu.com').then(res => {}).catch(err => {})


const MAX = 10;
const limitP = new LimitPromise(MAX);

// 利用核心控制器包装request中的函数
function get(url, params) {
	return limitP.call(request.get, url, params);
}
function post(url, params) {
	return limitP.call(request.post, url, params);
}
// 导出
module.exports = { get, post };


// byte ma 代码

var asyncFn = (i) => new Promise((resolve) => setTimeout(() => resolve(i), 50));

class Pool {
  pool = 0;
  MAX = 6;
  list = [];

  results = [];
  queues = [];

  constructor(list = []) {
    this.list = list;
  }

  exec() {
    return new Promise((resolve, reject) => {

      for (let i = 0; i < this.list.length; i++) {
        const cb = () => {
          this.list[i]().then((res) => {
            this.results[i] = res;
            this.pool--;
            console.log(`执行完成`, i)
            const next = this.queues.shift();
            if (next) {
              this.pool++;
              next();
            }
            if (this.results.length >= this.list.length) {
              resolve(this.results);
            }
          });
        };
        if (this.pool < this.MAX) {
          this.pool++;
          cb();
        } else {
          this.queues.push(cb);
        }
      }
    });
  }
}
var all = (list) => {
  return new Pool(list).exec();
};

var list = new Array(100).fill(null).map((v, i) => () => asyncFn(i));
all(list).then((res) => {
  console.log(`返回`, res);
});

