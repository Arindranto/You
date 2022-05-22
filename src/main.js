import { createApp } from 'vue';
import App from './App.vue';
import router from './router'

// Mounting the application
createApp(App).use(router).mount('#app');
