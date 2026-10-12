<!-- Foto profil: polaroid + selotip, contain agar wajah utuh tidak gepeng -->
<template>
  <figure class="polaroid">
    <span class="tape" aria-hidden="true"></span>
    <img :src="photo" alt="Foto profil Dea Cinta Ramadani" />
  </figure>
</template>

<script setup>
import photo from "../assets/photo-profil.png";
</script>
