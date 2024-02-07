<template>
  <div class="container mx-auto border">
    <div>Home</div>
    <button class="border py-1 px-6" @click="logout">Log Out</button>
  </div>
</template>

<script>
import { useUserStore } from '../stores/auth';
import { useRouter } from 'vue-router';

export default {
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
