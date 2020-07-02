# webpack.js

## 基本概念

- `webpack` 是一个现代的 JavaScript 应用的静态模块打包器（module bundler）
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

## 优化
