import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import './styles/index.less'

const app = createApp(App)

app.use(store)

// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

// ElementPlus default language is english, we can config it
app.use(ElementPlus, {
  locale: zhCn
})
app.mount('#app')
