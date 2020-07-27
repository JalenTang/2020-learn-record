# webpack.js

## 基本概念

- `webpack` 是一个现代的 JavaScript 应用的静态模块打包器（module bundler）

## 基本配置文件 API

- `entry`
- `output`
- `plugin`
- `loader`

## HMR 原理

- HMR: Hot Module Replacement，模块热替换，运行时对模块的替换、添加和删除，无需刷新页面

## 常用插件

### html-webpack-plugin：打包过程中自定义 HTML 文件的创建

[github 地址](https://github.com/jantimon/html-webpack-plugin)

- 在每次 webpack 打包编译时都自动生成一个 html 文件

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: 'html标题',
      filename: 'index.html',
      template: '', // html模板，默认ejs
      templateContent: false,
      /*
      自定义html模板种，通过
        htmlWebpackPlugin.options
        htmlWebpackPlugin.tags
        htmlWebpackPlugin.files
      重写一些默认参数
      具体配置 https://github.com/jantimon/html-webpack-plugin/blob/master/examples/template-parameters/webpack.config.js
      */
      templateParameters: false,
      favicon: ``, // html图标
      meta: {} // meta标签 比如 { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' }
      minify: true, // 代码压缩
      inject: true, // 静态资源注入的位置，如'head'/'body'
      scriptLoading: 'blocking', // 'blocking'|'defer' js脚本载入方式
      cache: true, // 缓存相关 无变动不新建文件
      hash: false, // if true 每次都会向js和css文件添加hash码 for cache busting 强制不缓存
    })
  ],
};
```

### Webpack-Bundle-Analyzer：基于 `webpack stats` 的可视化包分析插件

[github 地址](https://github.com/webpack-contrib/webpack-bundle-analyzer)

- 根据可视化的文件分析，我们可以进行分析，优化等等；

```javascript
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer');

module.exports = {
  plugins: [
    new WebpackBundleAnalyzer.BundleAnalyzerPlugin({
      // 配置项 比如 mode / host / port / auto open 等等
      // 是否生成webpack stats的JSON文件，默认false
      generateStatsFile: false,
      // stats文件名
      statsFilename: 'stats.json',
      statsOptions: null,
    }),
  ],
};
```

### Speed-Measure-Webpack-Plugin：分析 plugin 和 loader 打包速度的插件

[github 地址](https://github.com/stephencookdev/speed-measure-webpack-plugin)

- 根据文件打包输出的耗时，我们可以进行分析，优化等等；

```javascript
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const smp = new SpeedMeasurePlugin(options);

module.exports = smp.wrap({
  plugins: [new MyPlugin(), new MyOtherPlugin()],
});
```

## 优化 optimization 的一些配置项

### splitChunks 分割块

- `splitChunks.automaticNameDelimiter:string = '~'`：表示 chunk 分割后的文件名称分隔符

- `splitChunks.chunks`：`chunks`选项表示需要进行代码优化的块，值可以是字符串'async'/'initial'/'all'，也可接受一个函数 `(chunks) => {}`

  1. **initial** 表示只从入口模块拆分
  2. **async** 表示拆分异步加载的模块，`import()`
  3. **all** 表示以上都包括

- `splitChunks.maxAsyncRequests:number = 30`：按需加载时并行请求的最大数量

- `splitChunks.maxInitialRequests:number = 30`：入口分割的最大并行请求数

- `splitChunks.minSize:number = 30000`：表示分理处的`chunk`的最小尺寸，即文件大于`minSize`才会分离为`chunk`

- `splitChunks.minChunks:number = 1`：表示一个模块至少要被`minChunks`个`chunk`所包含才能分割

- `splitChunks.name:boolean = true | function(module, chunks, cacheGroupKey):string`：表示代码分割之后的 `chunk` 的名字，默认为 `true`，表示名字由`chunks`和`cacheGroups`的 `key`自动生成

- `splitChunks.cacheGroups: {}`：缓存组相关配置，继承所有splitChunks的属性，`test`，`priority`，`reuseExistingChunk`为独有属性

```javascript
module.exports = {
  // ...
  optimization: {
    splitChunks: {
      automaticNameDelimiter: '~',
      chunks: 'initial' | 'async' | 'all' | (chunks) => chunks.name !== 'my-chunk',
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      minSizeL: 30000,
      minChunks: 2,
      name: true,
      cacheGroups: {
        test: /[\\\/]node_modules[\\\/]/, // 选择缓存组的模块，值可以是 string | regex | (module,chunk) => {}
        priority: 10, // 一个模块可以命中多个缓存组，priority表示模块命中时的优先级，default组优先级为负数，自定义组优先级为0
        reuseExistingChunk: true, // 重用分离出的代码
        enforce: true, // true 表示忽略分离模块的最大最小限制，强行分离模块，默认值false。
      }
    }
  }
}
```
