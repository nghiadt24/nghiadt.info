<script setup>
import HeroSection from './HeroSection.vue'
import NavBar from './NavBar.vue'
import AboutSection from './AboutSection.vue'
import GallerySection from './GallerySection.vue'
import './scss/color.scss'
</script>

<template>
  <header></header>

  <main>
    <NavBar />
    <HeroSection />
    <AboutSection />
    <GallerySection />
  </main>
</template>

<style lang="scss" type="text/scss" scoped>
@import './scss/color.scss';
@import './scss/layout.scss';
@import './scss/components.scss';
</style>
