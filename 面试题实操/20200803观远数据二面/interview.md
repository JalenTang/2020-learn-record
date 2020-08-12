# 20200803 观远数据钉钉视频二面

1. 自我介绍，怎么转行的，怎么学习的
2. webpack 代码分割 `CommonsChunkPlugin` 和 `SplitChunksPlugin`的区别？
3. css 盒子模型
4. css 获取盒子宽度的方式 style.width offsetWidth clientWidth 区别
5. 获取 DOM 节点的真实宽高 `getComputedStyle()`、`getBoundingClientRect()`，返回的坐标信息是相对于什么的？
6. JS 中箭头函数，在 class 中的箭头函数和普通函数的 this 指向
7. 函数柯里化了解吗？谈谈你的理解
8. babel 是怎么实现代码转换的？
9. 函数式编程了解吗？ramda.js
10. 代码题：实现 lodash 中`lodash.memoize()`
11. 技术问题上 委婉提出意见和直接提出意见 你比较倾向于哪一个
12. 其他闲扯

## 获取 DOM 节点的真实宽高

几个 API 的比较

- `HTMLElement.style`

1. 接口仅仅返回在元素内嵌`style`属性上声明的 css 属性，即`attribute`为`style`的属性
2. 这是一个只读 **_readonly_** 的接口，需要修改样式应该指定具体的属性，如：`ele.style.color = 'red'` 或者 `ele.style.cssText = 'color:red'`

- `window.getComputedStyle(element, [pseudoElt])`

1. 不同于*ele.style*，该接口能返回元素的所有 CSS 属性
2. 接口返回的`style`是一个实时的*CSSStyleDeclaration*对象，会根据元素的样式更改而自动变化

- `document.getBoundingClientRect()`
