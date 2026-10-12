<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-violet-300/10 bg-void/80 backdrop-blur-xl">
    <nav class="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Navigasi utama">
      <RouterLink to="/" class="group flex items-center gap-3" aria-label="Beranda Dea Cinta Ramadani">
        <span
          class="font-display flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-600 text-sm font-bold text-white shadow-[0_0_24px_rgba(139,92,246,0.55)]"
        >
          DR
        </span>
        <span class="leading-tight">
          <span class="font-display block text-sm font-bold tracking-wide text-white">DEA CINTA RAMADANI</span>
          <span class="block text-[11px] tracking-[0.2em] text-fog uppercase">Informatika · ITK '24</span>
        </span>
      </RouterLink>

      <!-- Desktop -->
      <ul class="hidden items-center gap-2 md:flex">
        <li v-for="item in navItems" :key="item.path">
          <RouterLink
            :to="item.path"
            class="rounded-full border border-transparent px-4 py-2 text-sm font-medium text-fog transition hover:border-violet-300/20 hover:text-white"
            active-class="nav-active"
          >
            {{ item.label }}
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/contact"
            class="ml-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(139,92,246,0.45)] transition hover:brightness-110"
          >
            Hubungi Saya
          </RouterLink>
        </li>
      </ul>

      <!-- Tombol hamburger (mobile) -->
      <button
        type="button"
        class="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-violet-300/20 bg-violet-500/10 text-white md:hidden"
        :aria-expanded="open ? 'true' : 'false'"
        aria-controls="mobile-menu"
        aria-label="Buka atau tutup menu navigasi"
        @click="toggle"
      >
        <svg v-if="!open" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16" />
        </svg>
        <svg v-else class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path stroke-linecap="round" d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </nav>

    <!-- Mobile menu -->
    <transition name="page">
      <div v-show="open" id="mobile-menu" class="border-t border-violet-300/10 bg-ink/95 px-5 pt-2 pb-5 backdrop-blur-xl md:hidden">
        <ul class="flex flex-col gap-1">
          <li v-for="item in navItems" :key="item.path">
            <RouterLink
              :to="item.path"
              class="block rounded-xl border border-transparent px-4 py-3 text-base font-medium text-fog transition hover:bg-violet-500/10 hover:text-white"
              active-class="nav-active"
              @click="close"
            >
              {{ item.label }}
            </RouterLink>
          </li>
          <li class="pt-2">
            <RouterLink
              to="/contact"
              class="block rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-3 text-center text-base font-semibold text-white"
              @click="close"
            >
              Hubungi Saya
            </RouterLink>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact', path: '/contact' },
]

const open = ref(false)
const route = useRoute()

function toggle() {
  open.value = !open.value
}
function close() {
  open.value = false
}

// Tutup menu otomatis setiap kali route berganti + kunci scroll saat terbuka.
watch(
  () => route.fullPath,
  () => {
    open.value = false
  },
)
watch(open, (value) => {
  document.body.style.overflow = value ? 'hidden' : ''
})
</script>
