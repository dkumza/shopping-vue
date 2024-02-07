import { defineStore } from 'pinia';
import axios from 'axios';
import { router } from '../router/router';

const LOGIN_URL = 'http://localhost:3000/api/auth/login';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    loggedIn: false,
    userData: null,
    error: null,
  }),
  actions: {
    axiosLogin(loginInfo) {
      console.log('loginInfo: ', loginInfo);
      axios
        .post(LOGIN_URL, loginInfo)
        .then((res) => {
          const { token, username } = res.data;
          if (token) {
            this.logIn({ token, username });
            router.push('/');
          }
        })
        .catch((error) => {
          console.log(
            'this.error = error.response.data;: ',
            (this.error = error.response.data),
          );
          this.error = error.response.data;
        });
    },
    logIn(data) {
      this.loggedIn = true;
      this.userData = data;
      console.log(this.loggedIn);
    },
    logOut() {
      this.loggedIn = false;
      this.userData = null;
    },
  },
  getters: {
    isLoggedIn: (state) => state.loggedIn,
    // other getters...
  },
});
