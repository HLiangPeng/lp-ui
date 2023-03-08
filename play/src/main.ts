import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import Icon from '@hlp/components/icon'

const app = createApp(App)

const Components = [Icon]
Components.forEach(comp => {
  app.use(comp)
})

app.mount('#app')
