<template>
  <div class="relative overflow-hidden">
    <AmbientBackground />
    <div class="relative mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-20">
      <SectionHeading
        align="center"
        eyebrow="Contact"
        title="Mari Terhubung dengan Dea"
        description="Isi formulir di bawah — setiap kolom divalidasi langsung di browser. Akun sosial resmi akan ditautkan setelah informasinya tersedia."
      />

      <div class="mt-12 grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <!-- Panel info kontak -->
        <aside class="glass-panel rounded-3xl p-6 sm:p-8" aria-label="Informasi kontak">
          <h2 class="font-display text-xl font-bold text-white">Informasi kontak</h2>
          <ul class="mt-5 flex flex-col gap-4 text-sm">
            <li class="flex items-start gap-3">
              <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-600/25 text-lg" aria-hidden="true">🎓</span>
              <span>
                <strong class="block text-white">Dea Cinta Ramadani</strong>
                <span class="text-fog">Informatika · ITK · Angkatan 2024 (NIM 11241025)</span>
              </span>
            </li>
            <li class="flex items-start gap-3">
              <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-600/25 text-lg" aria-hidden="true">💬</span>
              <span>
                <strong class="block text-white">Respons</strong>
                <span class="text-fog">Pesan yang valid akan direspons setelah backend email terhubung.</span>
              </span>
            </li>
            <li class="flex items-start gap-3">
              <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-600/25 text-lg" aria-hidden="true">🤝</span>
              <span>
                <strong class="block text-white">Terbuka untuk</strong>
                <span class="text-fog">Belajar bersama, proyek kampus, dan kolaborasi kecil.</span>
              </span>
            </li>
          </ul>
          <div class="mt-6 border-t border-white/5 pt-6">
            <h3 class="text-sm font-bold tracking-[0.18em] text-lilac uppercase">Media sosial</h3>
            <SocialLinks class="mt-3" @placeholder-click="notice = $event" />
            <p class="mt-2 min-h-5 text-xs text-fog" role="status">
              <template v-if="notice">Akun {{ notice }} belum tersedia — segera hadir.</template>
              <template v-else>Belum ada akun resmi yang ditautkan — ikon di atas hanya penanda.</template>
            </p>
          </div>
        </aside>

        <ContactForm />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AmbientBackground from '../components/AmbientBackground.vue'
import SectionHeading from '../components/SectionHeading.vue'
import ContactForm from '../components/ContactForm.vue'
import SocialLinks from '../components/SocialLinks.vue'

const notice = ref('')
</script>
