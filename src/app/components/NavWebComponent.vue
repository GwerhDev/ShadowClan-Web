<style scoped lang="scss" src="./NavWebComponent.scss"/>
<script setup lang="ts">
import AccountButton from './Buttons/AccountButton.vue';
import LogoComponent from './LogoComponent.vue';
import NavMenuComponent from './NavMenuComponent.vue';
import UserMenuComponent from './UserMenuComponent.vue';

defineProps(["loading"]);

</script>

<template>
  <nav class="nav-web">
    <div class="section-container">
      <LogoComponent />
      <NavMenuComponent />
      <AccountButton :loading="loading" />
    </div>
    <UserMenuComponent />
  </nav>
</template>