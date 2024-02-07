import { computed } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/auth/Login.vue';
import Register from '../components/auth/Register.vue';
import Home from '../components/Home.vue';
import { useUserStore } from '../stores/auth';

// Define routes
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
];

// Create router instance
export const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guard if user are not logged in
const openRoutes = ['/login', '/register'];
router.beforeEach((to, from, next) => {
  // declare store and loggedIn from store getter
  const userStore = useUserStore();
  const loggedIn = computed(() => userStore.isLoggedIn);

  if (loggedIn.value && openRoutes.includes(to.path)) {
    next('/');
  } else if (!loggedIn.value && !openRoutes.includes(to.path)) {
    next('/login');
  } else {
    next();
  }
});

export default router;
