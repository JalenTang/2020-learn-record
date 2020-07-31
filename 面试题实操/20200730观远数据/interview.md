# 20200730 观远数据

一个小时

1. css 主题切换？除了切换 class 还要什么方法
2. 栈和堆数据结构？为什么需要这 2 种数据结果
3. vue 和 react 的区别
4. vue diff 算法
5. vue3.0 和 vue2.0 的区别
6. 怎么理解虚拟 DOM
7. ts 中 type interface declare 的区别
8. react fiber 结构理解
9. webpack 打包解决了什么？
10. 路由懒加载的原理
11. import 和 require 的区别
12. 场景题：在一个子组件生成的时候想要下载一个 JS 文件，怎么实现
13. 项目中的难点 怎么解决的

## 路由懒加载

路由懒加载的原理核心点：

1. 通过 `webpack` 将需要进行懒加载的路由组件打包成独立的文件，也就是`code split` 或者 `splitChunk`
2. 借助函数来实现延迟执行路由组件的加载代码

具体实现：

`<Link>`标签中 preload 和 prefetch 的作用和区别

1. preload

例如：``

参考文档：

1. [理解 Vue 的路由懒加载](https://juejin.im/post/6844904180285456398)
2. [路由懒加载的原理讲解](https://blog.csdn.net/weixin_44869002/article/details/106288371)
3. [webpack 模块方法 import](https://webpack.docschina.org/api/module-methods/#import)
4. [什么是 Preload，Prefetch 和 Preconnect](https://github.com/fi3ework/blog/issues/32)
