<template>
  <div class="">
    <Header />
  </div>
</template>

<script>
import { useUserStore } from '../stores/auth';
import { useRouter } from 'vue-router';
import Header from './header/Header.vue';

export default {
  // declaring inserted components:
  components: { Header },
  setup() {
    // use imported store from stores/auth
    const userStore = useUserStore();
    // use imported router
    const router = useRouter();

    const logout = () => {
      userStore.logOut();
      router.push('/login');
    };

    return { logout };
  },
};
</script>
