# HTML 和 CSS 基础

## HTML

### 页面的生命周期 DOMContentLoaded/load/beforeunload/unload

- DOMContentLoaded: 浏览器已经完全加载了 HTML，DOM 树构建完毕，但是<img>和样式表等外部资源还没下载完毕
- load 浏览器已经加载所有的资源，包括图像，样式文件等等
- beforeunload/unload 当用户离开页面时触发

应用：

- DOMContentLoaded：DOM 加载完毕，可以通过 JS 访问或操作 DOM，初始化界面
- load: 附加资源已经加载完毕，可以在此事件触发时获得图像的大小（如果没有被在 HTML/CSS 中指定）
- beforeunload/unload：用户正在离开页面，可以询问用户是否保存了更改以及是否确定要离开页面。

具体案例：

```HTML
document.addEventListener("DOMContentLoaded", () => {})
```

### DOM 事件流

阻止 DOM 事件冒泡

- W3C 标准：`event.stopPropagation()`
- IE：`event.cancelBubble()`

取消默认操作

- W3C 标准：`event.preventDefault()`
- IE：`event.returnValue = false`

### `<script>`标签中 async 和 defer 的区别

```html
<script src="xxx"></script>
<script src="xxx" async></script>
<script src="xxx" defer></script>
```

常规的 js 脚本

1. 当`HTML parser`解析到该位置时，浏览器会停止解析 HTML，
2. 知道 js 脚本下载并执行完毕后，才继续进行 HTML 的解析，
3. 原因是 JS 脚本中可能会有操作 DOM 对象的代码，因此为了防止错乱，JS 脚本会阻塞 HTML 的解析

`async`js 脚本

1. 表示异步执行 js 文件
2. 当`HTML parser`解析到该位置时，浏览器会并行地下载该 js 脚本，此时 HTML 会继续解析
3. 当 JS 脚本下载完毕后，该 JS 脚本立即执行，执行时会阻塞 HTML 的解析

`defer`js 脚本

1. 表示延迟执行 js 文件，
2. 当`HTML parser`解析到该位置时，浏览器会并行地去下载该 js 脚本，此时 HTML 会继续解析
3. 直到整个 HTML 解析完毕后，该 JS 脚本开始执行，即延迟到 HTML 解析完毕执行

## CSS

### padding margin 值为百分比时的计算

**注意点**：`padding`和`margin`设置为百分比的参照物都是父元素的`width`，无论是`left`，`right`还是`top`，`bottom`

例如：如何画一个正方形的元素

```html
// 元素宽度为父元素宽度width，元素高度利用padding-bottom撑开，值也为父元素width，达到正方形
<style>
  width: 100%;
  padding-bottom: 100%;
</style>
```

## 浏览器相关

### 回流和重绘

#### 回流 reflow

1. 什么是回流？
2. 回流有什么影响？
3. 哪些操作会引起回流？
4. 怎么避免浏览器发生回流？

#### 重绘 repaint

1. 什么是重绘？
2. 重绘有什么影响？
3. 哪些操作会引起重绘？
4. 怎么避免浏览器发生重绘？
