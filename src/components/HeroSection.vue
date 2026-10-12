<template>
  <div class="flex flex-col gap-8">
    <div>
      <p
        class="inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-lilac uppercase"
      >
        <span class="relative flex h-2 w-2">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
          <span class="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
        </span>
        Halo, saya Dea
      </p>
      <h1 class="font-display mt-5 text-5xl leading-[1.05] font-extrabold text-white sm:text-6xl lg:text-7xl">
        Dea Cinta<br />
        Ramadani —
        <span class="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-300 bg-clip-text text-transparent">
          Informatika Student.
        </span>
      </h1>
      <p class="mt-6 max-w-xl text-base leading-relaxed text-fog sm:text-lg">
        Mahasiswa Informatika Institut Teknologi Kalimantan angkatan 2024 yang tertarik mengembangkan solusi
        digital melalui pembelajaran, analisis sistem, dan implementasi proyek.
      </p>
    </div>

    <div class="flex flex-wrap items-center gap-3">
      <RouterLink
        to="/portfolio"
        class="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-7 py-3.5 text-sm font-bold text-white shadow-[0_12px_40px_rgba(139,92,246,0.5)] transition hover:-translate-y-0.5 hover:brightness-110"
      >
        Lihat Portfolio Saya
      </RouterLink>
      <RouterLink
        to="/about"
        class="rounded-full border border-violet-300/30 bg-violet-500/10 px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-violet-300/60 hover:bg-violet-500/20"
      >
        Tentang Saya
      </RouterLink>
    </div>

    <dl class="grid max-w-xl grid-cols-3 gap-3" aria-label="Ringkasan akademik">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3 text-center"
      >
        <dt class="order-2 mt-1 block text-[11px] tracking-wider text-fog uppercase">{{ stat.label }}</dt>
        <dd class="font-display order-1 text-xl font-bold text-white sm:text-2xl">{{ stat.value }}</dd>
      </div>
    </dl>
  </div>
</template>

<script setup>
const stats = [
  { label: 'Angkatan', value: '2024' },
  { label: 'Program Studi', value: 'IF' },
  { label: 'Kampus', value: 'ITK' },
]
</script>
