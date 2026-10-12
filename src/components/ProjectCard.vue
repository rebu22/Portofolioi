<template>
  <article
    class="glass-panel group flex h-full flex-col overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1.5 hover:border-violet-300/40 hover:shadow-[0_24px_60px_-18px_rgba(139,92,246,0.55)]"
  >
    <!-- Thumbnail: ilustrasi SVG relevan per proyek (bukan screenshot fiktif) -->
    <div class="relative h-44 overflow-hidden" aria-hidden="true">
      <svg viewBox="0 0 400 180" class="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient :id="`pc-${project.id}`" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" :stop-color="art.from" />
            <stop offset="1" :stop-color="art.to" />
          </linearGradient>
        </defs>
        <rect width="400" height="180" :fill="`url(#pc-${project.id})`" />
        <text x="50%" y="56%" text-anchor="middle" font-size="64">{{ art.emoji }}</text>
        <circle cx="60" cy="40" r="24" fill="#ffffff" opacity="0.08" />
        <circle cx="350" cy="140" r="34" fill="#ffffff" opacity="0.06" />
      </svg>
      <span
        class="absolute top-3 left-3 rounded-full border border-violet-200/30 bg-[#07040d]/80 px-3 py-1 text-[11px] font-semibold tracking-wide text-lilac uppercase"
      >
        {{ project.category }}
      </span>
      <span
        v-if="project.status === 'placeholder'"
        class="absolute top-3 right-3 rounded-full border border-amber-300/40 bg-amber-500/15 px-3 py-1 text-[11px] font-semibold text-amber-200"
        title="Konsep/latihan — bukan aplikasi selesai"
      >
        Placeholder
      </span>
    </div>

    <div class="flex flex-1 flex-col gap-3 p-5 sm:p-6">
      <h3 class="font-display text-lg font-bold text-white">{{ project.name }}</h3>
      <p class="flex-1 text-sm leading-relaxed text-fog">{{ project.shortDescription }}</p>
      <ul class="flex flex-wrap gap-1.5" aria-label="Teknologi yang digunakan">
        <li
          v-for="tech in project.technologies"
          :key="tech"
          class="rounded-full bg-violet-500/15 px-2.5 py-1 text-[11px] font-semibold text-lilac"
        >
          {{ tech }}
        </li>
      </ul>
      <RouterLink
        :to="`/portfolio/${project.id}`"
        class="mt-1 inline-flex items-center justify-center gap-2 rounded-xl border border-violet-300/30 bg-violet-600/20 px-4 py-2.5 text-sm font-semibold text-white transition group-hover:bg-violet-600/35 hover:border-violet-300/60"
        :aria-label="`Lihat detail proyek ${project.name}`"
      >
        Lihat Detail
        <span aria-hidden="true">→</span>
      </RouterLink>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  project: { type: Object, required: true },
})

// Motif visual berbeda per jenis thumbnail — murni dekoratif.
const artMap = {
  'task-board': { emoji: '📋', from: '#2b1658', to: '#0b0714' },
  'data-chart': { emoji: '📊', from: '#1e1b4b', to: '#0b0714' },
  storefront: { emoji: '🏪', from: '#3b0764', to: '#0b0714' },
  gamepad: { emoji: '🎮', from: '#251058', to: '#07040d' },
}

const art = computed(() => artMap[props.project.image] ?? { emoji: '✨', from: '#2b1658', to: '#0b0714' })
</script>
