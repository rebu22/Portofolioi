import { ref } from "vue";

// Isi dialog panel: profil, portofolio, dan kontak dalam bahasa formal.
const copy = {
  Tentang: {
    title: "Profil Singkat",
    body: `<p><strong>Dea Cinta Ramadani</strong> — mahasiswi Informatika Institut Teknologi Kalimantan angkatan 2024 (NIM 11241025).</p><p>Fokus keilmuan meliputi rekayasa perangkat lunak, analisis dan pemodelan sistem, serta pengembangan web modern. Website ini merupakan pusat dokumentasi proyek dan representasi identitas profesional di bidang teknologi.</p>`,
  },
  Portofolio: {
    title: "Dokumentasi Karya",
    body: `<p>Portofolio ini memuat studi kasus proyek yang didokumentasikan secara terstruktur: latar belakang masalah, alur sistem, pemilihan teknologi, tantangan, dan solusi yang diimplementasikan.</p><p>Setiap karya mencerminkan penerapan teori Informatika ke dalam produk digital yang fungsional.</p>`,
  },
  Kontak: {
    title: "Informasi Kontak",
    body: `<p>Silakan hubungi saya melalui email <strong>11241025@student.itk.ac.id</strong> atau melalui formulir pesan di halaman Kontak.</p><p>Terima kasih atas kunjungan Anda.</p>`,
  },
};

const panel = ref(null);
let lastTrigger = null;

export function usePanelDialog() {
  function openPanel(name, trigger = null) {
    if (!copy[name]) return;
    lastTrigger = trigger;
    panel.value = copy[name];
  }

  function close() {
    panel.value = null;
    if (lastTrigger && typeof lastTrigger.focus === "function") {
      lastTrigger.focus();
      lastTrigger = null;
    }
  }

  return { panel, openPanel, close };
}
