# HTML 和 CSS 基础

## HTML

DOM事件流

阻止DOM事件冒泡

- W3C标准：`event.stopPropagation()`
- IE：`event.cancelBubble()`
  
取消默认操作

- W3C标准：`event.preventDefault()`
- IE：`event.returnValue = false`

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
