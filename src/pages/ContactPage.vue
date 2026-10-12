<!-- KONTAK: informasi kontak profesional + formulir pesan -->
<template>
  <PageShell
    eyebrow="kontak"
    title="Hubungi Saya"
    description="Untuk pertanyaan, kolaborasi, atau peluang profesional — silakan hubungi saya melalui informasi berikut atau kirim pesan melalui formulir."
  >
    <div class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <ContactForm />
      <aside class="space-y-6">
        <div class="card tilt-r p-6">
          <span class="tag grape">informasi kontak</span>
          <h3 class="display mt-3 text-2xl">Kontak Profesional</h3>
          <ul class="mt-4 space-y-3 text-sm">
            <li
              class="rounded-2xl border-[2px] border-[#33202f] bg-[#fff6ea] px-4 py-3"
            >
              <strong>Email:</strong>
              <a
                class="link-arrow ml-1 break-all"
                href="mailto:11241025@student.itk.ac.id"
                >11241025@student.itk.ac.id</a
              >
            </li>
            <li
              class="rounded-2xl border-[2px] border-[#33202f] bg-[#fff6ea] px-4 py-3"
            >
              <strong>Domisili:</strong> Kalimantan Timur, Indonesia
            </li>
          </ul>
          <p class="caption-hand mt-4 text-sm">
            Setiap pesan akan dibalas dalam 1–2 hari kerja. Terima kasih atas
            perhatian dan kunjungan Anda.
          </p>
        </div>
        <div class="card tilt-l p-6">
          <span class="tag mint">media sosial</span>
          <h3 class="display mt-3 text-2xl">Profil Media Sosial</h3>
          <SocialLinks class="mt-4" />
          <p class="mt-4 text-xs leading-relaxed" style="color: var(--muted)">
            Terhubung dengan saya melalui platform profesional di atas.
          </p>
        </div>
      </aside>
    </div>
  </PageShell>
</template>

<script setup>
import PageShell from "../components/PageShell.vue";
import ContactForm from "../components/ContactForm.vue";
import SocialLinks from "../components/SocialLinks.vue";
</script>
