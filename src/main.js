import './assets/main.css'
import './assets/simple-grid.css'
import './scss/color.scss'
import './scss/components.scss'
import { createApp } from 'vue'
import App from './App.vue'
import PhosphorIcons from '@phosphor-icons/vue'

let app = createApp(App)

app.use(PhosphorIcons)

app.mount('#app')
