<template>
  <div class="max-w-2xl">
    <p v-if="eyebrow" class="pill sun">{{ eyebrow }}</p>
    <h2 class="display mt-4 text-4xl sm:text-5xl" style="color: var(--ink)">
      {{ title }}
    </h2>
    <p
      v-if="description"
      class="mt-4 max-w-xl leading-relaxed"
      style="color: var(--muted)"
    >
      {{ description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  eyebrow: { type: String, default: "" },
  title: { type: String, required: true },
  description: { type: String, default: "" },
});
</script>
