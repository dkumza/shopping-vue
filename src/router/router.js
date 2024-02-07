import { ref } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/auth/Login.vue';
import Register from '../components/auth/Register.vue';

// Define a reactive variable to store the login status
// TODO create VUEX for global variables?
const loggedIn = ref(false);

// Define routes
const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register },
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guard if user are not logged in
const openRoutes = ['/login', '/register'];
router.beforeEach((to, from, next) => {
  if (!loggedIn.value && !openRoutes.includes(to.path)) {
    next('/login');
  } else {
    next();
  }
});

export default router;
