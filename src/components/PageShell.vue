<!-- Halaman section: heading stiker + konten -->
<template>
  <div class="wrap py-12 sm:py-16">
    <SectionHeading
      :eyebrow="eyebrow"
      :title="title"
      :description="description"
    />
    <div class="mt-8">
      <slot />
    </div>
  </div>
</template>

<script setup>
import SectionHeading from "./SectionHeading.vue";

defineProps({
  eyebrow: { type: String, default: "" },
  title: { type: String, required: true },
  description: { type: String, default: "" },
});
</script>
