<script setup lang="ts">
import Breadcrumb from "~/components/sections/Breadcrumb.vue";
import PortfolioSection from "~/components/sections/PortfolioSection.vue";
import CtaSectionTwo from "~/components/sections/CtaSectionTwo.vue";

const menus = [
  {
    label: 'Portfolio',
    link: ''
  }
];
</script>

<template>
  <!-- Breadcrumb Wrapper Start -->
  <Breadcrumb title="Portfolio" :menus="menus" />
  <!-- Breadcrumb Wrapper End -->

  <!-- Portfolio Wrapper Start -->
  <PortfolioSection />
  <!-- Portfolio Wrapper End -->

  <!-- CTA Wrapper Start -->
  <CtaSectionTwo />
  <!-- CTA Wrapper End -->
</template>

<style scoped>

</style>