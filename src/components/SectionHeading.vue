<template>
  <div>
    <p
      v-if="eyebrow"
      class="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-500/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.22em] text-lilac uppercase"
    >
      <span class="h-1.5 w-1.5 rounded-full bg-violet-400" />
      {{ eyebrow }}
    </p>
    <h1 class="font-display text-4xl font-bold text-white sm:text-5xl" :class="alignClass">
      {{ title }}
    </h1>
    <p v-if="description" class="mt-4 max-w-2xl text-base leading-relaxed text-fog sm:text-lg" :class="descriptionAlign">
      {{ description }}
    </p>
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  description: { type: String, default: '' },
  align: { type: String, default: 'left' },
})

const alignClass = computed(() => (props.align === 'center' ? 'text-center' : 'text-left'))
const descriptionAlign = computed(() => (props.align === 'center' ? 'mx-auto text-center' : 'text-left'))
</script>
