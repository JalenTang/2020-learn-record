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

### link 标签中的懒加载概念

`<link>`标签中`rel`属性值`preload`和`prefetch`的作用和区别

1. `preload` 表示预加载，用来加载当前页面中重要的资源，`preload`不会阻塞`window`的`onload`事件。
2. `prefetch` 表示预获取，允许浏览器在空闲时间来获取将来可能用到的资源，并加他们存储在浏览器缓存中。
3. 两者的区别在于`preload`专注于当前页面，并以高优先级加载资源；而`prefetch`则专注于下一个页面或下一步操作将要加载的资源，并以低优先级加载；

例如：

```html
<!-- 表示xxx1是当前页面需要的资源 -->
<link rel="preload" href="xxx1.js" as="script" />
<!-- 表示预加载image.png图片资源 -->
<link rel="preload" href="image.png" />
<!-- 表示xxx2是下一个页面需要的资源，进行预获取缓存到本地 -->
<link rel="prefetch" href="xxx2.js" />
```

### webpack 中的动态导入

webpack 中动态导入有 2 种方式

1. ES6 的动态加载模块：`import()`，内部实现用到了 ES6 的*Promise*

   - `import`函数返回一个 promise 对象，动态的加载模块
   - 调用`import`之处被视为一个代码分割点，被请求的模块和它引用的所有子模块，会分割到一个单独的 chunk 中
   - 使用内联的注释(Magic Comment)可以进行个性化的配置，例如：

     ```javascript
     import(
       /* webpackChunkName: 'my-chunk-name' */
       /* webpackNode: 'lazy' */
       /* webpackExports: ["default", "named"] */
       'module'
     );

     // 将 webpackIgnore 设置为 true 则不进行代码分割
     import(/* webpackIgnore: true*/ 'ignore-module.js');

     // vue中常见的路由懒加载写法：
     const routes = [
       {
         path: '/',
         name: 'Home',
         component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
       },
     ];
     const router = new VueRouter({
       routes,
     });
     export default router;
     ```

2. webpack 的特定预发`require.ensure`（已被遗弃）

### webpack 中的预加载和预获取模块（preload/prefetch module）

webpack 中也可以通过定义 Magic Comments 来定于资源加载方式：

`prefetch`的方式

- 假设现在的需求是按需实现点击登录按钮，加载登录弹窗，
- JS 中代码为`LoginButton.onclick = () => import(/* webpackPrefetch: true */ 'LoginModal')`
- 经过 webpack 打包编译后会生成`<link rel="prefetch" href="login-model-chunk.js">`插入到页头部，指定资源加载方式

`preload`的方式

- 假设有个*chartComponent*依赖于一个较大的*chartLibraray*，所以将其拆分到一个单独的*chunk*
- JS 中代码为`import(/* webpackPreload: true */ 'ChartingLibrary');`
- 经过 webpack 打包编译会生成`<link rel="preload" href="chartingLibrary.js" as="script">`插入到页头部，指定资源加载方式

**prefetch**和**preload**在**webpack chunk**中的不同：

- *preload chunk*会在*父 chunk* 加载时，以并行方式加载。_prefetch chunk_ 会在*父 chunk* 加载结束后加载
- _preload chunk_ 具有中等优先级，并立即下载。_prefetch chunk_ 在浏览器闲置时下载
- _preload chunk_ 会在*父 chunk* 中立即请求，用于当下时刻。*prefetch chunk*用于未来的某个时刻

### webpakc 借助 JSONP 的形式执行模块

### 参考文档：

1. [理解 Vue 的路由懒加载](https://juejin.im/post/6844904180285456398)
2. [路由懒加载的原理讲解](https://blog.csdn.net/weixin_44869002/article/details/106288371)
3. [webpack 模块方法 import](https://webpack.docschina.org/api/module-methods/#import)
4. [什么是 Preload，Prefetch 和 Preconnect](https://github.com/fi3ework/blog/issues/32)
