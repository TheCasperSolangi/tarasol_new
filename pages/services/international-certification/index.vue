<script setup lang="ts">
import Breadcrumb from "~/components/sections/Breadcrumb.vue";
import ServiceDetailsSection from "~/components/sections/ServiceDetailsSection.vue";
import CtaSectionTwo from "~/components/sections/CtaSectionTwo.vue";
import ExecutivePrograms from "~/components/sections/executive-programs.vue";


const menus = [
  {
    label: 'Services',
    link: '/services'
  },
  {
    label: 'International Certifications',
    link: '/services/international-certification'
  },
];
</script>

<template>
  <!-- Breadcrumb Wrapper Start -->
  <Breadcrumb title="Service Details" :menus="menus" />
  <!-- Breadcrumb Wrapper End -->

  <!-- Service Details Wrapper Start -->
  <ServiceDetailsSection />
  <!-- Service Details Wrapper End -->

  <!-- CTA Wrapper Start -->
  <CtaSectionTwo />
  <!-- CTA Wrapper End -->
</template>

<style scoped>

</style>z