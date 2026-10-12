<!-- Detail proyek: dialog global untuk panel Tentang/Portofolio/Kontak -->
<template>
  <Teleport to="body">
    <Transition name="page">
      <div
        v-if="panel"
        class="backdrop"
        role="dialog"
        aria-modal="true"
        aria-label="Detail panel"
        @click.self="close"
      >
        <div class="dialog">
          <div class="flex items-center justify-between">
            <span class="pill blush">✿ catatan kecil</span>
            <button
              class="sticker-btn"
              type="button"
              aria-label="Tutup dialog"
              @click="close"
            >
              ✕
            </button>
          </div>
          <h2 class="display mt-4 text-3xl">{{ panel.title }}</h2>
          <div
            class="mt-3 space-y-3 text-sm leading-relaxed"
            v-html="panel.body"
          ></div>
          <button
            type="button"
            class="btn dark mt-6 !px-5 !py-2.5 !text-sm"
            @click="close"
          >
            Oke, tutup ✕
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { usePanelDialog } from "../composables/usePanelDialog";

const { panel, close } = usePanelDialog();
</script>
