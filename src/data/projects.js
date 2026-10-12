// Data studi kasus proyek: latar belakang, analisis, arsitektur, teknologi,
// tantangan, dan solusi yang diimplementasikan.
import portfolioThumb from "../assets/project-portfolio.svg";
import emptyThumb from "../assets/empty.svg";

export const projects = [
  {
    id: "website-portfolio",
    title: "Website Portofolio Pribadi",
    summary:
      "Platform portofolio digital berbasis Vue 3: pusat dokumentasi proyek, analisis sistem, dan identitas profesional.",
    description:
      "Website portofolio pribadi yang dikembangkan sebagai pusat informasi terpadu: memuat profil profesional, dokumentasi studi kasus proyek, serta analisis sistem yang terstruktur. Dibangun dengan Vue 3 Composition API, Vue Router, dan Tailwind CSS dengan pendekatan minimalist single-page yang bersih, responsif, dan berpusat pada pengguna.",
    problem:
      "CV konvensional memiliki keterbatasan ruang untuk menjelaskan detail kompleks proyek seperti arsitektur sistem, pemilihan tech stack, dan tantangan yang diselesaikan. Diperlukan media yang mampu menyajikan bukti nyata kompetensi secara komprehensif.",
    goal: "Menghadirkan platform portofolio yang responsif, terstruktur, dan mudah dikembangkan — menampilkan studi kasus lengkap dari latar belakang masalah hingga solusi, sekaligus memperkuat personal branding profesional di bidang teknologi.",
    tech: ["Vue 3", "Vue Router", "Tailwind CSS", "Vite"],
    category: "Pengembangan Web",
    image: portfolioThumb,
    challenges: [
      {
        title: "Penyajian konten yang padat namun tetap mudah dinavigasi",
        solution:
          "Struktur single-page yang dikelompokkan ke dalam kartu tematik (konteks, masalah, solusi, tujuan) dengan navigasi hash-based routing agar seluruh halaman dapat diakses cepat di hosting statis.",
      },
      {
        title: "Menjaga performa dan aksesibilitas di berbagai perangkat",
        solution:
          "Menerapkan standar web modern: build statis yang ringan, lazy-loading aset, desain responsif mobile-first, dan label aksesibilitas pada seluruh elemen interaktif.",
      },
    ],
  },
  {
    id: "analisis-sistem-akademik",
    title: "Analisis Sistem Informasi Akademik",
    summary:
      "Studi kasus pemodelan sistem: analisis kebutuhan, DFD, dan rancangan arsitektur untuk layanan akademik.",
    description:
      "Studi kasus analisis dan pemodelan sistem informasi akademik: mencakup identifikasi kebutuhan pengguna, pemodelan aliran data (DFD), serta rancangan arsitektur dan pemilihan teknologi yang tepat guna.",
    problem: "Proses layanan akademik yang manual membutuhkan analisis alur sistem yang sistematis sebelum diimplementasikan ke dalam aplikasi.",
    goal: "Menghasilkan dokumentasi analisis sistem yang komprehensif sebagai fondasi pengembangan aplikasi yang fungsional dan efisien.",
    tech: ["Analisis Sistem", "DFD", "Perancangan Arsitektur"],
    category: "Analisis Sistem",
    image: emptyThumb,
    empty: true,
  },
  {
    id: "desain-antarmuka-aplikasi",
    title: "Desain Antarmuka Aplikasi",
    summary:
      "Studi kasus UI/UX: perancangan antarmuka yang bersih, konsisten, dan berorientasi pada pengalaman pengguna.",
    description:
      "Studi kasus perancangan antarmuka aplikasi dengan prinsip user-centric: riset kebutuhan pengguna, penyusunan hierarki informasi, serta implementasi desain yang konsisten dan aksesibel.",
    problem: "Antarmuka yang kompleks menyulitkan pengguna menemukan informasi inti dalam waktu singkat.",
    goal: "Menghasilkan desain antarmuka yang minimalis, responsif, dan mudah digunakan di berbagai perangkat.",
    tech: ["UI/UX", "Desain Responsif", "Aksesibilitas"],
    category: "UI/UX",
    image: emptyThumb,
    empty: true,
  },
];

export function getProject(id) {
  return projects.find((p) => p.id === id);
}
