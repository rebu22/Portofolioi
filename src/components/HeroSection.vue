<!-- Hero beranda: sapaan profesional + headline -->
<template>
  <section aria-labelledby="intro-title">
    <div class="flex flex-wrap gap-2">
      <span class="pill sun">Selamat datang di portofolio saya</span>
    </div>
    <h1 id="intro-title" class="display mt-5 text-5xl sm:text-6xl lg:text-7xl">
      Dea Cinta Ramadani,<br />
      Mahasiswi <span class="hl-pink">Informatika</span> ITK
    </h1>
    <p class="mt-5 max-w-xl text-[15px] leading-relaxed">
      Mahasiswi Informatika Institut Teknologi Kalimantan angkatan 2024 (NIM
      11241025) dengan fokus pada rekayasa perangkat lunak, analisis sistem,
      dan pengembangan antarmuka aplikasi yang bersih, responsif, dan
      berpusat pada pengguna.
    </p>
    <div class="mt-7 flex flex-wrap items-center gap-3">
      <button class="btn primary" type="button" @click="scrollNext">
        Jelajahi Portofolio ↓
      </button>
      <RouterLink class="btn" to="/portfolio">Lihat Karya</RouterLink>
    </div>
  </section>
</template>

<script setup>
function scrollNext() {
  document
    .getElementById("home-panels")
    ?.scrollIntoView({ behavior: "smooth" });
}
</script>
