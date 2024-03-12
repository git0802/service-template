<template>
  <div class="leading-normal tracking-normal text-white gradient">
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/default/Header.vue';
import Footer from '@/components/default/Footer.vue';
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.gradient {
  /* background: linear-gradient(90deg, #6200ee 0%, #03dac5 100%);  */
  /* background: linear-gradient(90deg, #d53369 0%, #daae51 100%); */
  background: white;
}
</style>
