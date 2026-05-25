<style scoped lang="scss" src="./NavMenuComponent.scss" />
<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { $d } from '../../functions';

const router = useRouter();
const route = useRoute();

function closeMobileMenu() {
  $d('#nav-menu-mobile').style.display = 'none';
}

function handleClick() {
  closeMobileMenu();
  const el = document.querySelector('#hero');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function scrollToSection(hash: string) {
  closeMobileMenu();
  const go = () => {
    const el = document.querySelector(hash);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  if (route.path !== '/') {
    router.push('/').then(() => setTimeout(go, 200));
  } else {
    go();
  }
}
</script>

<template>
  <span class="nav-menu-container">
    <ul>
      <a class="link-official" href='https://diabloimmortal.blizzard.com/es-es/' target="_blank">
        <img src="../../assets/svg/diablo-icon.svg" alt="">
      </a>
      <router-link class="router-li" to='/' @click="handleClick">
        <li class="nav-button">Inicio</li>
      </router-link>
      <li class="nav-button router-li" @click="scrollToSection('#features')">Funcionalidades</li>
      <li class="nav-button router-li" @click="scrollToSection('#shadow-war')">Guerra Sombría</li>
      <li class="nav-button router-li" @click="scrollToSection('#accursed-tower')">Torre Maldita</li>
      <li class="nav-button router-li" @click="scrollToSection('#clan-tasks')">Clan y Tareas</li>
    </ul>
  </span>
</template>
