<!-- SKILL: kompetensi yang dipelajari + penerapannya di portofolio -->
<template>
  <PageShell
    class="skill-shell"
    eyebrow="skill"
    title="Kemampuan yang Saya Kembangkan"
    description="Fokus keilmuan dan keterampilan yang saya pelajari selama studi Informatika di Institut Teknologi Kalimantan, serta penerapannya dalam pengembangan portofolio ini."
  >
    <div class="grid items-start gap-6 md:grid-cols-2">
      <article v-for="skill in skills" :key="skill.title" class="card skill-card">
        <span class="tag" :class="skill.tone">{{ skill.badge }}</span>
        <h3 class="display skill-title">{{ skill.title }}</h3>
        <p class="skill-desc">{{ skill.desc }}</p>

        <div class="skill-chips">
          <span v-for="tag in skill.tags" :key="tag" class="skill-chip">
            {{ tag }}
          </span>
        </div>

        <p class="skill-note">{{ skill.note }}</p>
      </article>
    </div>

    <section class="card skill-cta" aria-label="Ajakan melihat portofolio">
      <div class="skill-cta-copy">
        <span class="tag mint">terus belajar &amp; berkembang</span>
        <h3 class="display skill-cta-title">Dari Pembelajaran ke Penerapan</h3>
        <p class="skill-cta-desc">
          Kemampuan ini terus saya kembangkan melalui perkuliahan dan proyek.
          Portofolio menjadi ruang untuk menghubungkan teori, proses, dan hasil
          yang dapat dilihat.
        </p>
        <p class="skill-credit">
          Dea Cinta Ramadani · Informatika ITK · Angkatan 2024 · NIM 11241025
        </p>
      </div>

      <div class="skill-cta-actions">
        <RouterLink to="/portfolio" class="btn primary">
          Lihat Portofolio →
        </RouterLink>
        <RouterLink to="/contact" class="link-arrow">HUBUNGI SAYA</RouterLink>
      </div>
    </section>
  </PageShell>
</template>

<script setup>
import PageShell from "../components/PageShell.vue";
import { skills } from "../data/skills.js";
</script>

<style scoped>
.skill-shell {
  padding-top: 48px;
  padding-bottom: 48px;
}

:deep(.section-heading) {
  max-width: 768px;
}

:deep(.section-desc) {
  max-width: 700px;
  font-size: 18px;
  line-height: 1.45;
}

.skill-card {
  padding: 26px 24px 22px;
}

.skill-title {
  margin-top: 12px;
  font-size: 24px;
  line-height: 1;
}

.skill-desc {
  margin-top: 8px;
  font-size: 15px;
  line-height: 1.55;
}

.skill-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 12px;
}

.skill-chip {
  display: inline-block;
  border: 2px solid var(--ink);
  border-radius: 999px;
  background: #fff;
  padding: 5px 13px;
  font-size: 13px;
  font-weight: 900;
  line-height: 1.35;
  box-shadow: 2px 2px 0 var(--ink);
}

.skill-note {
  margin-top: 12px;
  border: 2px solid var(--ink);
  border-radius: 10px;
  background: var(--paper);
  padding: 10px 15px;
  font-size: 15px;
  line-height: 1.5;
}

.skill-cta {
  display: grid;
  gap: 24px;
  margin-top: 30px;
  padding: 24px 28px 36px;
  align-items: center;
}

.skill-cta-title {
  margin-top: 24px;
  font-size: 24px;
  line-height: 1.05;
}

.skill-cta-desc {
  margin-top: 14px;
  max-width: 560px;
  font-size: 15px;
  line-height: 1.3;
}

.skill-credit {
  margin-top: 13px;
  font-size: 12px;
  color: var(--muted);
}

.skill-cta-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding-right: 14px;
}

.skill-cta-actions .btn {
  font-size: 13px;
  padding: 10px 15px;
  white-space: nowrap;
}

@media (min-width: 860px) {
  .skill-cta {
    grid-template-columns: 1fr auto;
  }
}

@media (max-width: 640px) {
  .skill-card {
    padding: 20px;
  }

  .skill-title {
    font-size: 22px;
  }

  .skill-desc {
    font-size: 14px;
  }

  .skill-note {
    font-size: 14px;
  }

  .skill-cta {
    padding: 22px;
  }

  .skill-cta-title {
    font-size: 24px;
  }

  .skill-cta-desc {
    font-size: 14px;
  }

  .skill-cta-actions {
    align-items: flex-start;
    padding-right: 0;
  }
}
</style>
