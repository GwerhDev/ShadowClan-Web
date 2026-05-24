import './styles/style.css';
import './styles/root.css';
import '@fortawesome/fontawesome-free/css/all.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './app/routes';
import { vAnimate } from './directives/animate';

createApp(App)
  .use(createPinia())
  .use(router)
  .directive('animate', vAnimate)
  .mount('#app');