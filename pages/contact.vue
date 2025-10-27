<script setup lang="ts">
import Breadcrumb from "~/components/sections/Breadcrumb.vue";
import ContactDetailsSection from "~/components/sections/ContactDetailsSection.vue";
import CtaSectionTwo from "~/components/sections/CtaSectionTwo.vue";

const menus = [
  {
    label: 'Contact Us',
    link: ''
  }
];
</script>

<template>
  <!-- Breadcrumb Wrapper Start -->
  <Breadcrumb title="Contact Us" :menus="menus" />
  <!-- Breadcrumb Wrapper End -->

  <!-- Contact Details Wrapper Start -->
  <ContactDetailsSection />
  <!-- Contact Details Wrapper End -->

  <!-- CTA Wrapper Start -->
  <CtaSectionTwo />
  <!-- CTA Wrapper End -->
</template>

<style scoped>

</style>