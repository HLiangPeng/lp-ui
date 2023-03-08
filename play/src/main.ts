import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import '@hlp/theme-chalk/index.scss'
import Icon from '@hlp/components/icon'

const app = createApp(App)

const Components = [Icon]
Components.forEach(comp => {
  app.use(comp)
})

app.mount('#app')
