<script setup lang="ts">
import Breadcrumb from "~/components/sections/Breadcrumb.vue";
import ServiceSectionThree from "~/components/sections/ServiceSectionThree.vue";
import AboutUsSectionThree from "~/components/sections/AboutUsSectionThree.vue";
import PriceTableSectionOne from "~/components/sections/PriceTableSectionOne.vue";
import CtaSectionTwo from "~/components/sections/CtaSectionTwo.vue";
import ServicesSectionOne from "~/components/sections/ServicesSectionOne.vue";
import ServicesSectionTwo from "~/components/sections/ServicesSectionTwo.vue";

const menus = [
  {
    label: 'Services',
    link: ''
  }
];
</script>

<template>
  <!-- Breadcrumb Wrapper Start -->
  <Breadcrumb title="Services" :menus="menus" />
  <!-- Breadcrumb Wrapper End -->

  <!-- Service Wrapper Start -->
  <ServicesSectionTwo />
  <!-- Service Wrapper End -->

  <!-- About Us Start -->
  <AboutUsSectionThree />
  <!-- About Us End -->
  <!-- Price Table End -->

  <!-- CTA Wrapper Start -->
  <CtaSectionTwo />
  <!-- CTA Wrapper End -->
</template>

<style scoped>

</style>