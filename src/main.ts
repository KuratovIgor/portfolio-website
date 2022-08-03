import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router'
import './assets/styles/index.scss'
import screen from '@/utils/screen-variables'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)

app.config.globalProperties.$screen = screen

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
