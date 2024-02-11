<template>
  <Header />
  <router-view />
</template>

<script>
import Header from './header/Header.vue';

export default {
  components: { Header },
};
</script>
