<!-- TENTANG: konteks + masalah + solusi + tujuan -->
<template>
  <PageShell
    eyebrow="tentang"
    title="Latar Belakang Portofolio"
    description="Konteks, identifikasi masalah, solusi, dan tujuan pengembangan website portofolio ini."
  >
    <div class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <div class="space-y-6">
        <ProfileImage />
        <div class="card tilt-r p-5">
          <span class="tag sun">fakta singkat</span>
          <dl class="mt-3 grid grid-cols-2 gap-3 text-sm">
            <div
              v-for="row in identity"
              :key="row[0]"
              class="rounded-xl border-[2px] border-[#33202f] bg-[#fff6ea] px-3 py-2.5"
            >
              <dt
                class="text-[10px] font-black uppercase tracking-widest opacity-70"
              >
                {{ row[0] }}
              </dt>
              <dd class="mt-0.5 font-bold">{{ row[1] }}</dd>
            </div>
          </dl>
        </div>
        <section class="card tilt-l p-6 sm:p-7">
          <span class="tag grape">tujuan utama</span>
          <h3 class="display mt-3 text-2xl">Tujuan Pengembangan</h3>
          <div class="mt-4 space-y-3">
            <div
              v-for="item in goals"
              :key="item.title"
              class="rounded-xl border-[2px] border-[#33202f] bg-[#fff6ea] px-4 py-3 text-sm leading-relaxed"
            >
              <strong class="display block text-base">{{ item.title }}</strong>
              <span class="opacity-90">{{ item.desc }}</span>
            </div>
          </div>
          <div class="mt-6 flex flex-wrap gap-3">
            <RouterLink to="/portfolio" class="btn primary"
              >Lihat Portofolio →</RouterLink
            >
            <RouterLink to="/contact" class="link-arrow self-center"
              >HUBUNGI SAYA</RouterLink
            >
          </div>
        </section>
      </div>
      <div class="space-y-6">
        <section class="card tilt-l p-6 sm:p-7">
          <span class="tag">konteks &amp; kebutuhan saat ini</span>
          <h3 class="display mt-3 text-2xl">Portofolio itu aset utama</h3>
          <p class="mt-3 text-sm leading-relaxed">
            Di era digital dan industri teknologi yang bergerak sangat cepat,
            portofolio digital bukan lagi sekadar pelengkap, melainkan aset
            utama bagi mahasiswa Teknik Informatika maupun software / tech
            enthusiast. Perekrut, user, maupun tech lead tidak hanya menilai
            kandidat dari selembar CV konvensional, tetapi ingin melihat bukti
            nyata: rekam jejak pengerjaan proyek, cara berpikir analitis, serta
            kemampuan problem-solving yang diimplementasikan ke dalam bentuk
            kode, desain sistem, maupun antarmuka aplikasi.
          </p>
        </section>

        <section class="card tilt-r p-6 sm:p-7">
          <span class="tag blush">identifikasi masalah</span>
          <h3 class="display mt-3 text-2xl">Identifikasi Masalah</h3>
          <ul class="mt-4 space-y-3 text-sm leading-relaxed">
            <li
              v-for="item in problems"
              :key="item.title"
              class="rounded-xl border-[2px] border-[#33202f] bg-[#fff6ea] px-4 py-3"
            >
              <strong class="display block text-base">{{ item.title }}</strong>
              <span class="opacity-90">{{ item.desc }}</span>
            </li>
          </ul>
        </section>

        <section class="card tilt-l p-6 sm:p-7">
          <span class="tag mint">solusi yang ditawarkan</span>
          <h3 class="display mt-3 text-2xl">Solusi: Platform yang Bersih dan Berpusat pada Pengguna</h3>
          <ul class="mt-4 space-y-3 text-sm leading-relaxed">
            <li
              v-for="item in solutions"
              :key="item.title"
              class="rounded-xl border-[2px] border-[#33202f] bg-[#fff6ea] px-4 py-3"
            >
              <strong class="display block text-base">{{ item.title }}</strong>
              <span class="opacity-90">{{ item.desc }}</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </PageShell>
</template>

<script setup>
import PageShell from "../components/PageShell.vue";
import ProfileImage from "../components/ProfileImage.vue";

const identity = [
  ["Nama", "Dea Cinta Ramadani"],
  ["NIM", "11241025"],
  ["Prodi", "Informatika"],
  ["Kampus", "ITK"],
  ["Angkatan", "2024"],
  ["Status", "Mahasiswi"],
];

const problems = [
  {
    title: "1. CV konvensional terlalu terbatas",
    desc: "Format CV teks tradisional tidak cukup ruang untuk menjelaskan detail kompleks proyek, seperti arsitektur sistem, pemilihan tech stack, hingga pain points yang berhasil diselesaikan selama pengembangan.",
  },
  {
    title: "2. Portofolio yang rumit & berantakan",
    desc: "Banyak portofolio pribadi dibuat berlebihan secara visual — terlalu banyak animasi atau elemen yang tidak perlu — sehingga mengorbankan performa dan menyulitkan perekrut menemukan informasi inti dalam waktu singkat.",
  },
  {
    title: "3. Kurang personal & generik",
    desc: "Banyak portofolio pemula tampil generik dan tidak mencerminkan keunikan serta fokus keahlian kreatornya, misalnya di bidang rekayasa perangkat lunak, sistem data, atau UI/UX.",
  },
];

const solutions = [
  {
    title: "Minimalis & terstruktur",
    desc: "Pengembangan web portofolio pribadi yang bersih, responsif, dan berpusat pada pengguna (user-centric) dengan pendekatan minimalist single page / landing page yang memuat elemen esensial secara terstruktur.",
  },
  {
    title: "Fokus pada studi kasus",
    desc: "Menampilkan tidak hanya hasil akhir aplikasi, tetapi juga latar belakang masalah, alur sistem (seperti pemodelan DFD atau logika arsitektur), hingga teknologi yang digunakan.",
  },
  {
    title: "Performa tinggi & aksesibilitas",
    desc: "Dibangun dengan standar web modern agar dapat diakses cepat di berbagai perangkat (desktop maupun mobile), mencerminkan standar kualitas kerja yang baik.",
  },
  {
    title: "Identitas akademis + profesional",
    desc: "Mengintegrasikan latar belakang keilmuan Informatika untuk menunjukkan fondasi analitis yang kuat dalam membangun sebuah solusi digital.",
  },
];

const goals = [
  {
    title: "Personal branding",
    desc: "Membangun kehadiran profesional yang kuat di ranah digital sebagai representasi identitas dan kompetensi di bidang teknologi.",
  },
  {
    title: "Pusat informasi terpusat",
    desc: "Membuktikan kemampuan implementasi nyata dari teori-teori Informatika ke dalam produk digital yang fungsional dan estetis.",
  },
];
</script>
