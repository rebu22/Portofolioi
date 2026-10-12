<template>
  <div class="relative overflow-hidden">
    <AmbientBackground />
    <div class="relative mx-auto max-w-4xl px-5 py-14 sm:px-8 lg:py-20">
      <nav aria-label="Breadcrumb">
        <ol class="flex flex-wrap items-center gap-2 text-sm text-fog">
          <li><RouterLink to="/" class="transition hover:text-white">Home</RouterLink></li>
          <li aria-hidden="true">/</li>
          <li><RouterLink to="/portfolio" class="transition hover:text-white">Portfolio</RouterLink></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" class="text-lilac">{{ project ? project.name : 'Tidak ditemukan' }}</li>
        </ol>
      </nav>

      <div class="mt-8">
        <ProjectDetail v-if="project" :project="project" />
        <!-- State ID tidak ditemukan -->
        <div v-else class="glass-panel rounded-3xl p-10 text-center sm:p-14">
          <p class="text-6xl" aria-hidden="true">🔍</p>
          <h1 class="font-display mt-5 text-3xl font-extrabold text-white">Proyek tidak ditemukan</h1>
          <p class="mx-auto mt-3 max-w-md text-fog">
            Tidak ada proyek dengan ID “{{ route.params.id }}”. Mungkin tautannya keliru atau proyek sudah
            diperbarui.
          </p>
          <RouterLink
            to="/portfolio"
            class="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-7 py-3.5 text-sm font-bold text-white transition hover:brightness-110"
          >
            <span aria-hidden="true">←</span> Kembali ke Portfolio
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AmbientBackground from '../components/AmbientBackground.vue'
import ProjectDetail from '../components/ProjectDetail.vue'
import { getProjectById } from '../data/projects.js'

const route = useRoute()
// Data diambil berdasarkan parameter id — setiap proyek punya halaman sendiri.
const project = computed(() => getProjectById(route.params.id))
</script>
