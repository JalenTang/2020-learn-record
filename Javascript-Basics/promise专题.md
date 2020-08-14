# Promise 专题

## 手写相关 Promise

### Promise.then()

### Promise.all()

### Promise.race()

## promise 在实际代码中的表现

### 1. 为啥 `await` 在 `forEach` 中不生效？怎么解决

```javascript
function fetch(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, x * 1000);
  });
}

function test() {
  const arr = [1, 2, 3];
  arr.forEach(async item => {
    const res = await fetch(item);
    console.log(res);
  });
  console.log('end');
}

test();
// 依次输出
// 'end'
// 1
// 2
// 3
```

`Array.prototype.forEach`的底层实现只是简单的执行回调函数，无法处理异步情况，因此只支持同步代码，也无法使用`break`

解决方法：`Promise.all` 或者 `for...of`

```javascript
// 用Promise.all统一处理返回的promise对象数组
async function test1() {
  const arr = [1, 2, 3];
  Promise.all(
    arr.map(async item => {
      return await fetch(item);
    })
  ).then(resArr => {
    resArr.forEach(item => {
      console.log(item);
    });
    console.log('end');
  });
}

// for...of内部是用迭代器实现的，天然支持异步情况
async function test2() {
  const arr = [1, 2, 3];
  for (const item of arr) {
    const res = await fetch(item);
    console.log(res);
  }
  console.log('end');
}

// 迭代器的方式 Symbol.iterator 配合 next()
async function test3() {
  const arr = [1, 2, 3];
  const iterator = arr[Symbol.iterator]();
  let res = iterator.next();
  while (!res.done) {
    const value = res.value;
    const res1 = await fetch(value);
    console.log(res1);
    res = iterator.next();
  }
  console.log('end');
}
```

### 2.下述代码的输出值

```JavaScript
let a = 0
const test = async () => {
  a = a + await 10
  console.log(a)
}
test()
console.log(a)
// 输出
// 1
// 10
```
