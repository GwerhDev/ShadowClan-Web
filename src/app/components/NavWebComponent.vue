<style scoped lang="scss" src="./NavWebComponent.scss"/>
<script setup lang="ts">
import AccountButton from './Buttons/AccountButton.vue';
import LogoComponent from './LogoComponent.vue';
import NavMenuComponent from './NavMenuComponent.vue';
import UserMenuComponent from './UserMenuComponent.vue';

defineProps(["loggedin"]);

</script>

<template>
  <nav class="nav-web">
    <div class="section-container">
      <LogoComponent />
      <NavMenuComponent />
      <AccountButton :loggedin="loggedin" />
    </div>
    <UserMenuComponent />
  </nav>
</template>