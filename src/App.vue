<template>
  <div class="flex min-h-screen flex-col bg-void text-mist">
    <AppNavbar />
    <main id="main-content" class="relative flex-1 pt-16">
      <RouterView v-slot="{ Component, route }">
        <transition name="page" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </transition>
      </RouterView>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'
</script>
