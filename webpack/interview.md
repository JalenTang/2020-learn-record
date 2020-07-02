# Webpack 相关面试题

## 1. CommonJS 和 ES6 module

### CommonJS

- node.js 是该规范的主要实践者，通过`module`,`exports`,`require`,`global`四个主要的环境变量提供对模块化的支持；
- 依赖于 node.js 原生模块`module`实现，如下图：
  ![CommonJS-Module](./images/CommonJS-Module.png)
  其中包含了`exports`**_(模块导出对象)_**、`children`**_(被该模块引用的子模块)_**, `paths`**_(模块搜索的路径)_**等等；
- 原理：Node 在解析 JS 模块时，会将内容进行包裹，传入变量。再通过`vm.runInThisContext(code)`[文档](http://nodejs.cn/api/vm.html#vm_vm_runinthiscontext_code_options)将`code`编译并执行代码, 伪代码如下：

  ```javascript
  const wrap = function (script) {
    return Module.wrapper[0] + script + Module.wrapper[1];
  };

  const wrapper = ['(function(exports, require, modeule, __filename, __dirname){ ', '\n});'];
  ```

- 基本语法

  ```javascript
  // a.js
  module.exports = {
    num: 1,
  };

  // index.js
  const a = require('./a.js');
  console.log(a.num); // 1
  ```

### ES6 Module

- 新一代的模块标准， 通过`export`,`export defalut`,`import`来完成模块的导出和引入；
- 基本语法

  ```javascript
  // a.js
  export const num = 1;
  export default { count: 2 };

  // index.js
  import a, { num } from './a.js';
  console.log(a.count); // 2
  console.log(num); // 1
  ```

### 两者的区别

1. `CommonJS` 模块输出的是一个值的拷贝， `ES6` 模块输出的是值的引用;
2. `CommonJS` 采用同步加载模块的策略，因此适合服务端编程