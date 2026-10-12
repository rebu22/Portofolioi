<!-- Panel info beranda: kartu stiker miring + link -->
<template>
  <section class="card p-6" :class="tilt">
    <span class="tag" :class="tagClass">{{ eyebrow }}</span>
    <h2 class="display mt-3 text-2xl">{{ title }}</h2>
    <p class="mt-2 text-sm leading-relaxed">{{ text }}</p>
    <button
      v-if="dialogName"
      class="link-arrow mt-4"
      type="button"
      @click="open($event)"
    >
      {{ linkLabel }} →
    </button>
    <RouterLink
      v-else-if="linkTo"
      class="link-arrow mt-4 inline-block"
      :to="linkTo"
    >
      {{ linkLabel }} →
    </RouterLink>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { usePanelDialog } from "../composables/usePanelDialog";

const props = defineProps({
  eyebrow: { type: String, default: "catatan" },
  title: { type: String, required: true },
  text: { type: String, default: "" },
  linkLabel: { type: String, default: "" },
  linkTo: { type: String, default: "" },
  dialogName: { type: String, default: "" },
  tilt: { type: String, default: "tilt-l" },
  tagClass: { type: String, default: "" },
});

const tilt = computed(() => props.tilt);
const { openPanel } = usePanelDialog();
function open(e) {
  openPanel(props.dialogName, e.currentTarget);
}
</script>
