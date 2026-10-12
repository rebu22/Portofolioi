<!-- PORTOFOLIO: daftar studi kasus + filter kategori -->
<template>
  <PageShell
    eyebrow="portofolio"
    title="Studi Kasus Proyek"
    description="Setiap proyek didokumentasikan secara terstruktur: latar belakang, analisis, arsitektur sistem, teknologi, serta tantangan dan solusi."
  >
    <div class="flex flex-wrap items-center gap-2">
      <button
        v-for="c in categories"
        :key="c"
        type="button"
        class="sticker-btn"
        :class="{ picked: filter === c }"
        @click="filter = c"
      >
        {{ filter === c ? "✿ " : "" }}{{ c }}
      </button>
      <button
        type="button"
        class="sticker-btn"
        style="background: var(--sun)"
        @click="shuffle"
      >
        🎲 Acak Urutan
      </button>
    </div>

    <div
      v-if="filtered.length"
      class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      <div v-for="p in filtered" :key="p.id">
        <ProjectCard :project="p" />
      </div>
    </div>
    <div v-else class="card tilt-l mt-8 px-6 py-16 text-center">
      <p class="display text-2xl">Tidak Ada Proyek</p>
      <p class="mx-auto mt-2 max-w-sm text-sm">
        Tidak ada proyek dalam kategori ini. Silakan pilih kategori lain.
      </p>
    </div>
  </PageShell>
</template>

<script setup>
import { computed, ref } from "vue";
import PageShell from "../components/PageShell.vue";
import ProjectCard from "../components/ProjectCard.vue";
import { projects } from "../data/projects.js";

const filter = ref("Semua");
const order = ref(projects.map((p) => p.id));

const categories = computed(() => [
  "Semua",
  ...new Set(projects.map((p) => p.category)),
]);
const ordered = computed(() =>
  order.value.map((id) => projects.find((p) => p.id === id)).filter(Boolean),
);
const filtered = computed(() =>
  filter.value === "Semua"
    ? ordered.value
    : ordered.value.filter((p) => p.category === filter.value),
);

function shuffle() {
  order.value = [...order.value].sort(() => Math.random() - 0.5);
}
</script>
