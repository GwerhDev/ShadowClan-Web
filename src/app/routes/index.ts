import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import SignupPage from '../pages/SignupPage.vue';
import LoginErrorPage from '../pages/LoginErrorPage.vue';
import UserPendingPage from '../pages/UserPendingPage.vue';
import UserInactivePage from '../pages/UserInactivePage.vue';
import UserNotFoundPage from '../pages/UserNotFoundPage.vue';
import RegisterErrorPage from '../pages/RegisterErrorPage.vue';
import RegisterSuccessPage from '../pages/RegisterSuccessPage.vue';
import AlreadyRegisteredPage from '../pages/AlreadyRegisteredPage.vue';
import LoginPage from '../pages/LoginPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'SignupPage',
    component: SignupPage
  },
  {
    path: '/signup/already-registered',
    name: 'AlreadyRegisteredPage',
    component: AlreadyRegisteredPage
  },
  {
    path: '/signup/register-success',
    name: 'RegisterSuccessPage',
    component: RegisterSuccessPage
  },
  {
    path: '/login/user-not-found',
    name: 'UserNotFoundPage',
    component: UserNotFoundPage
  },
  {
    path: '/login/user-pending-approve',
    name: 'UserPendingPage',
    component: UserPendingPage
  },
  {
    path: '/login/user-inactive',
    name: 'UserInactivePage',
    component: UserInactivePage
  },
  {
    path: '/login/login-error',
    name: 'LoginErrorPage',
    component: LoginErrorPage
  },
  {
    path: '/signup/register-error',
    name: 'RegisterErrorPage',
    component: RegisterErrorPage
  },
]

const BASE_URL = 'https://shadowclan.cl';

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      setTimeout(() => {
        const el = document.querySelector(to.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
      return false;
    }
    setTimeout(() => {
      const main = document.querySelector('main');
      if (main) main.scrollTop = 0;
    }, 0);
    return false;
  }
});

router.afterEach((to) => {
  const canonical = document.getElementById('canonical-url') as HTMLLinkElement | null;
  if (canonical) {
    canonical.setAttribute('href', BASE_URL + to.path);
  }
});

export default router;
