<style scoped lang="scss" src="./UserMenuComponent.scss" />
<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from '../../middlewares/store';
import { APP_CLIENT_URL } from '../../middlewares/misc/const';
import { $d } from '../../functions';

const store: any = useStore();
const router: any = useRouter();

function handleOutsideClick(e: MouseEvent) {
  const container = $d('#user-menu-container');
  if (container && !container.contains(e.target)) container.style.display = 'none';
}

onMounted(() => document.addEventListener('mouseup', handleOutsideClick));
onBeforeUnmount(() => document.removeEventListener('mouseup', handleOutsideClick));

function handleLogin() {
  $d('#user-menu-container').style.display = 'none';
  router.push('/login');
};

function handleSignup() {
  $d('#user-menu-container').style.display = 'none';
  router.push('/signup');
};

function handleSettings() {
  $d('#user-menu-container').style.display = 'none';
  window.location.href = APP_CLIENT_URL + '/u/account';
};

function handleLogout() {
  $d('#user-menu-container').style.display = 'none';
  store.logout();
  router.push('/');
};

</script>

<template>
  <div class="container" id="user-menu-container">
    <div class="inner-container">
      <span class="user-data" v-if="store.currentUser?.userData">
        <p class="battletag"><span>{{ store.currentUser?.userData?.username }}</span>#{{
          store.currentUser?.userData?.discriminator }}</p>
        <p class="role">{{ store.currentUser?.userData?.role }}</p>
      </span>
      <span v-else>
        <li class="button justify-content-center align-items-center d-flex g-1 mb-0" @click="handleLogin">
          <img src="../../assets/svg/blizz-icon.svg" alt="" height="25px">
          Iniciar sesión
        </li>
      </span>
      <ul>
        <li @click="handleSignup" v-if="!store.currentUser?.userData">
          <img src="../../assets/svg/edit-icon.svg" alt="">
          Registrarme
        </li>

        <li @click="handleSettings" v-if="store.currentUser?.userData">
          <img src="../../assets/svg/settings-icon.svg" alt="">
          Ajustes de tu cuenta
        </li>

        <li @click="handleLogout" v-if="store.currentUser?.userData">
          <img src="../../assets/svg/logout-icon.svg" alt="">
          Cerrar sesión
        </li>

      </ul>
    </div>
    <div class="darker-menu inner-container">
      <ul>
        <li>
          <img src="../../assets/svg/support-icon.svg" alt="">
          Asistencia
        </li>
      </ul>
    </div>
  </div>
</template>