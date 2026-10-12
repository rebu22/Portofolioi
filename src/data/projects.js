/**
 * Data proyek terstruktur — mudah ditambah / diperbarui.
 *
 * Kejujuran konten: proyek-proyek di bawah ini adalah PLACEHOLDER yang diberi
 * penanda jelas (`status: 'placeholder'`). Jangan mengklaim sebuah aplikasi
 * sudah selesai jika belum ada bukti nyata. Ganti objek placeholder dengan
 * data proyek sungguhan (ringkasan, konteks, tech stack, tautan repo) saat
 * bukti implementasi sudah tersedia.
 */
export const projects = [
  {
    id: 'sistem-informasi-tugas-kuliah',
    name: 'Sistem Informasi Tugas Kuliah',
    shortDescription:
      'PLACEHOLDER — Konsep aplikasi web untuk mencatat, memprioritaskan, dan memantau tugas kuliah dalam satu dasbor.',
    category: 'Web App · Konsep',
    technologies: ['Vue 3', 'Vite', 'Tailwind CSS'],
    image: 'task-board',
    status: 'placeholder',
    problem:
      'Mahasiswa sering kehilangan jejak tenggat tugas karena tersebar di grup chat, LMS, dan catatan pribadi.',
    goal: 'Merancang satu dasbor sederhana untuk mencatat tugas, tenggat, dan status penyelesaian.',
    solution:
      'Konsep CRUD tugas dengan filter mata kuliah, penanda prioritas, dan pengingat tenggat. Status saat ini: rancangan — belum ada implementasi yang dapat didemokan.',
    architecture: ['Halaman daftar tugas', 'Form tambah/ubah tugas', 'Filter & pencarian', 'Penyimpanan lokal (rencana)'],
    challenges: [
      {
        title: 'Belum ada backend',
        resolution: 'Rencana awal memakai penyimpanan lokal di browser agar bisa dipakai tanpa server.',
      },
      {
        title: 'Desain prioritas',
        resolution: 'Menentukan aturan skor prioritas sederhana dari tenggat dan bobot nilai.',
      },
    ],
    result: 'Belum ada hasil implementasi yang dapat dibuktikan. Bagian ini akan diisi setelah ada demo atau repository.',
    repoUrl: '',
    demoUrl: '',
  },
  {
    id: 'analisis-data-nilai-mahasiswa',
    name: 'Analisis Data Nilai Mahasiswa',
    shortDescription:
      'PLACEHOLDER — Proyek latihan analisis data untuk memvisualisasikan distribusi nilai dan kehadiran kelas.',
    category: 'Data Analysis · Latihan',
    technologies: ['Python', 'Pandas', 'Matplotlib'],
    image: 'data-chart',
    status: 'placeholder',
    problem:
      'Data nilai dalam spreadsheet sulit dibaca sekilas — tren dan outlier tidak langsung terlihat.',
    goal: 'Mempelajari alur analisis data dasar: membersihkan data, menghitung statistik, dan membuat visualisasi.',
    solution:
      'Skrip latihan yang membaca file CSV contoh, menghitung rata-rata per mata kuliah, dan menggambar grafik distribusi. Status saat ini: latihan — dataset contoh, bukan data nyata.',
    architecture: ['Dataset CSV contoh', 'Pembersihan data', 'Statistik deskriptif', 'Visualisasi grafik'],
    challenges: [
      {
        title: 'Data contoh belum rapi',
        resolution: 'Mempraktikkan penanganan nilai kosong dan format yang tidak konsisten.',
      },
      {
        title: 'Memilih visual yang tepat',
        resolution: 'Membandingkan histogram, box plot, dan bar chart untuk distribusi nilai.',
      },
    ],
    result: 'Belum ada hasil analisis final. Grafik contoh akan ditampilkan di sini setelah latihan selesai.',
    repoUrl: '',
    demoUrl: '',
  },
  {
    id: 'landing-page-umkm-lokal',
    name: 'Landing Page UMKM Lokal',
    shortDescription:
      'PLACEHOLDER — Konsep landing page satu halaman untuk profil usaha kecil: katalog singkat dan kontak.',
    category: 'Frontend · Konsep',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
    image: 'storefront',
    status: 'placeholder',
    problem:
      'Banyak usaha kecil belum punya halaman profil digital yang rapi untuk dibagikan ke calon pembeli.',
    goal: 'Menyusun template landing page ringan: hero, katalog singkat, testimoni, dan tombol kontak.',
    solution:
      'Rancangan layout responsif dengan section katalog dan tautan pesan. Status saat ini: konsep desain — belum ada klien maupun situs live.',
    architecture: ['Hero & profil usaha', 'Katalog produk', 'Testimoni', 'Kontak / lokasi'],
    challenges: [
      {
        title: 'Aset foto produk',
        resolution: 'Menyiapkan panduan foto sederhana agar katalog terlihat konsisten meski diambil dengan HP.',
      },
      {
        title: 'Performa di HP',
        resolution: 'Menargetkan ukuran halaman kecil dan tanpa dependensi berat.',
      },
    ],
    result: 'Belum ada situs live. Tautan demo akan ditambahkan setelah implementasi pertama selesai.',
    repoUrl: '',
    demoUrl: '',
  },
  {
    id: 'mini-game-edukasi-logika',
    name: 'Mini-Game Edukasi Logika',
    shortDescription:
      'PLACEHOLDER — Ide game browser sederhana untuk melatih logika dasar lewat puzzle berlevel.',
    category: 'Game · Ide',
    technologies: ['JavaScript', 'Canvas'],
    image: 'gamepad',
    status: 'placeholder',
    problem: 'Belajar logika pemrograman terasa abstrak tanpa media latihan yang menyenangkan.',
    goal: 'Mengeksplorasi pembuatan puzzle berlevel: aturan main jelas, skor, dan umpan balik instan.',
    solution:
      'Dokumen ide dan sketsa alur level. Status saat ini: ide — belum ada playable build.',
    architecture: ['Loop permainan', 'Manajemen level', 'Skor & nyawa', 'Umpan balik visual'],
    challenges: [
      {
        title: 'Keseimbangan kesulitan',
        resolution: 'Merancang kurva level dari mudah ke menantang dengan playtest mandiri.',
      },
    ],
    result: 'Belum ada build yang bisa dimainkan. Halaman ini akan diperbarui saat prototipe pertama ada.',
    repoUrl: '',
    demoUrl: '',
  },
]

export function getProjectById(id) {
  return projects.find((p) => p.id === id)
}
