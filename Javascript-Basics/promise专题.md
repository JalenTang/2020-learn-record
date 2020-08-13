# Promise专题

## 手写相关Promise

### Promise.all()

### Promise.race()

## promise在循环中的表现

1. 为啥 `await` 在 `forEach` 中不生效？怎么解决？

```javascript
function test() {
    const arr = [1, 2, 3]
    arr.forEach(async item => {
        const res = await fetch(item)
        console.log(res);
    })
    console.log('end');
}

function fetch(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x)
        }, x * 1000)
    })
}

test()
```

上面的代码会输出
```javascript
'end'
1
2
3
```
