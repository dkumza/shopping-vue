<template>
  <div
    class="flex md:flex-row flex-col justify-between items-baseline py-2 container text-violet-800"
  >
    <div class="flex items-center gap-2">
      <div class="text-5xl" @click="navigateToHome">trade</div>
      <div class="text-xs pt-3">
        Trade partner<br />
        that all we trust
      </div>
    </div>
    <div class="flex md:w-fit w-full justify-center divide-x text-sm">
      <div class="div flex justify-center items-center text-center px-2">
        <span class="material-symbols-outlined text-lg"> favorite </span>
      </div>
      <div class="div flex justify-center items-center text-center px-2">My Sales</div>
      <div class="div flex justify-center items-center px-2">My Items</div>
      <div class="div flex justify-center items-center px-2">
        <span class="material-symbols-outlined text-lg" @click.stop=""> settings </span>
      </div>
      <button class="div flex justify-center items-center pl-4" @click="logout">
        <span class="material-symbols-outlined text-lg"> logout </span>
      </button>
    </div>
  </div>
  <Search v-if="currentRoute !== '/sell'" />
</template>

<script>
import { ref, onMounted } from 'vue';
import { useUserStore } from '../../stores/auth';
import { useRouter, useRoute } from 'vue-router';
import Search from './Search.vue';

export default {
  components: { Search },
  setup() {
    // use imported store from stores/auth
    const userStore = useUserStore();
    // use imported router
    const router = useRouter();
    const route = useRoute();

    const currentRoute = ref('');

    onMounted(() => {
      currentRoute.value = route.path;
    });

    const navigateToHome = () => {
      router.push('/');
    };

    const logout = () => {
      userStore.logOut();
      router.push('/login');
    };

    return { logout, navigateToHome, currentRoute };
  },
};
</script>
