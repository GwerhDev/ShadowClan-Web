<style scoped lang="scss" src="./NavMenuComponent.scss" />
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { $d } from '../../functions';

const router = useRouter();

function closeMobileMenu() {
  $d('#nav-menu-mobile').style.display = 'none';
}

function goTo(hash: string) {
  closeMobileMenu();
  router.push({ path: '/', hash });
}
</script>

<template>
  <span class="nav-menu-container">
    <ul>
      <a class="link-official" href='https://diabloimmortal.blizzard.com/es-es/' target="_blank">
        <img src="../../assets/svg/diablo-icon.svg" alt="">
      </a>
      <router-link class="router-li" to='/' @click="closeMobileMenu">
        <li class="nav-button">Inicio</li>
      </router-link>
      <li class="nav-button router-li" @click="goTo('#features')">Funcionalidades</li>
      <li class="nav-button router-li" @click="goTo('#shadow-war')">Guerra Sombría</li>
      <li class="nav-button router-li" @click="goTo('#accursed-tower')">Torre Maldita</li>
      <li class="nav-button router-li" @click="goTo('#clan-tasks')">Clan y Tareas</li>
    </ul>
  </span>
</template>
