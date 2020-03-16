# Learn Souce Code of Vue.js

## 1.什么是MVVM

- MVC ：Model-View-Controller，即**模型-视图-控制器**；
  - Model就是数据，View将数据呈现给用户；
  - 核心是Controller，处理事件并作出响应，完成View和Model的通信；
- MVVM：Model-View-ViewModel，即**模型-视图-视图模型**；
  - Model和View与MVC的相同；
  - 核心是ViewModel，它是一个抽象的绑定器*binder*，在View和Model之间进行通信；

## 2.响应式原理

- 核心：`Object.definePropery(obj, prop, descriptor)` 和 `观察者模式`
- 具体实现：Vue在初始化数据时，会通过`Object.definePropery`改写data中所有属性的get和set，并进行依赖收集，
- 源码主要实现：`initState` --> `initData` --> `proxy` --> `Object.definePropery` ---> `observe` ---> `Dep` ---> `Wacther`

## 3.Vue如何检测数组变化

- 核心：
- 具体实现：

## 4.为何Vue采用异步渲染

## 5.nextTick的原理

- 理解：`Vue.nextTick`用于在下次 DOM 更新循环结束之后执行延迟回调
- 核心：利用事件循环的**微任务**或**宏任务**来延迟事件的执行
- 实现：
  1. 在原生支持`Promise`对象的环境，用`promise.then()`来实现，完成回调函数的延迟执行，微任务实现
  2. 否则在支持`MutationObserver`对象的环境，用`MutationObserver.server()`来实现，具体是监听一个字符节点的变化，来完成回调函数的延迟执行，微任务实现
  3. 否则在支持`setImmediate`的环境，用`setImmediate()`实现，宏任务实现
  4. 否则用`setTimeout(func, 0)`实现，宏任务实现

## 6.Computed计算属性的原理

## 7.watch中的deep:true是如何实现的

## 8.Vue组件的生命周期
