import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import panZoom from 'vue-panzoom'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(panZoom);
app.config.productionTip = false;


app.mount('#app')
