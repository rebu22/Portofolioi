<template>
  <!-- Latar ambient violet berlapis: glow + grid halus + vignette -->
  <div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    <div
      class="animate-drift absolute -top-40 left-1/2 h-[34rem] w-[54rem] -translate-x-1/2 rounded-full bg-violet-700/25 blur-[130px]"
    />
    <div class="absolute top-1/3 -left-40 h-[26rem] w-[26rem] rounded-full bg-fuchsia-600/15 blur-[110px]" />
    <div class="absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-indigo-600/20 blur-[120px]" />
    <div
      class="absolute inset-0 opacity-[0.14]"
      :style="{
        backgroundImage:
          'linear-gradient(rgba(167,139,250,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.35) 1px, transparent 1px)',
        backgroundSize: '56px 56px',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 75%)',
      }"
    />
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_110%,transparent_40%,rgba(7,4,13,0.9)_100%)]" />
  </div>
</template>

<script setup>
// Latar ambient bersama — tanpa props, murni dekoratif.
</script>
