<template>
  <div class="container mx-auto p-4 w-[380px] my-8">
    <div class="text-4xl mb-8 text-center text-violet-700">Login</div>
    <form class="flex flex-col" @submit.prevent="submitForm">
      <div class="flex flex-col">
        <input
          class="border border-violet-500 px-3 py-2 placeholder:text-violet-400"
          type="email"
          id="email"
          v-model.trim="email"
          placeholder="Enter your email"
        />
        <p v-if="v$.email.$error" class="text-rose-500 text-xs h-5">Email is required</p>
        <p v-else class="text-xs h-5"></p>
      </div>
      <div class="flex flex-col">
        <input
          class="border border-violet-500 px-3 py-2 placeholder:text-violet-400"
          type="password"
          id="password"
          v-model.trim="password"
          placeholder="Enter your password"
        />
        <p v-if="v$.password.$error" class="text-rose-500 text-xs h-5">
          Password is required
        </p>
        <p v-else class="text-xs h-5"></p>
      </div>
      <div class="flex flex-col">
        <button
          type="submit"
          class="bg-violet-600 text-white px-3 py-2 hover:bg-violet-500 font-semibold"
        >
          LOGIN
        </button>
      </div>
    </form>
    <div class="my-1">
      <p class="text-end text-stone-600 text-sm">
        Need account?
        <router-link
          to="/register"
          class="text-violet-700 hover:cursor-pointer hover:underline"
          >Register</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import { useUserStore } from '../../stores/auth';

export default {
  setup() {
    const email = ref('admin@admin.qq');
    const password = ref('123456');
    const rules = { email: { required }, password: { required } };
    const v$ = useVuelidate(rules, { email, password });

    // use imported store from stores/auth
    const userStore = useUserStore();

    function submitForm() {
      v$.value.$touch();
      if (v$.value.$error) {
        console.log('Form is invalid');
      } else {
        userStore.axiosLogin({ email: email.value, password: password.value });
      }
    }

    return { email, password, v$, submitForm };
  },
};
</script>
