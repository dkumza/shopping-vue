import { createApp } from 'vue';
import router from './router/router'; // router import
import App from './App.vue';
import './style.css';

// Create Vue app
const app = createApp(App);

// Use router
app.use(router);

app.mount('#app');
