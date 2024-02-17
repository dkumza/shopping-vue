<template>
  <div class="container mx-auto p-4 w-[380px] my-8">
    <div class="text-4xl mb-8 text-center text-violet-700">Register</div>
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
        <input
          class="border border-violet-500 px-3 py-2 placeholder:text-violet-400"
          type="password"
          id="c-password"
          v-model.trim="cPassword"
          placeholder="Confirm your password"
        />
        <p v-if="v$.cPassword.$error" class="text-rose-500 text-xs h-5">
          Passwords do not match
        </p>
        <p v-else class="text-xs h-5"></p>
      </div>
      <div class="flex flex-col">
        <button
          type="submit"
          class="bg-violet-600 text-white px-3 py-2 hover:bg-violet-500 font-semibold"
        >
          REGISTER
        </button>
      </div>
    </form>
    <div class="my-1">
      <p class="text-end text-stone-600 text-sm">
        Already have account?
        <router-link
          to="/login"
          class="text-violet-700 hover:cursor-pointer hover:underline"
          >Login</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { required, sameAs } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const cPassword = ref('');
    const rules = {
      email: { required },
      password: { required },
      cPassword: { required, sameAsPassword: sameAs(password) },
    };
    const v$ = useVuelidate(rules, { email, password, cPassword });

    function submitForm() {
      v$.value.$touch();
      if (v$.value.$error) {
        // Form is invalid
      } else {
        // Handle form submission here
        console.log(
          `Email: ${email.value}, Password: ${password.value}, C-Password: ${cPassword.value}`,
        );
      }
    }

    return { email, password, cPassword, v$, submitForm };
  },
};
</script>
