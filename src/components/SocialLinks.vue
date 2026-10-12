<template>
  <div class="flex items-center gap-3">
    <a
      v-for="link in visibleLinks"
      :key="link.label"
      :href="link.href"
      :aria-label="link.aria"
      :title="link.available ? link.label : `${link.label} (segera hadir)`"
      :class="[
        'flex h-11 w-11 items-center justify-center rounded-full border transition',
        link.available
          ? 'border-violet-300/25 bg-violet-500/10 text-lilac hover:border-violet-300/60 hover:bg-violet-500/25 hover:text-white'
          : 'cursor-not-allowed border-white/10 bg-white/5 text-fog/50',
      ]"
      v-bind="link.available ? { target: '_blank', rel: 'noopener' } : { 'aria-disabled': 'true', tabindex: '0' }"
      @click="handlePlaceholderClick($event, link)"
    >
      <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path :d="link.icon" />
      </svg>
    </a>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  // Isi dengan URL asli saat tersedia. String kosong = placeholder "segera hadir",
  // bukan tautan fiktif — ikon tidak mengarah ke akun yang tidak ada.
  email: { type: String, default: '' },
  github: { type: String, default: '' },
  linkedin: { type: String, default: '' },
  instagram: { type: String, default: '' },
})

const emit = defineEmits(['placeholder-click'])

const links = computed(() => [
  {
    label: 'Email',
    aria: props.email ? 'Kirim email ke Dea' : 'Email segera hadir',
    href: props.email ? `mailto:${props.email}` : '#',
    available: Boolean(props.email),
    icon: 'M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z',
  },
  {
    label: 'GitHub',
    aria: props.github ? 'GitHub Dea (tab baru)' : 'GitHub segera hadir',
    href: props.github || '#',
    available: Boolean(props.github),
    icon: 'M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.93c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z',
  },
  {
    label: 'LinkedIn',
    aria: props.linkedin ? 'LinkedIn Dea (tab baru)' : 'LinkedIn segera hadir',
    href: props.linkedin || '#',
    available: Boolean(props.linkedin),
    icon: 'M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.4v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45Z',
  },
  {
    label: 'Instagram',
    aria: props.instagram ? 'Instagram Dea (tab baru)' : 'Instagram segera hadir',
    href: props.instagram || '#',
    available: Boolean(props.instagram),
    icon: 'M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.69-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16Zm0 3.68a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-10.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z',
  },
])

const visibleLinks = computed(() => links.value)

function handlePlaceholderClick(event, link) {
  if (!link.available) {
    event.preventDefault()
    emit('placeholder-click', link.label)
  }
}
</script>
