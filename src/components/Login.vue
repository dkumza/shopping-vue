<template>
  <div class=" container mx-auto p-4 w-[380px] my-8">
    <div class="text-4xl mb-8 text-center text-violet-700">Login</div>
    <form @submit.prevent="submitForm">
      <div class="flex flex-col">
        <input class="border border-violet-500 px-3 py-2" type="email" id="email" v-model="email" placeholder="Enter your email" required>
      </div>
      <div class="flex flex-col mt-3">
        <input class="border border-violet-500 px-3 py-2" type="password" id="password" v-model="password" placeholder="Enter your password" required>
      </div>
      <div class="flex justify-center mt-4">
        <button class="border px-8 py-2 w-full bg-violet-600 text-white font-semibold hover:bg-violet-500" type="submit">LOGIN</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submitForm() {
      // Handle form submission here
      console.log(`Email: ${this.email}, Password: ${this.password}`);
    }
  }
}
</script>