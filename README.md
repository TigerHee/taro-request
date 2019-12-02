## taro-request
> 封装Taro.request（拦截器，url配置，Authorization等），如果觉得有用的话，來个star🤝。

> ✅ 仅适用于taro项目

### 目录结构

```js
servers
├── http.js                  // Taro.request处理
├── baseUrl.js               // 设置不同环境不同路径请求的url地址
├── config.js                // http状态配置
├── interceptors.js          // 拦截器
├── servers.js               // 建议所有接口请求整理在一起再按需引用
└── utils.js                 // 页面跳转等函数封装
```
### 组件内使用eg:

```js
import { getResultData_servers } from '@src/servers/servers'

getResultData_servers(params).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

```

### 示例项目:
* 💯[taro-init](https://github.com/TigerHee/taro-init)
