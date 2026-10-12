<!-- KOMPETENSI: bidang keahlian dan fokus profesional -->
<template>
  <section class="card tilt-r p-6" aria-label="Kompetensi">
    <span class="tag mint">kompetensi</span>
    <h2 class="display mt-3 text-2xl">Bidang Keahlian</h2>
    <p class="mt-2 text-sm leading-relaxed">
      Fokus keilmuan dan teknis yang saya kembangkan selama studi Informatika.
    </p>
    <div class="stickerwall mt-4">
      <button
        v-for="s in competencies"
        :key="s"
        type="button"
        class="sticker-btn"
        :class="{ picked: picked.includes(s) }"
        @click="toggle(s)"
      >
        {{ s }}
      </button>
    </div>
    <p class="caption-hand mt-4 text-sm">
      {{
        picked.length
          ? `${picked.length} bidang ditandai sebagai fokus utama.`
          : "Pilih bidang untuk menandai fokus utama."
      }}
    </p>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const competencies = [
  "Rekayasa Perangkat Lunak",
  "Analisis Sistem",
  "Pengembangan Web",
  "Vue.js",
  "UI/UX",
  "Dokumentasi Teknis",
  "Basis Data",
  "Pemodelan DFD",
  "HTML & CSS",
  "Manajemen Proyek",
];
const picked = ref([]);

function load() {
  try {
    picked.value = JSON.parse(localStorage.getItem("dea-stickers") || "[]");
  } catch {
    picked.value = [];
  }
}
function toggle(s) {
  picked.value = picked.value.includes(s)
    ? picked.value.filter((x) => x !== s)
    : [...picked.value, s];
  try {
    localStorage.setItem("dea-stickers", JSON.stringify(picked.value));
  } catch {
    /* abaikan */
  }
}

onMounted(load);
</script>
