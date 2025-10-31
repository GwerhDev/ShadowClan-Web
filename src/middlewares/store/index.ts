import { defineStore } from 'pinia';
import { getUserData } from '../services';
import { API_URL } from '../misc/const';
import { storeState } from '../../interfaces/storeState';

export const useStore = defineStore('store', {
  state: (): storeState => ({
    currentUser: {
      logged: false,
      userData: null,
      task: null,
      taskdate: null,
      tasktype: '',
      taskloading: false,
      guidetype: 'chatbot',
      chatbotmodel: '',
      shadowWarData: null,
      shadowWarError: null,
      userBattleInfo: [],
    },

    layout: {
      tab: { value: '', label: '' },
    },

    admin: {
      users: null,
      tasks: null,
      clantasks: null,
      warbandtasks: null,
      notifications: null,
      members: null,
      clans: null,
      shadowWars: null,
      currentShadowWar: null,
    },

    userToken: '',
    currentCharacter: null,
    warbands: null,
  }),

  actions: {
    logout() {
      this.currentUser = {
        logged: false,
        userData: null,
        task: null,
        taskdate: null,
        tasktype: '',
        taskloading: false,
        guidetype: 'chatbot',
        chatbotmodel: '',
        shadowWarData: null,
        shadowWarError: null,
      } as storeState['currentUser'];
      this.layout = {
        tab: { value: '', label: '' },
      };

      this.userToken = '';
    },

    handleLogin() {
      const url: string = API_URL + '/login-bnet';
      return url;
    },

    async handleUserData(token: any) {
      try {
        this.currentUser = { ...this.currentUser, ...await getUserData(token) };
        this.currentCharacter = this.currentUser.userData?.character[0]?._id || null;
      } catch (error) {
        console.error(error);
      }
    },
  }
});

export type AppStore = ReturnType<typeof useStore>;