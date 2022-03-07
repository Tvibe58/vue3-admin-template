import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import './styles/index.less'
import request from './api/request'

const app = createApp(App)

app.use(store)

// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

// ElementPlus default language is english, we can config it
app.use(ElementPlus, {
  locale: zhCn
})

// 在原型上扩展,这样不用在每个页面都导入request
app.config.globalProperties.$api = request

app.mount('#app')
