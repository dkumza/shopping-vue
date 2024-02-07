import { createApp } from 'vue';
import { createPinia } from 'pinia'; // pinia import
import { useUserStore } from './stores/auth';
import router from './router/router'; // router import
import App from './App.vue';
import './style.css';

// declare pinia
const pinia = createPinia();
// Create Vue app
const app = createApp(App);
// use pininia/store
app.use(pinia);

// check if data exists in LS
const userStore = useUserStore();
if (localStorage.getItem('s_token')) {
  userStore.logIn({
    // if exists get LS data
    token: localStorage.getItem('s_token'),
    name: localStorage.getItem('s_name'),
  });
}

// Use router
app.use(router);

app.mount('#app');
