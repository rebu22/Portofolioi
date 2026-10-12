<template>
  <div class="relative overflow-hidden">
    <AmbientBackground />
    <div class="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
      <SectionHeading
        eyebrow="Portfolio"
        title="Dokumentasi Karya & Konsep Proyek"
        description="Setiap item dirender dari data terstruktur memakai v-for. Status ditandai jujur: konsep dan latihan diberi label Placeholder sampai ada bukti implementasi."
      />

      <div
        v-if="route.meta?.fromNotFound"
        class="mt-8 rounded-2xl border border-amber-300/30 bg-amber-500/10 px-5 py-4 text-sm text-amber-200"
        role="status"
      >
        Halaman yang Anda cari tidak ditemukan — Anda diarahkan ke Portfolio. Silakan pilih proyek di bawah ini.
      </div>

      <!-- Filter kategori (fitur interaktif tambahan) -->
      <div class="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter proyek berdasarkan kategori">
        <button
          v-for="cat in categories"
          :key="cat"
          type="button"
          :aria-pressed="activeCategory === cat ? 'true' : 'false'"
          :class="[
            'rounded-full border px-4 py-2 text-sm font-semibold transition',
            activeCategory === cat
              ? 'border-violet-300/60 bg-violet-600/30 text-white'
              : 'border-white/10 bg-white/[0.03] text-fog hover:border-violet-300/30 hover:text-white',
          ]"
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <p class="mt-4 text-sm text-fog" role="status" aria-live="polite">
        Menampilkan {{ filtered.length }} dari {{ projects.length }} proyek
        <template v-if="activeCategory !== 'Semua'"> pada kategori “{{ activeCategory }}”</template>.
      </p>

      <!-- Grid responsif via Tailwind Grid -->
      <div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard v-for="project in filtered" :key="project.id" :project="project" />
      </div>

      <div class="glass-panel mt-10 rounded-3xl p-6 sm:p-8" aria-label="Catatan kejujuran konten">
        <h2 class="font-display text-lg font-bold text-white">📝 Catatan dokumentasi</h2>
        <p class="mt-2 max-w-3xl text-sm leading-relaxed text-fog">
          Semua proyek di atas berstatus <strong class="text-amber-200">Placeholder</strong>: berupa konsep, ide, atau
          latihan — bukan aplikasi yang sudah selesai. Setiap kartu tertaut ke halaman detail berisi permasalahan,
          tujuan, pendekatan, tantangan, dan hasil (yang akan diisi setelah ada bukti nyata). Data tersimpan di
          <code class="rounded bg-white/10 px-1.5 py-0.5 text-xs text-lilac">src/data/projects.js</code> sehingga mudah
          ditambah dan diperbarui.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import AmbientBackground from '../components/AmbientBackground.vue'
import SectionHeading from '../components/SectionHeading.vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projects.js'

const route = useRoute()
const activeCategory = ref('Semua')

const categories = computed(() => {
  const kinds = new Set(projects.map((p) => p.category.split('·')[1]?.trim() ?? p.category))
  return ['Semua', ...kinds]
})

const filtered = computed(() => {
  if (activeCategory.value === 'Semua') return projects
  return projects.filter((p) => p.category.includes(activeCategory.value))
})
</script>
