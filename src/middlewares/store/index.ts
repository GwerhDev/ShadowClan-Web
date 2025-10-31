import { defineStore } from 'pinia';
import { clearUserToken, getUserData } from '../services';

interface storeState {
  currentUser: any,
}

export const useStore = defineStore('store', {
  state: (): storeState => ({
    currentUser: {},
  }),

  actions: {
    logout() {
      clearUserToken();
      this.currentUser = {};
    },

    async handleUserData(router: any) {
      try {
        const response = await getUserData();
        this.currentUser = response;
        router && router.push('/');
      } catch (error) {
        console.error(error);
      }
    },
  }
});