<template>
  <footer class="relative border-t border-violet-300/10 bg-[#07040d]/90">
    <div class="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
      <div>
        <p class="font-display text-lg font-bold text-white">Dea Cinta Ramadani</p>
        <p class="mt-1 text-xs tracking-[0.2em] text-fog uppercase">Informatika · Institut Teknologi Kalimantan · 2024</p>
        <p class="mt-4 max-w-sm text-sm leading-relaxed text-fog">
          Portofolio akademik untuk mendokumentasikan proses belajar, analisis sistem, dan implementasi proyek
          digital.
        </p>
        <SocialLinks class="mt-5" @placeholder-click="notice = $event" />
        <p v-if="notice" class="mt-2 text-xs text-fog" role="status">
          Akun {{ notice }} belum tersedia — segera hadir.
        </p>
      </div>

      <nav aria-label="Navigasi footer">
        <p class="font-display text-sm font-bold tracking-[0.18em] text-lilac uppercase">Jelajahi</p>
        <ul class="mt-4 flex flex-col gap-2.5 text-sm">
          <li v-for="item in navItems" :key="item.path">
            <RouterLink :to="item.path" class="text-fog transition hover:text-white">
              {{ item.label }}
            </RouterLink>
          </li>
        </ul>
      </nav>

      <div>
        <p class="font-display text-sm font-bold tracking-[0.18em] text-lilac uppercase">Kontak</p>
        <ul class="mt-4 flex flex-col gap-2.5 text-sm text-fog">
          <li>NIM 11241025 — Informatika ITK</li>
          <li>
            <RouterLink to="/contact" class="font-semibold text-white transition hover:text-lilac">
              Kirim pesan via formulir →
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="border-t border-white/5">
      <div
        class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-fog sm:flex-row sm:px-8"
      >
        <p>© {{ year }} Dea Cinta Ramadani. Dibuat dengan Vue 3 + Tailwind CSS.</p>
        <p>Dark purple premium · aksen violet</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import SocialLinks from './SocialLinks.vue'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact', path: '/contact' },
]

const year = new Date().getFullYear()
const notice = ref('')
</script>
