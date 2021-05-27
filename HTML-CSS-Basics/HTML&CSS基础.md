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

### CSS 选择器优先级

- css 选择规则的优先级：按照 css 选择器的权值来比较
- 权重：是一个相对的概念，是比较各个选择器的一个指标
- 权值的划分：
  1. 内联样式 `style` 权值 1000
  2. ID选择器 `id` 权值 100
  3. class|属性选择器|伪， `class|[attr]|:hover` 权值 10
  4. 标签|伪元素，`p | ::before` 权值 1
  5. 其他，如`通用选择器(*)`|`子选择器(>)`|`相邻选择器(+)` 权值 0
- css 优先级规则：
  1. 权值不同，权值高的优先
  2. 权值相同，后定义的规则优先
  3. `!important`无条件绝对优先

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

### CSS画三角形的几种方式

``` html
// 1.利用border属性
<style>
  width: 0;
  height: 0;
  border: 10px solid;
  border-color: transparent transparent transparent red;
</style>


// 2.canvas
<div id="canvas"></div>
<script>
const canvas = document.querySelector('#id');
const ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.moveTo(75, 50);
ctx.lineTo(100, 75);
ctx.lineTo(100, 25);
ctx.fill()
</script>

// 3.svg
<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <polygon points="200 100, 100 200, 300 200" style="fill:red;stroke:red;stroke-width:1" />
</svg>
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
