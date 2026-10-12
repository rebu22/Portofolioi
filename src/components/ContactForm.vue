<template>
  <form class="glass-panel rounded-3xl p-6 sm:p-8" novalidate @submit.prevent="handleSubmit" aria-label="Formulir kontak">
    <div class="grid gap-5 sm:grid-cols-2">
      <div>
        <label for="contact-name" class="mb-1.5 block text-sm font-semibold text-white">
          Nama <span class="text-lilac" aria-hidden="true">*</span>
        </label>
        <input
          id="contact-name"
          v-model.trim="form.name"
          type="text"
          name="name"
          autocomplete="name"
          placeholder="Nama lengkap Anda"
          :aria-invalid="touched.name && errors.name ? 'true' : 'false'"
          :aria-describedby="errors.name && touched.name ? 'contact-name-error' : undefined"
          :class="inputClass(touched.name && errors.name)"
          @blur="touched.name = true"
        />
        <p v-if="touched.name && errors.name" id="contact-name-error" class="mt-1.5 text-sm text-rose-300" role="alert">
          {{ errors.name }}
        </p>
      </div>

      <div>
        <label for="contact-email" class="mb-1.5 block text-sm font-semibold text-white">
          Email <span class="text-lilac" aria-hidden="true">*</span>
        </label>
        <input
          id="contact-email"
          v-model.trim="form.email"
          type="email"
          name="email"
          autocomplete="email"
          placeholder="nama@email.com"
          :aria-invalid="touched.email && errors.email ? 'true' : 'false'"
          :aria-describedby="errors.email && touched.email ? 'contact-email-error' : undefined"
          :class="inputClass(touched.email && errors.email)"
          @blur="touched.email = true"
        />
        <p v-if="touched.email && errors.email" id="contact-email-error" class="mt-1.5 text-sm text-rose-300" role="alert">
          {{ errors.email }}
        </p>
      </div>
    </div>

    <div class="mt-5">
      <label for="contact-message" class="mb-1.5 block text-sm font-semibold text-white">
        Pesan <span class="text-lilac" aria-hidden="true">*</span>
      </label>
      <textarea
        id="contact-message"
        v-model.trim="form.message"
        name="message"
        rows="5"
        placeholder="Tulis pesan, pertanyaan, atau ajakan kolaborasi… (min. 10 karakter)"
        :aria-invalid="touched.message && errors.message ? 'true' : 'false'"
        :aria-describedby="errors.message && touched.message ? 'contact-message-error' : undefined"
        :class="[inputClass(touched.message && errors.message), 'resize-y']"
        @blur="touched.message = true"
      />
      <div class="mt-1.5 flex items-center justify-between">
        <p v-if="touched.message && errors.message" id="contact-message-error" class="text-sm text-rose-300" role="alert">
          {{ errors.message }}
        </p>
        <p class="ml-auto text-xs text-fog">{{ form.message.length }}/500</p>
      </div>
    </div>

    <button
      type="submit"
      :disabled="sending"
      class="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_40px_rgba(139,92,246,0.45)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-56"
    >
      <svg v-if="sending" class="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" opacity="0.25" />
        <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
      </svg>
      <span>{{ sending ? 'Memvalidasi…' : 'Kirim Pesan' }}</span>
    </button>

    <!-- Status pengiriman: jujur — mode demonstrasi karena belum ada backend -->
    <div
      v-if="status"
      class="mt-5 rounded-2xl border px-4 py-3.5 text-sm leading-relaxed"
      :class="
        status.type === 'success'
          ? 'border-emerald-300/30 bg-emerald-500/10 text-emerald-200'
          : 'border-rose-300/30 bg-rose-500/10 text-rose-200'
      "
      role="status"
      aria-live="polite"
    >
      <p class="font-semibold">{{ status.title }}</p>
      <p class="mt-0.5 opacity-90">{{ status.body }}</p>
    </div>
  </form>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'

const form = reactive({ name: '', email: '', message: '' })
const touched = reactive({ name: false, email: false, message: false })
const sending = ref(false)
const status = ref(null)

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const errors = computed(() => {
  const e = {}
  if (form.name.trim().length < 2) e.name = 'Nama wajib diisi (min. 2 karakter).'
  if (!form.email) e.email = 'Email wajib diisi.'
  else if (!EMAIL_RE.test(form.email)) e.email = 'Format email tidak valid. Contoh: nama@email.com.'
  if (form.message.trim().length < 10) e.message = 'Pesan wajib diisi (min. 10 karakter).'
  else if (form.message.length > 500) e.message = 'Pesan maksimal 500 karakter.'
  return e
})

function inputClass(hasError) {
  const base =
    'w-full rounded-2xl border bg-[#0B0714]/80 px-4 py-3 text-sm text-white placeholder:text-fog/50 transition focus:outline-none focus:ring-2'
  return hasError
    ? `${base} border-rose-400/60 focus:border-rose-300 focus:ring-rose-400/30`
    : `${base} border-violet-300/20 focus:border-violet-400 focus:ring-violet-400/30 hover:border-violet-300/40`
}

function handleSubmit() {
  // Tandai semua field agar pesan kesalahan langsung terlihat.
  touched.name = touched.email = touched.message = true
  status.value = null

  if (Object.keys(errors.value).length > 0) {
    status.value = {
      type: 'error',
      title: 'Formulir belum valid.',
      body: 'Periksa kembali kolom bertanda merah, lalu coba kirim lagi.',
    }
    return
  }

  sending.value = true
  // Simulasi jeda pengiriman — TIDAK mengklaim email sungguhan terkirim,
  // karena formulir belum terhubung ke backend / layanan pengiriman nyata.
  setTimeout(() => {
    sending.value = false
    status.value = {
      type: 'success',
      title: 'Pesan lolos validasi (mode demonstrasi).',
      body: 'Belum ada backend, jadi pesan ini hanya tersimpan di browser dan belum terkirim ke mana pun. Hubungkan ke layanan email untuk pengiriman sungguhan.',
    }
    form.name = ''
    form.email = ''
    form.message = ''
    touched.name = touched.email = touched.message = false
  }, 900)
}
</script>
