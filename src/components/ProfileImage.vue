<template>
  <div class="relative mx-auto w-full max-w-sm" :class="frameClass">
    <div
      class="absolute -inset-4 rounded-[2.2rem] bg-gradient-to-br from-violet-600/40 via-fuchsia-500/20 to-indigo-600/30 blur-2xl"
      aria-hidden="true"
    />
    <div
      class="glass-panel relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_-20px_rgba(139,92,246,0.55)]"
    >
      <!-- Foto profil asli Dea -->
      <img
        :src="photoSrc"
        :alt="alt"
        class="block aspect-[3/4] w-full object-cover"
        loading="eager"
        fetchpriority="high"
      />
      <div
        class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07040d] via-[#07040d]/40 to-transparent"
        aria-hidden="true"
      />
      <!-- Badge nama -->
      <div
        class="absolute bottom-4 left-4 flex items-center gap-2.5 rounded-2xl border border-violet-200/30 bg-[#07040d]/80 py-2.5 pr-4 pl-2.5 backdrop-blur-md"
      >
        <span
          class="font-display flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-600 text-xs font-bold text-white"
        >
          DR
        </span>
        <span class="text-left leading-tight">
          <strong class="block text-sm text-white">Dea Cinta R.</strong>
          <span class="block text-[11px] text-fog">Informatika · ITK</span>
        </span>
      </div>
    </div>
    <div
      class="animate-floaty absolute -right-3 -bottom-4 hidden items-center gap-2 rounded-2xl border border-violet-300/25 bg-ink/90 px-4 py-3 shadow-xl sm:flex"
      aria-hidden="true"
    >
      <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600/25 text-lg">🎓</span>
      <span class="text-left text-xs leading-tight text-fog">
        <strong class="block text-sm text-white">ITK · 2024</strong>
        Informatika Student
      </span>
    </div>
  </div>
</template>

<script setup>
import photoSrc from '../assets/photo-profil.png'

defineProps({
  alt: { type: String, default: 'Foto profil Dea Cinta Ramadani' },
  frameClass: { type: String, default: '' },
})
</script>
