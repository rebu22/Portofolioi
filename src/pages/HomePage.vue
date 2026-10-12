<!-- BERANDA: hero + profil + panel + kompetensi -->
<template>
  <div>
    <div
      class="wrap grid gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start"
    >
      <HeroSection />
      <ProfileImage />
    </div>
    <div id="home-panels" class="wrap grid gap-6 pb-4 md:grid-cols-2">
      <InfoPanel
        eyebrow="profil"
        title="Tentang Saya"
        text="Mahasiswi Informatika ITK angkatan 2024 dengan minat pada rekayasa perangkat lunak, analisis dan pemodelan sistem, serta pengembangan web modern yang mengutamakan performa dan aksesibilitas."
        link-label="SELENGKAPNYA"
        dialog-name="Tentang"
        tilt="tilt-l"
        tag-class="sun"
      />
      <InfoPanel
        eyebrow="portofolio"
        title="Karya Terpilih"
        text="Dokumentasi studi kasus proyek: latar belakang masalah, alur sistem, pemilihan tech stack, tantangan, dan solusi yang diimplementasikan."
        link-label="LIHAT PORTOFOLIO"
        link-to="/portfolio"
        tilt="tilt-r"
        tag-class="mint"
      />
    </div>
    <div class="wrap grid gap-6 pb-14 md:grid-cols-2">
      <StickerWall />
      <section class="card tilt-l p-6" aria-label="Ikuti saya">
        <span class="tag grape">media sosial</span>
        <h2 class="display mt-3 text-2xl">Terhubung Dengan Saya</h2>
        <p class="mt-2 text-sm leading-relaxed">
          Ikuti dan hubungi saya melalui platform profesional berikut.
        </p>
        <SocialLinks class="mt-4" />
      </section>
    </div>
  </div>
</template>

<script setup>
import HeroSection from "../components/HeroSection.vue";
import ProfileImage from "../components/ProfileImage.vue";
import InfoPanel from "../components/InfoPanel.vue";
import SocialLinks from "../components/SocialLinks.vue";
import StickerWall from "../components/StickerWall.vue";
</script>
