# Aset gambar

- `photo-profil.png` — foto profil asli Dea, dipakai di `ProfileImage.vue`
  (tampil di halaman Home dan About). Jika fotonya diganti, timpa file ini
  dengan nama yang sama lalu rebuild — tidak perlu ubah kode.
- Thumbnail proyek memakai ilustrasi SVG inline di `ProjectCard.vue` dan
  `ProjectDetail.vue`. Untuk memakai foto/screenshot asli, simpan gambar ke
  folder ini, import di komponen terkait, dan ubah field `image` di
  `src/data/projects.js`.
