<!-- DETAIL: dokumentasi satu studi kasus + tantangan dan solusi -->
<template>
  <div class="wrap py-12 sm:py-16">
    <RouterLink to="/portfolio" class="link-arrow"
      >← KEMBALI KE PORTOFOLIO</RouterLink
    >

    <article v-if="project" class="mt-6">
      <div class="card overflow-hidden tilt-l">
        <div
          class="m-3 overflow-hidden rounded-2xl border-[2.5px] border-[#33202f]"
        >
          <img
            :src="project.image"
            :alt="`Thumbnail ${project.title}`"
            class="aspect-[16/8] w-full object-cover"
          />
        </div>
        <div class="px-6 pb-6 sm:px-8 sm:pb-8">
          <span class="tag sun">{{ project.category }}</span>
          <h1 class="display mt-3 text-4xl sm:text-5xl">{{ project.title }}</h1>
          <p class="mt-4 max-w-2xl leading-relaxed">
            {{ project.description }}
          </p>
          <div class="mt-5 flex flex-wrap gap-2">
            <span v-for="t in project.tech" :key="t" class="pill">{{ t }}</span>
          </div>
        </div>
      </div>

      <div v-if="!project.empty" class="mt-6 space-y-6">
        <section class="card tilt-r p-6 sm:p-8">
          <span class="tag">latar belakang</span>
          <h2 class="display mt-3 text-2xl">Latar Belakang Masalah</h2>
          <p class="mt-3 text-sm leading-relaxed">{{ project.problem }}</p>
        </section>
        <section class="card tilt-l p-6 sm:p-8">
          <span class="tag mint">tujuan</span>
          <h2 class="display mt-3 text-2xl">Tujuan Pengembangan</h2>
          <p class="mt-3 text-sm leading-relaxed">{{ project.goal }}</p>
        </section>
        <section class="card tilt-r p-6 sm:p-8">
          <span class="tag grape">tantangan & solusi</span>
          <h2 class="display mt-3 text-2xl">Tantangan dan Penyelesaian</h2>
          <ul class="mt-4 space-y-4">
            <li
              v-for="c in project.challenges"
              :key="c.title"
              class="rounded-2xl border-[2px] border-[#33202f] bg-[#fff6ea] p-4"
            >
              <p class="text-sm font-black">✿ {{ c.title }}</p>
              <p class="mt-1 text-sm leading-relaxed">{{ c.solution }}</p>
            </li>
          </ul>
        </section>
      </div>
      <div v-else class="card tilt-r mt-6 p-8 text-center sm:p-10">
        <p class="display text-3xl">Dokumentasi Dalam Penyusunan</p>
        <p class="mx-auto mt-3 max-w-md text-sm leading-relaxed">
          Studi kasus ini sedang dalam tahap finalisasi dokumentasi: analisis
          kebutuhan, pemodelan sistem, dan implementasi solusi. Dokumentasi
          lengkap akan segera diterbitkan.
        </p>
        <RouterLink to="/portfolio" class="btn sun mt-6"
          >Kembali ke Portofolio →</RouterLink
        >
      </div>
    </article>

    <div v-else class="card mt-6 px-6 py-20 text-center tilt-l">
      <h1 class="display text-3xl">Halaman Tidak Ditemukan</h1>
      <p class="mx-auto mt-2 max-w-sm text-sm">
        Proyek dengan ID “{{ $route.params.id }}” tidak tersedia. Silakan
        kembali ke halaman portofolio.
      </p>
      <RouterLink to="/portfolio" class="btn dark mt-6"
        >Kembali ke Portofolio</RouterLink
      >
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { getProject } from "../data/projects.js";

const route = useRoute();
const project = computed(() => getProject(route.params.id));
</script>
