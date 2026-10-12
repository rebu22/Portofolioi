<template>
  <div class="relative overflow-hidden">
    <AmbientBackground />

    <!-- LAYOUT 1 — HOME: headline kiri, foto tengah, panel kanan -->
    <section class="relative mx-auto grid max-w-7xl gap-10 px-5 pt-12 pb-16 sm:px-8 lg:grid-cols-[1.15fr_0.9fr_0.85fr] lg:items-center lg:gap-8 lg:pt-16 lg:pb-24" aria-label="Beranda">
      <HeroSection />

      <div class="flex justify-center lg:justify-center">
        <ProfileImage class="w-full max-w-xs sm:max-w-sm" />
      </div>

      <InfoPanel />

      <!-- Tombol bulat panah ke halaman berikutnya -->
      <div class="flex justify-center lg:col-span-3 lg:mt-2">
        <RouterLink
          to="/about"
          class="group flex h-16 w-16 items-center justify-center rounded-full border border-violet-300/30 bg-violet-600/20 text-2xl text-white shadow-[0_0_36px_rgba(139,92,246,0.45)] transition hover:-translate-y-1 hover:bg-violet-600/35"
          aria-label="Lanjut ke halaman About"
          title="Lanjut ke About"
        >
          <span class="transition group-hover:translate-y-0.5" aria-hidden="true">↓</span>
        </RouterLink>
      </div>
    </section>

    <!-- Akses cepat antarhalaman -->
    <section class="relative mx-auto max-w-7xl px-5 pb-20 sm:px-8" aria-label="Jelajahi halaman lain">
      <div class="grid gap-4 sm:grid-cols-3">
        <RouterLink
          v-for="card in quickLinks"
          :key="card.path"
          :to="card.path"
          class="glass-panel group rounded-3xl p-6 transition hover:-translate-y-1 hover:border-violet-300/40"
        >
          <p class="text-3xl" aria-hidden="true">{{ card.emoji }}</p>
          <h2 class="font-display mt-3 text-lg font-bold text-white">{{ card.title }}</h2>
          <p class="mt-1.5 text-sm leading-relaxed text-fog">{{ card.text }}</p>
          <p class="mt-3 text-sm font-semibold text-lilac">
            Buka halaman <span class="inline-block transition group-hover:translate-x-1" aria-hidden="true">→</span>
          </p>
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import AmbientBackground from '../components/AmbientBackground.vue'
import HeroSection from '../components/HeroSection.vue'
import ProfileImage from '../components/ProfileImage.vue'
import InfoPanel from '../components/InfoPanel.vue'

const quickLinks = [
  {
    path: '/about',
    emoji: '👩‍🎓',
    title: 'About',
    text: 'Profil akademik, latar belakang, dan pendekatan belajar Dea.',
  },
  {
    path: '/portfolio',
    emoji: '🗂️',
    title: 'Portfolio',
    text: 'Daftar konsep dan latihan proyek yang didokumentasikan jujur.',
  },
  {
    path: '/contact',
    emoji: '✉️',
    title: 'Contact',
    text: 'Sapa Dea lewat formulir kontak dengan validasi langsung.',
  },
]
</script>
