<!-- Kartu karya: yang berisi link ke detail, slot kosong hanya pajangan (div, tidak bisa diklik) -->
<template>
  <RouterLink
    v-if="!project.empty"
    :to="`/portfolio/${project.id}`"
    class="card group flex flex-col overflow-hidden transition-transform hover:-translate-y-1 hover:rotate-0 tilt-l"
  >
    <div
      class="relative m-3 mb-0 overflow-hidden rounded-2xl border-[2.5px] border-[#33202f]"
      style="background: #ffeed6"
    >
      <img
        :src="project.image"
        :alt="`Thumbnail ${project.title}`"
        class="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <span class="tag sun absolute left-3 top-3">
        {{ project.category }}
      </span>
    </div>
    <div class="flex flex-1 flex-col p-5">
      <h3 class="display text-xl leading-tight">{{ project.title }}</h3>
      <p class="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed">
        {{ project.summary }}
      </p>
      <div class="mt-3 flex flex-wrap gap-2">
        <span
          v-for="tech in project.tech.slice(0, 3)"
          :key="tech"
          class="tag grape"
        >
          {{ tech }}
        </span>
      </div>
      <span class="link-arrow mt-4">LIHAT DETAIL →</span>
    </div>
  </RouterLink>

  <div v-else class="card tilt-r flex flex-col overflow-hidden opacity-90">
    <div
      class="relative m-3 mb-0 overflow-hidden rounded-2xl border-[2.5px] border-dashed border-[#33202f]"
      style="background: #ffeed6"
    >
      <img
        :src="project.image"
        :alt="`Slot kosong: ${project.title}`"
        class="aspect-[4/3] w-full object-cover"
        loading="lazy"
      />
      <span class="tag mint absolute left-3 top-3">
        {{ project.category }}
      </span>
    </div>
    <div class="flex flex-1 flex-col p-5">
      <h3 class="display text-xl leading-tight">{{ project.title }}</h3>
      <p class="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed">
        {{ project.summary }}
      </p>
      <div class="mt-3 flex flex-wrap gap-2">
        <span v-for="tech in project.tech.slice(0, 3)" :key="tech" class="tag">
          {{ tech }}
        </span>
      </div>
      <span
        class="mt-4 inline-block text-xs font-black uppercase tracking-widest opacity-60"
        >segera hadir</span
      >
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: { type: Object, required: true },
});
</script>
