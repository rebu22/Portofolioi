<template>
  <div class="relative overflow-hidden">
    <AmbientBackground />
    <div class="relative mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-20">
      <SectionHeading
        eyebrow="About"
        title="Profil Akademik Dea Cinta Ramadani"
        description="Mahasiswa Informatika yang membangun portofolio ini sebagai ruang dokumentasi: mencatat apa yang dipelajari, dianalisis, dan diimplementasikan — secara jujur dan terstruktur."
      />

      <!-- Label akademik -->
      <dl class="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-label="Data akademik">
        <div v-for="item in academic" :key="item.label" class="glass-panel rounded-2xl px-5 py-4">
          <dt class="text-[11px] font-bold tracking-[0.18em] text-lilac uppercase">{{ item.label }}</dt>
          <dd class="font-display mt-1 text-base font-bold text-white">{{ item.value }}</dd>
        </div>
      </dl>

      <!-- Layout editorial: foto + narasi -->
      <div class="mt-12 grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div class="lg:sticky lg:top-24">
          <ProfileImage alt="Foto profil Dea Cinta Ramadani" />
          <div class="glass-panel mt-6 rounded-2xl p-5">
            <h2 class="font-display text-sm font-bold tracking-[0.18em] text-lilac uppercase">Fakta singkat</h2>
            <ul class="mt-3 flex flex-col gap-2 text-sm text-fog">
              <li><strong class="text-white">NIM:</strong> 11241025</li>
              <li><strong class="text-white">Fokus:</strong> solusi digital & analisis sistem</li>
              <li><strong class="text-white">Status:</strong> terbuka untuk belajar & kolaborasi</li>
            </ul>
            <SocialLinks class="mt-4" @placeholder-click="notice = $event" />
            <p class="mt-2 min-h-5 text-xs text-fog" role="status">
              <template v-if="notice">Akun {{ notice }} belum tersedia — segera hadir.</template>
              <template v-else>Akun sosial ditautkan setelah info resmi tersedia.</template>
            </p>
          </div>
        </div>

        <div class="flex flex-col gap-6">
          <section class="glass-panel rounded-3xl p-6 sm:p-8" aria-labelledby="about-bg">
            <h2 id="about-bg" class="font-display text-2xl font-bold text-white">Latar belakang & tujuan</h2>
            <p class="mt-4 leading-relaxed text-fog">
              Saya <strong class="text-white">Dea Cinta Ramadani</strong>, mahasiswa
              <strong class="text-white">Program Studi Informatika, Institut Teknologi Kalimantan, angkatan 2024</strong>.
              Portofolio ini dibuat sebagai dokumentasi perjalanan akademik — bukan etalase klaim — sehingga setiap
              karya ditandai jelas statusnya: konsep, latihan, atau implementasi yang terbukti.
            </p>
            <p class="mt-3 leading-relaxed text-fog">
              Tujuannya tiga: melatih kebiasaan mendokumentasikan proses berpikir, menyediakan satu tempat rujukan
              karya yang mudah diperbarui, dan membuka pintu kolaborasi lewat halaman kontak yang fungsional.
            </p>
          </section>

          <section class="glass-panel rounded-3xl p-6 sm:p-8" aria-labelledby="about-approach">
            <h2 id="about-approach" class="font-display text-2xl font-bold text-white">Pendekatan belajar & problem solving</h2>
            <ol class="mt-5 flex flex-col gap-4">
              <li v-for="(step, i) in approach" :key="step.title" class="flex gap-4">
                <span
                  class="font-display flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-sm font-bold text-white"
                >
                  {{ i + 1 }}
                </span>
                <span>
                  <strong class="block text-white">{{ step.title }}</strong>
                  <span class="mt-1 block text-sm leading-relaxed text-fog">{{ step.text }}</span>
                </span>
              </li>
            </ol>
          </section>

          <section class="glass-panel rounded-3xl p-6 sm:p-8" aria-labelledby="about-skills">
            <h2 id="about-skills" class="font-display text-2xl font-bold text-white">Area keahlian</h2>
            <p class="mt-2 text-sm text-fog">
              Daftar di bawah mencerminkan kemampuan yang sedang dipelajari — diperbarui seiring bukti nyata.
            </p>
            <div class="mt-5 grid gap-4 sm:grid-cols-2">
              <div v-for="skill in skills" :key="skill.name" class="rounded-2xl border border-white/5 bg-white/[0.03] p-5">
                <div class="flex items-center justify-between gap-2">
                  <h3 class="font-semibold text-white">{{ skill.name }}</h3>
                  <span class="text-xs font-semibold text-lilac">{{ skill.level }}</span>
                </div>
                <div class="mt-3 h-2 overflow-hidden rounded-full bg-white/10" role="img" :aria-label="`${skill.name}: ${skill.level}`">
                  <div class="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" :style="{ width: skill.percent + '%' }" />
                </div>
                <p class="mt-2.5 text-xs leading-relaxed text-fog">{{ skill.note }}</p>
              </div>
            </div>
          </section>

          <div class="flex flex-wrap gap-3">
            <RouterLink
              to="/portfolio"
              class="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-7 py-3.5 text-sm font-bold text-white shadow-[0_12px_40px_rgba(139,92,246,0.5)] transition hover:brightness-110"
            >
              Lihat Portfolio →
            </RouterLink>
            <RouterLink
              to="/contact"
              class="rounded-full border border-violet-300/30 bg-violet-500/10 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-violet-500/20"
            >
              Hubungi Saya
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AmbientBackground from '../components/AmbientBackground.vue'
import SectionHeading from '../components/SectionHeading.vue'
import ProfileImage from '../components/ProfileImage.vue'
import SocialLinks from '../components/SocialLinks.vue'

const notice = ref('')

const academic = [
  { label: 'Nama Lengkap', value: 'Dea Cinta Ramadani' },
  { label: 'Program Studi', value: 'Informatika' },
  { label: 'Institusi', value: 'Institut Teknologi Kalimantan' },
  { label: 'Angkatan', value: '2024' },
]

const approach = [
  {
    title: 'Pahami masalah dulu',
    text: 'Menuliskan siapa yang terdampak, apa kendalanya, dan seperti apa keberhasilan diukur — sebelum menyentuh kode.',
  },
  {
    title: 'Rancang kecil, uji cepat',
    text: 'Memecah solusi menjadi langkah kecil yang bisa diuji satu per satu, dari sketsa hingga prototipe.',
  },
  {
    title: 'Dokumentasikan proses',
    text: 'Mencatat keputusan, tantangan, dan pelajaran di setiap proyek agar mudah dievaluasi dan dilanjutkan.',
  },
  {
    title: 'Minta umpan balik',
    text: 'Mempresentasikan hasil latihan kepada teman dan dosen untuk menemukan sudut pandang yang terlewat.',
  },
]

const skills = [
  { name: 'Vue 3 & Frontend', level: 'Mempelajari', percent: 55, note: 'Composition API, Router, dan Tailwind — dipakai membangun situs ini.' },
  { name: 'Analisis Sistem', level: 'Mempelajari', percent: 50, note: 'Pemodelan kebutuhan, alur proses, dan dokumentasi studi kasus.' },
  { name: 'Python & Data', level: 'Dasar', percent: 35, note: 'Latihan Pandas dan visualisasi untuk analisis data sederhana.' },
  { name: 'Git & Kolaborasi', level: 'Dasar', percent: 40, note: 'Commit terstruktur, branching, dan review lewat pull request.' },
]
</script>
