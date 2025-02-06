import './assets/main.css'
import './assets/simple-grid.css'
import './scss/color.scss'
import './scss/components.scss'
import Lenis from 'lenis'
import { createApp } from 'vue'
import App from './App.vue'
import PhosphorIcons from '@phosphor-icons/vue'

let app = createApp(App)

app.use(PhosphorIcons)

app.mount('#app')

// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
  });
  
  // Listen for the scroll event and log the event data
  lenis.on('scroll', (e) => {
    console.log(e);
  });