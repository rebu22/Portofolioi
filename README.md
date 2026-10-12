# Portofolio Dea Cinta Ramadani

Website portofolio Dea Cinta Ramadani — mahasiswi Informatika Institut Teknologi Kalimantan angkatan 2024 (NIM 11241025). Dibangun dengan Vue 3 (Composition API) + Vue Router + Tailwind CSS 4 + Vite.

Situs live: https://nxq4enffl6sjl.space.minimax.io

## Menjalankan

```bash
npm.cmd install
npm.cmd run dev      # server pengembangan (http://localhost:5173)
npm.cmd run build    # build produksi ke dist/
npm.cmd run preview  # pratinjau hasil build
```

## Struktur (5 halaman)

- `/` Beranda — hero, profil singkat, bidang keahlian, media sosial
- `/about` Tentang — konteks, identifikasi masalah, solusi, tujuan pengembangan
- `/portfolio` Portofolio — daftar studi kasus + filter kategori
- `/portfolio/:id` Detail Proyek — dokumentasi latar belakang, tujuan, tantangan dan penyelesaian
- `/contact` Kontak — formulir pesan bervalidasi + informasi kontak profesional

Komponen (`src/components/`): AmbientBackground, AppFooter, AppNavbar, ContactForm, HeroSection, InfoPanel, PageShell, ProfileImage, ProjectCard, ProjectDetail (dialog), SectionHeading, SocialLinks, StickerWall. State dialog: `src/composables/usePanelDialog.js`. Data: `src/data/projects.js`.

Dokumen use case: `Use_Case_Website_Portofolio.txt`.

## Catatan

- Router memakai hash history agar seluruh halaman tetap berfungsi di hosting statis.
- Formulir kontak bervalidasi dan menyimpan pesan sebagai draf lokal di peramban (localStorage); balasan menyusul lewat surel 11241025@student.itk.ac.id dalam 1–2 hari kerja.
