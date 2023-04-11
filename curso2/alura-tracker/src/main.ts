import { createApp } from 'vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.css'
import roteador from './rotetador'

createApp(App)
    .use(roteador)
    .mount('#app')
