import { defineStore } from 'pinia';
import axios from 'axios';
import { router } from '../router/router';
import { useToast } from 'vue-toastification';

// Create a new instance of Toast
const toast = useToast();

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
          const { token, name } = res.data;
          if (token) {
            this.logIn({ token, name });
            router.push('/');
            toast.success(res.data.msg, {
              timeout: 2000,
            });
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
      localStorage.setItem('s_name', data.name);
      localStorage.setItem('s_token', data.token);
    },
    logOut() {
      this.loggedIn = false;
      localStorage.removeItem('s_name');
      localStorage.removeItem('s_token');
      this.userData = null;
      toast.success('Successfully logged out', {
        timeout: 2000,
      });
    },
  },
  getters: {
    // if state.loggedIn truthy return true, else - false to control login
    isLoggedIn: (state) => (state.loggedIn ? true : false),
    // other getters...
  },
});
