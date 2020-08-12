# 20200806 大搜车现场面

二面 前端组长

1. 写过哪些组件库，怎么去设计的？
2. 写过哪些工具函数，为什么不用 lodash 之类的？
3. 你自己对个人职业生涯发展有什么规划？
4. 手写函数柯里化
5. 实现一个 computed 函数，计算顺序同四则运算

```javascript
function currying(fn) {

}
```

```javascript
const arr = ['1', '+', '2', '-', '3', '*', '4', '/', '5']
function computed(arr) {
    const formulate = arr.join('');
    return Function(
        `
        'use strict';
        return ${formulate}
        `
    )()
}
```

三面 技术负责人

1. 埋点了解过吗？页面某一块内容的埋点怎么做？
2. 低代码平台了解嘛？讲讲这个
3. 技术和业务你是怎么看待的？
