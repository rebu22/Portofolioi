# Portofolio Dea Cinta Ramadani

Website portofolio Dea Cinta Ramadani — mahasiswi Informatika Institut Teknologi Kalimantan angkatan 2024 (NIM 11241025). Dibangun dengan Vue 3 (Composition API) + Vue Router + Tailwind CSS 4 + Vite.

## Menjalankan secara lokal

Butuh Node.js 18 atau lebih baru.

```bash
git clone https://github.com/rebu22/Portofolioi.git
cd Portofolioi
npm install
npm run dev      # server pengembangan (http://localhost:5173)
npm run build    # build produksi ke dist/
npm run preview  # pratinjau hasil build
```

## Struktur (6 halaman)

- `/` Beranda — hero, profil singkat, bidang keahlian, media sosial
- `/about` Tentang — konteks, identifikasi masalah, solusi, tujuan pengembangan
- `/portfolio` Portofolio — daftar studi kasus + filter kategori
- `/portfolio/:id` Detail Proyek — dokumentasi latar belakang, tujuan, tantangan dan penyelesaian
- `/skill` Skill — kemampuan yang dikembangkan beserta penerapannya di portofolio
- `/contact` Kontak — formulir pesan bervalidasi + informasi kontak profesional

Komponen (`src/components/`): AmbientBackground, AppFooter, AppNavbar, ContactForm, HeroSection, InfoPanel, PageShell, ProfileImage, ProjectCard, ProjectDetail (dialog), SectionHeading, SocialLinks, StickerWall. State dialog: `src/composables/usePanelDialog.js`. Data: `src/data/projects.js`, `src/data/skills.js`.

## Catatan teknis

- Router memakai hash history agar seluruh halaman tetap berfungsi di hosting statis tanpa konfigurasi rewrite.
- Hasil `npm run build` di folder `dist/` bisa diunggah langsung ke hosting statis mana pun (Vercel, Netlify, GitHub Pages, cPanel).
- Formulir kontak bervalidasi dan menyimpan pesan sebagai draf lokal di peramban (localStorage); balasan menyusul lewat surel 11241025@student.itk.ac.id dalam 1–2 hari kerja.
