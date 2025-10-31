<script setup lang="ts">
import { useStore } from './middlewares/store/index';
import { Ref, ref, onMounted } from 'vue';
import NavComponent from './app/components/NavComponent.vue';

const store: any = useStore();
const loading: Ref = ref(true);

onMounted(async () => {
  await store.handleUserData();
  loading.value = false;
});

</script>

<template>
  <router-view />
  <template
    v-if="!$route.path.startsWith('/signup') && !$route.path.startsWith('/login') && !$route.path.startsWith('/auth')">
    <nav-component :loading="loading" />
  </template>
</template>