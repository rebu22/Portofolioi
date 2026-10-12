<template>
  <div class="relative mx-auto w-full max-w-sm" :class="frameClass">
    <div
      class="absolute -inset-4 rounded-[2.2rem] bg-gradient-to-br from-violet-600/40 via-fuchsia-500/20 to-indigo-600/30 blur-2xl"
      aria-hidden="true"
    />
    <div
      class="glass-panel relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_-20px_rgba(139,92,246,0.55)]"
    >
      <!-- Foto profil: ilustrasi avatar SVG (placeholder relevan).
           Ganti <svg> dengan <img src="../assets/dea-photo.jpg" ...> saat foto asli tersedia. -->
      <svg viewBox="0 0 400 480" class="block h-auto w-full" role="img" :aria-label="alt">
        <defs>
          <linearGradient id="dcr-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#2b1658" />
            <stop offset="0.55" stop-color="#150b2e" />
            <stop offset="1" stop-color="#0b0714" />
          </linearGradient>
          <radialGradient id="dcr-glow" cx="0.5" cy="0.35" r="0.65">
            <stop offset="0" stop-color="#8b5cf6" stop-opacity="0.55" />
            <stop offset="1" stop-color="#8b5cf6" stop-opacity="0" />
          </radialGradient>
          <linearGradient id="dcr-hijab" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#4c1d95" />
            <stop offset="1" stop-color="#241040" />
          </linearGradient>
        </defs>
        <rect width="400" height="480" fill="url(#dcr-bg)" />
        <rect width="400" height="480" fill="url(#dcr-glow)" />
        <circle cx="70" cy="90" r="2.5" fill="#a78bfa" opacity="0.8" />
        <circle cx="330" cy="70" r="2" fill="#e9d5ff" opacity="0.7" />
        <circle cx="300" cy="390" r="3" fill="#a78bfa" opacity="0.5" />
        <circle cx="95" cy="360" r="2" fill="#e9d5ff" opacity="0.5" />
        <!-- Siluet avatar berhijab -->
        <ellipse cx="200" cy="300" rx="118" ry="150" fill="url(#dcr-hijab)" />
        <ellipse cx="200" cy="245" rx="78" ry="88" fill="#f3d9c8" />
        <path
          d="M122 250 C118 150 155 105 200 105 C245 105 282 150 278 250 C278 200 255 150 200 150 C145 150 122 200 122 250 Z"
          fill="url(#dcr-hijab)"
        />
        <ellipse cx="200" cy="245" rx="62" ry="70" fill="#f7e3d3" />
        <circle cx="178" cy="245" r="5" fill="#241040" />
        <circle cx="222" cy="245" r="5" fill="#241040" />
        <path d="M186 272 Q200 282 214 272" stroke="#9a5b4f" stroke-width="4" fill="none" stroke-linecap="round" />
        <path d="M120 430 C130 360 160 330 200 330 C240 330 270 360 280 430 Z" fill="#3b1470" />
        <path d="M120 430 C130 360 160 330 200 330 L200 430 Z" fill="#4c1d95" opacity="0.6" />
        <!-- Badge -->
        <g>
          <rect x="36" y="392" width="150" height="52" rx="14" fill="#0b0714" opacity="0.78" />
          <rect x="36" y="392" width="150" height="52" rx="14" fill="none" stroke="#8b5cf6" stroke-opacity="0.5" />
          <circle cx="60" cy="418" r="12" fill="#8b5cf6" />
          <path d="M54 418l4 4 8-8" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round" />
          <text x="80" y="414" fill="#f5f3ff" font-size="13" font-weight="700" font-family="sans-serif">Dea Cinta R.</text>
          <text x="80" y="431" fill="#c4bdd4" font-size="11" font-family="sans-serif">Informatika · ITK</text>
        </g>
      </svg>
      <div
        class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#07040d] to-transparent"
        aria-hidden="true"
      />
    </div>
    <div
      class="animate-floaty absolute -right-3 -bottom-4 hidden items-center gap-2 rounded-2xl border border-violet-300/25 bg-ink/90 px-4 py-3 shadow-xl sm:flex"
      aria-hidden="true"
    >
      <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600/25 text-lg">🎓</span>
      <span class="text-left text-xs leading-tight text-fog">
        <strong class="block text-sm text-white">ITK · 2024</strong>
        Informatika Student
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  alt: { type: String, default: 'Ilustrasi profil Dea Cinta Ramadani' },
  frameClass: { type: String, default: '' },
})
</script>
