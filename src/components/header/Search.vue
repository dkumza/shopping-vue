<template>
  <div class="container text-violet-700 bg-violet-200 py-2 px-4">
    <div class="flex justify-between gap-4">
      <div class="flex items-center gap-2 w-full">
        <input class="px-3 py-1 w-full" placeholder="Search for items" />
        <button class="flex items-center text-center hover:text-violet-400">
          <span class="material-symbols-outlined"> search </span>
        </button>
      </div>
      <div class="flex items-center">
        <button
          class="flex w-[100px] items-center text-center bg-violet-600 px-4 py-1 text-white hover:bg-violet-500"
          @click="navigateToSell"
        >
          Sell Item
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  components: {},
  setup() {
    const router = useRouter();

    const navigateToSell = () => {
      router.push('/sell');
    };

    return { navigateToSell };
  },
};
</script>
