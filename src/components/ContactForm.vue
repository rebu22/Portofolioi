<!-- Formulir kontak: validasi + penyimpanan pesan -->
<template>
  <form class="card tilt-l p-6 sm:p-8" novalidate @submit.prevent="onSubmit">
    <span class="tag sun">formulir pesan</span>
    <h3 class="display mt-3 text-2xl">Kirim Pesan</h3>
    <p class="mt-2 text-sm leading-relaxed" style="color: var(--muted)">
      Silakan isi formulir di bawah ini. Pesan Anda akan tersimpan dengan aman
      dan segera ditindaklanjuti.
    </p>
    <div class="mt-6 grid gap-5 sm:grid-cols-2">
      <div class="field">
        <label for="cf-name">Nama Lengkap</label>
        <input
          id="cf-name"
          v-model.trim="form.name"
          type="text"
          autocomplete="name"
          placeholder="Nama Anda"
        />
        <p v-if="errors.name" class="err">{{ errors.name }}</p>
      </div>
      <div class="field">
        <label for="cf-email">Alamat Email</label>
        <input
          id="cf-email"
          v-model.trim="form.email"
          type="email"
          autocomplete="email"
          placeholder="nama@email.com"
        />
        <p v-if="errors.email" class="err">{{ errors.email }}</p>
      </div>
    </div>
    <div class="field mt-5">
      <label for="cf-message">Isi Pesan</label>
      <textarea
        id="cf-message"
        v-model.trim="form.message"
        rows="5"
        placeholder="Tulis pesan Anda (minimal 10 karakter)"
      ></textarea>
      <div class="mt-1.5 flex items-center justify-between">
        <p v-if="errors.message" class="err">{{ errors.message }}</p>
        <p class="ml-auto text-xs font-bold" style="color: var(--muted)">
          {{ form.message.length }}/500
        </p>
      </div>
    </div>
    <button
      type="submit"
      :disabled="sending"
      class="btn primary mt-6 disabled:opacity-60"
    >
      {{ sending ? "Mengirim…" : "Kirim Pesan" }}
    </button>
    <Transition name="page">
      <div
        v-if="status"
        role="status"
        class="card mt-5 !shadow-none px-4 py-3 text-sm font-bold"
        style="background: var(--blush)"
      >
        {{ status.text }}
      </div>
    </Transition>
  </form>
</template>

<script setup>
import { reactive, ref } from "vue";

const form = reactive({ name: "", email: "", message: "" });
const errors = reactive({ name: "", email: "", message: "" });
const status = ref(null);
const sending = ref(false);

function validate() {
  errors.name = form.name.length < 3 ? "Mohon isi nama minimal 3 karakter." : "";
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email)
    ? ""
    : "Format alamat email tidak valid.";
  if (form.message.length < 10) errors.message = "Pesan minimal 10 karakter.";
  else if (form.message.length > 500)
    errors.message = "Pesan maksimal 500 karakter.";
  else errors.message = "";
  return !errors.name && !errors.email && !errors.message;
}

function onSubmit() {
  status.value = null;
  if (!validate()) {
    status.value = { text: "Mohon periksa kembali isian formulir Anda." };
    return;
  }
  sending.value = true;
  setTimeout(() => {
    try {
      const drafts = JSON.parse(localStorage.getItem("contact-drafts") || "[]");
      drafts.push({ ...form, at: new Date().toISOString() });
      localStorage.setItem("contact-drafts", JSON.stringify(drafts));
    } catch {
      /* abaikan jika storage tidak tersedia */
    }
    sending.value = false;
    status.value = {
      text: `Terima kasih, ${form.name}. Pesan Anda telah diterima dan akan segera ditindaklanjuti.`,
    };
    form.name = "";
    form.email = "";
    form.message = "";
  }, 700);
}
</script>
