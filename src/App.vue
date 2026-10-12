<template>
  <div class="page">
    <AmbientBackground />
    <AppNavbar />
    <main>
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="$route.fullPath" />
        </Transition>
      </RouterView>
    </main>
    <AppFooter />
    <ProjectDetail />
  </div>
</template>

<script setup>
import AmbientBackground from "./components/AmbientBackground.vue";
import AppNavbar from "./components/AppNavbar.vue";
import AppFooter from "./components/AppFooter.vue";
import ProjectDetail from "./components/ProjectDetail.vue";
</script>
