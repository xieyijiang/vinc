# vinc

**自用兜底**

vinc = vue + increment

基于 [Vue3](https://vuejs.org/) 和 [NaiveUI](https://www.naiveui.com/zh-CN/os-theme) ，可从0开始逐步构建一个完整的应用

预设了一些常用的业务模板，比如用户登录、admin等，可使用命令行快速生成代码原型

```shell
npm run add:comp <name | path> [template]
```



## 快速开始

### Admin

#### 初始化脚本

```shell
# 添加store
npm run add:store routerStore admin_router
# 添加路由
npm run add:route admin_routes admin
# 添加组件
npm run add:comp admin/Layout admin/layout
npm run add:comp admin/TabList admin/tab_list
npm run add:comp admin/Home admin/home
npm run add:comp admin/User admin/user
# 可选组件
npm run add:comp TopNavigation top_navigation
npm run add:comp ThemeSwitcher theme_switcher
npm run add:comp LocaleSwitcher locale_switcher
```

#### 修改路由根路径

- `SignIn.vue` 修改 `handleSignIn` 函数中登录成功后 `router.push()` 的参数
- `router/index.js` 修改 `basicRoutes` 或者 `admin_routes` 的 `path` 值
- `stores/routerStore.js` 修改 `rootPath` 的值

#### 修改鉴权逻辑

修改需要鉴权的路由 `meta: { requiresAuth: true }` ，然后修改 `router/index.js` 中的路由守卫和鉴权逻辑



## 技术栈

- [Pinia](https://pinia.vuejs.org/)

- [Vue Router](https://router.vuejs.org/)
- [Vue I18n](https://vue-i18n.intlify.dev/)
- [UnoCSS](https://unocss.dev/)
- [Axios](https://axios-http.com/)



## 必要的部分

也不是非用不可，只是如果一开始不用，后面再想用就比较麻烦

### 全局消息组件

也就是 Naive UI 的 [Message](https://www.naiveui.com/zh-CN/os-theme/components/message) 组件，为了便于逻辑拆分，选择在 `setup` 外使用，参考[文档](https://www.naiveui.com/zh-CN/os-theme/components/message#%E5%9C%A8-setup-%E5%A4%96%E4%BD%BF%E7%94%A8)中的 `选择2`

### Token验证

前端仅在路由守卫上做简易验证，比如token有值且长度大于100；请求服务端接口时，若token验证失败则清空前端token并跳转用户登录路由

### 国际化

默认中文，使用了组合式API，参考：https://vue-i18n.intlify.dev/guide/advanced/composition.html

### 切换主题

默认跟随系统，`assets/base.css` 中写主题样式，在 `main.js` 中引入；`stores/themeStore.js` 写系统主题监听、切换逻辑，在 `App.vue` 中调用，在 `onUnmounted` 生命周期中释放监听，避免潜在的内存泄露



## 可选的部分

### Axios单例

通常不需要特地去创建实例，但在浏览器环境下，axios模块可能被打包工具分割成多个chunks，在这种情况下可能会引用到不同的实例，导致一些配置失效 (比如拦截器)，此时可创建一个单例供全局调用，见 `src/axios.js`



## 其他

### 跨域配置

前后端分离架构，服务端需开启跨域，express为例

```javascript
const express = require('express');
const cors = require('cors');

const app = express()
app.use(cors({
  origin: 'http://localhost:5173' // 允许来自 Vue 应用的请求
}))
```

### Nginx 配置

项目依赖客户端路由，需要将非根路径的请求重定向到 `index.html` 

```nginx
server {
    listen 5173;
    server_name localhost;  # 替换为你的域名

    root /path/to/vinc/dist;  # 替换为你的应用程序所在的目录
  	index index.html;

    # 重定向到 index.html
    location / {
        try_files $uri $uri/ /index.html;
    }

    error_page 404 /index.html;
}
```





