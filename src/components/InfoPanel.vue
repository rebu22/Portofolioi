<template>
  <aside class="glass-panel flex flex-col gap-6 rounded-3xl p-6 sm:p-7" aria-label="Panel informasi singkat">
    <!-- About Me -->
    <section aria-labelledby="panel-about">
      <h2 id="panel-about" class="font-display text-sm font-bold tracking-[0.18em] text-lilac uppercase">
        About Me
      </h2>
      <p class="mt-2 text-sm leading-relaxed text-fog">
        Mahasiswa Informatika ITK angkatan 2024. Fokus pada pembelajaran, analisis sistem, dan implementasi
        proyek digital.
      </p>
      <RouterLink
        to="/about"
        class="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition hover:text-lilac"
      >
        Selengkapnya
        <span aria-hidden="true">→</span>
      </RouterLink>
    </section>

    <div class="h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" aria-hidden="true" />

    <!-- My Work -->
    <section aria-labelledby="panel-work">
      <h2 id="panel-work" class="font-display text-sm font-bold tracking-[0.18em] text-lilac uppercase">
        My Work
      </h2>
      <ul class="mt-3 flex flex-col gap-2.5">
        <li v-for="project in featured" :key="project.id">
          <RouterLink
            :to="`/portfolio/${project.id}`"
            class="group flex items-center justify-between gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-3.5 py-2.5 text-sm transition hover:border-violet-300/30 hover:bg-violet-500/10"
          >
            <span>
              <span class="block font-semibold text-white">{{ project.name }}</span>
              <span class="block text-xs text-fog">{{ project.category }}</span>
            </span>
            <span class="text-lilac transition group-hover:translate-x-1" aria-hidden="true">↗</span>
          </RouterLink>
        </li>
      </ul>
      <RouterLink
        to="/portfolio"
        class="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition hover:text-lilac"
      >
        Lihat semua proyek
        <span aria-hidden="true">→</span>
      </RouterLink>
    </section>

    <div class="h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" aria-hidden="true" />

    <!-- Follow Me -->
    <section aria-labelledby="panel-follow">
      <h2 id="panel-follow" class="font-display text-sm font-bold tracking-[0.18em] text-lilac uppercase">
        Follow Me
      </h2>
      <SocialLinks class="mt-3" @placeholder-click="notice = $event" />
      <p class="mt-2 min-h-5 text-xs text-fog" role="status" aria-live="polite">
        <template v-if="notice"> Akun {{ notice }} belum tersedia — segera hadir. </template>
        <template v-else> Akun sosial akan ditautkan setelah informasi resmi tersedia. </template>
      </p>
    </section>
  </aside>
</template>

<script setup>
import { computed, ref } from 'vue'
import SocialLinks from './SocialLinks.vue'
import { projects } from '../data/projects.js'

const featured = computed(() => projects.slice(0, 2))
const notice = ref('')
</script>
