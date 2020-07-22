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

  const wrapper = [
  	'(function(exports, require, modeule, __filename, __dirname){ ',
  	'\n});',
  ];
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

## 2. Webpack 构建流程

初始化构建参数 ===> 绑定事件钩子回调 ===> 确定 Entries 逐一遍历 ===> 使用 loader 编译文件 ===> 输出文件

- 初始化构建参数：`Webpack`首先会读取你在命令行内传入的配置以及项目里`webpack.config.js`里的配置，用于初始化本次构建的配置参数
- 绑定事件钩子回调：执行配置文件中的`plugins`实例化语句，生成`Compiler`传递给各个`plugin`的`apply`方法，将各个自定义钩子挂载到`webpack`事件流
- `webpack`读取配置的`entries`参数，从入口文件开始递归遍历所有的文件
- 在递归遍历文件时，`webpack`开始`Compilation`编译过程，根据配置文件中的`loader`参数对`test`到的文件内容进行编译（buildModule），之后再将编译好的文件内容使用`acorn`解析生成`AST`静态语法树，分析文件的依赖关系逐个拉去依赖模块并重复上述编译过程，最后将所有模块的`require`语法替换成`__webpack__require`来模拟模块化的操作
- 最后是`emit`阶段，也就是文件输出阶段，我们可以在传入时间的回调`compilation.assets`拿到所需的数据，包括即将输出的资源，代码块`chunk`等等信息
