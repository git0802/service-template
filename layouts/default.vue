<template>
  <div class="leading-normal tracking-normal text-white gradient">
    <Header />
    <Hero />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/default/Header.vue';
import Footer from '@/components/default/Footer.vue';
import Hero from '@/components/default/Hero';
</script>

<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.gradient {
  background: white;
}
</style>
