# webpack.js

## 基本概念

- webpack 是一个现代的 JavaScript 应用的静态模块打包器（module bundler）,

## 常用插件

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

