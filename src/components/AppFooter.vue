<!-- Footer playful di semua halaman -->
<template>
  <footer class="footer">
    <div class="wrap grid gap-8 py-10 sm:px-5 md:grid-cols-3">
      <div class="flex items-center gap-3">
        <span class="brand-mark" aria-hidden="true">D</span>
        <div>
          <p class="display text-xl">Dea Cinta Ramadani</p>
          <p class="text-xs opacity-80">Informatika · Institut Teknologi Kalimantan · 2024</p>
        </div>
      </div>
      <nav
        class="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm md:justify-center"
        aria-label="Navigasi footer"
      >
        <RouterLink class="flink" to="/">Beranda</RouterLink>
        <RouterLink class="flink" to="/about">Tentang</RouterLink>
        <RouterLink class="flink" to="/portfolio">Portofolio</RouterLink>
        <RouterLink class="flink" to="/contact">Kontak</RouterLink>
      </nav>
      <div class="md:text-right">
        <SocialLinks class="md:justify-end" />
        <p class="mt-3 text-xs opacity-80">
          © {{ year }} Dea Cinta Ramadani · Portofolio Profesional
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";
import SocialLinks from "./SocialLinks.vue";

const year = computed(() => new Date().getFullYear());
</script>
