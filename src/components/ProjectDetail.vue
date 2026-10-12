<template>
  <article>
    <!-- Kepala studi kasus -->
    <header>
      <div class="flex flex-wrap items-center gap-2">
        <span
          class="rounded-full border border-violet-300/30 bg-violet-500/15 px-3 py-1 text-[11px] font-semibold tracking-wider text-lilac uppercase"
        >
          {{ project.category }}
        </span>
        <span
          v-if="project.status === 'placeholder'"
          class="rounded-full border border-amber-300/40 bg-amber-500/15 px-3 py-1 text-[11px] font-semibold text-amber-200"
        >
          Placeholder — bukan aplikasi selesai
        </span>
      </div>
      <h1 class="font-display mt-4 text-3xl font-extrabold text-white sm:text-4xl">{{ project.name }}</h1>
      <p class="mt-3 max-w-3xl text-base leading-relaxed text-fog sm:text-lg">{{ project.shortDescription }}</p>
      <ul class="mt-4 flex flex-wrap gap-2" aria-label="Tech stack">
        <li
          v-for="tech in project.technologies"
          :key="tech"
          class="rounded-full bg-violet-500/15 px-3 py-1.5 text-xs font-semibold text-lilac"
        >
          {{ tech }}
        </li>
      </ul>
    </header>

    <!-- Banner visual relevan (bukan klaim screenshot produk) -->
    <figure class="glass-panel mt-8 overflow-hidden rounded-3xl">
      <svg viewBox="0 0 800 300" class="block h-auto w-full" role="img" :aria-label="`Ilustrasi konsep ${project.name}`">
        <defs>
          <linearGradient id="pd-banner" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#2b1658" />
            <stop offset="0.6" stop-color="#150b2e" />
            <stop offset="1" stop-color="#0b0714" />
          </linearGradient>
        </defs>
        <rect width="800" height="300" fill="url(#pd-banner)" />
        <circle cx="400" cy="130" r="90" fill="#8b5cf6" opacity="0.18" />
        <circle cx="400" cy="130" r="60" fill="#8b5cf6" opacity="0.22" />
        <text x="400" y="152" text-anchor="middle" font-size="64">{{ art }}</text>
        <text x="400" y="245" text-anchor="middle" fill="#c4bdd4" font-size="18" font-family="sans-serif">
          Ilustrasi konsep — akan diganti screenshot asli saat implementasi tersedia
        </text>
      </svg>
    </figure>

    <!-- Isi studi kasus -->
    <div class="prose-dark mt-10 grid gap-8">
      <section aria-labelledby="pd-problem" class="glass-panel rounded-3xl p-6 sm:p-8">
        <h2 id="pd-problem" class="font-display text-xl font-bold text-white">Permasalahan & Tujuan</h2>
        <h3 class="mt-4 text-sm font-bold tracking-wider text-lilac uppercase">Konteks permasalahan</h3>
        <p class="mt-2 leading-relaxed text-fog">{{ project.problem }}</p>
        <h3 class="mt-4 text-sm font-bold tracking-wider text-lilac uppercase">Tujuan pengembangan</h3>
        <p class="mt-2 leading-relaxed text-fog">{{ project.goal }}</p>
      </section>

      <section aria-labelledby="pd-solution" class="glass-panel rounded-3xl p-6 sm:p-8">
        <h2 id="pd-solution" class="font-display text-xl font-bold text-white">Pendekatan Solusi</h2>
        <p class="mt-3 leading-relaxed text-fog">{{ project.solution }}</p>
        <h3 class="mt-5 text-sm font-bold tracking-wider text-lilac uppercase">Alur / arsitektur (rencana)</h3>
        <ol class="mt-3 grid gap-2.5 sm:grid-cols-2">
          <li
            v-for="(step, i) in project.architecture"
            :key="step"
            class="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3 text-sm text-fog"
          >
            <span
              class="font-display flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-violet-600/30 text-xs font-bold text-white"
            >
              {{ i + 1 }}
            </span>
            {{ step }}
          </li>
        </ol>
      </section>

      <section aria-labelledby="pd-challenges" class="glass-panel rounded-3xl p-6 sm:p-8">
        <h2 id="pd-challenges" class="font-display text-xl font-bold text-white">Tantangan & Penyelesaian</h2>
        <ul class="mt-4 grid gap-3">
          <li
            v-for="c in project.challenges"
            :key="c.title"
            class="rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-4"
          >
            <p class="font-semibold text-white">⚠ {{ c.title }}</p>
            <p class="mt-1.5 text-sm leading-relaxed text-fog">
              <strong class="text-lilac">Penyelesaian:</strong> {{ c.resolution }}
            </p>
          </li>
        </ul>
      </section>

      <section aria-labelledby="pd-result" class="glass-panel rounded-3xl p-6 sm:p-8">
        <h2 id="pd-result" class="font-display text-xl font-bold text-white">Hasil Implementasi</h2>
        <p class="mt-3 leading-relaxed text-fog">{{ project.result }}</p>
        <div class="mt-5 flex flex-wrap gap-3">
          <a
            v-if="project.repoUrl"
            :href="project.repoUrl"
            target="_blank"
            rel="noopener"
            class="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-bold text-white transition hover:brightness-110"
          >
            Lihat Repository ↗
          </a>
          <a
            v-if="project.demoUrl"
            :href="project.demoUrl"
            target="_blank"
            rel="noopener"
            class="rounded-full border border-violet-300/30 bg-violet-500/10 px-6 py-3 text-sm font-bold text-white transition hover:bg-violet-500/20"
          >
            Lihat Demo ↗
          </a>
          <p v-if="!project.repoUrl && !project.demoUrl" class="text-sm text-fog italic">
            Tautan repository/demo belum tersedia — akan ditambahkan setelah ada bukti implementasi.
          </p>
        </div>
      </section>
    </div>

    <RouterLink
      to="/portfolio"
      class="mt-10 inline-flex items-center gap-2 rounded-full border border-violet-300/30 bg-violet-500/10 px-6 py-3 text-sm font-bold text-white transition hover:border-violet-300/60 hover:bg-violet-500/20"
    >
      <span aria-hidden="true">←</span> Kembali ke Portfolio
    </RouterLink>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  project: { type: Object, required: true },
})

const artFor = {
  'task-board': '📋',
  'data-chart': '📊',
  storefront: '🏪',
  gamepad: '🎮',
}

const art = computed(() => artFor[props.project.image] ?? '✨')
</script>
