<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import HeaderComponent from "./components/HeaderComponent.vue";

const route = useRoute()
const isLoginPage = computed(() => route.path === '/login')
</script>

<template>
  <HeaderComponent v-if="!isLoginPage" />
  <router-view />
</template>
