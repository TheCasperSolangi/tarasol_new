<script setup lang="ts">
import Breadcrumb from "~/components/sections/Breadcrumb.vue";
import PortfolioDetailsSection from "~/components/sections/PortfolioDetailsSection.vue";
import CtaSectionTwo from "~/components/sections/CtaSectionTwo.vue";

const menus = [
  {
    label: 'Portfolio',
    link: '/portfolio'
  },
  {
    label: 'Portfolio Details',
    link: ''
  },
];
</script>

<template>
  <!-- Breadcrumb Wrapper Start -->
  <Breadcrumb title="Portfolio Details" :menus="menus" />
  <!-- Breadcrumb Wrapper End -->

  <!-- Portfolio Details Wrapper Start -->
  <PortfolioDetailsSection />
  <!-- Portfolio Details Wrapper End -->

  <!-- CTA Wrapper Start-->
  <CtaSectionTwo />
  <!-- CTA Wrapper End-->
</template>

<style scoped>

</style>