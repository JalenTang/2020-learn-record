20200723 字节跳动 教育部门

一面 一个小时

1. css 定位 主要 absolute
2. 跨域相关 jsonp cors cors 相关的 header 头
3. 浏览器缓存 强缓存 协商缓存
4. 将 nodejs 的 callback 形式封装为 promise 形式
5. dp 算法题 优化优化优化
6. 目前在公司负责的工作内容 展开巴拉巴拉 组件库 是否发布 npm？

### CORS 跨域中的安全问题

- 配置 `Access-Control-Allow-Origin: '*'`引起的安全问题
  1. `Access-Control-Allow-Oringin`滥用通配符 `*` 意味着任何域都跨域方问本域上的资源

参考文档:

1. [利用 CORS（跨域资源共享）配置不当的三种攻击手段](https://nosec.org/home/detail/2440.html)
