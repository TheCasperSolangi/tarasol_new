<script setup lang="ts">
import Breadcrumb from "~/components/sections/Breadcrumb.vue";
import CtaSectionTwo from "~/components/sections/CtaSectionTwo.vue";
import FaqSectionTwo from "~/components/sections/FaqSectionTwo.vue";

const menus = [
  {
    label: 'FAQs',
    link: ''
  }
];
</script>

<template>
  <!-- Breadcrumb Wrapper Start -->
  <Breadcrumb title="FAQs" :menus="menus" />
  <!-- Breadcrumb Wrapper End -->

  <!-- FAQ Wrapper Start -->
  <FaqSectionTwo />
  <!-- FAQ Wrapper End -->

  <!-- CTA Wrapper Start -->
  <CtaSectionTwo />
  <!-- CTA Wrapper End -->
</template>

<style scoped>

</style>