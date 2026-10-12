<!-- Header stiker: brand Dea + nav 4 halaman + burger -->
<template>
  <div class="topbar">
    <div class="topbar-inner">
      <RouterLink class="brand" to="/" aria-label="Beranda Dea">
        <span class="brand-mark" aria-hidden="true">D</span>
        <span>Dea</span>
        <small>ITK ’24</small>
      </RouterLink>

      <nav class="navlinks" aria-label="Navigasi utama">
        <RouterLink :class="{ 'is-active': route.path === '/' }" to="/"
          >Beranda</RouterLink
        >
        <RouterLink
          :class="{ 'is-active': route.path === '/about' }"
          to="/about"
          >Tentang</RouterLink
        >
        <RouterLink
          :class="{ 'is-active': route.path.startsWith('/portfolio') }"
          to="/portfolio"
          >Portofolio</RouterLink
        >
        <RouterLink
          :class="{ 'is-active': route.path === '/contact' }"
          to="/contact"
          >Kontak</RouterLink
        >
      </nav>

      <button
        class="burger"
        type="button"
        :aria-label="menuOpen ? 'Tutup menu' : 'Buka menu'"
        :aria-expanded="menuOpen ? 'true' : 'false'"
        @click="menuOpen = !menuOpen"
      >
        <svg
          v-if="!menuOpen"
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
        >
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h10" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
    </div>

    <div class="mobilemenu" :class="{ open: menuOpen }">
      <RouterLink
        :class="{ 'is-active': route.path === '/' }"
        to="/"
        @click="menuOpen = false"
        >✿ Beranda</RouterLink
      >
      <RouterLink
        :class="{ 'is-active': route.path === '/about' }"
        to="/about"
        @click="menuOpen = false"
        >✿ Tentang</RouterLink
      >
      <RouterLink
        :class="{ 'is-active': route.path.startsWith('/portfolio') }"
        to="/portfolio"
        @click="menuOpen = false"
        >✿ Portofolio</RouterLink
      >
      <RouterLink
        :class="{ 'is-active': route.path === '/contact' }"
        to="/contact"
        @click="menuOpen = false"
        >✿ Kontak</RouterLink
      >
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const menuOpen = ref(false);

watch(
  () => route.path,
  () => {
    menuOpen.value = false;
  },
);
</script>
