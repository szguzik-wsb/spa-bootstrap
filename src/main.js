import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// Bootstrap
import { BootstrapVue } from 'bootstrap-vue';
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(BootstrapVue);
app.use(createPinia())
app.use(router)

app.mount('#app')
