import { createApp } from 'vue';
import { createPinia } from 'pinia'; // pinia import
import router from './router/router'; // router import
import App from './App.vue';
import './style.css';

// declare pinia
const pinia = createPinia();
// Create Vue app
const app = createApp(App);
// use pininia/store
app.use(pinia);

// Use router
app.use(router);

app.mount('#app');
