<script setup lang="ts">
import Breadcrumb from "~/components/sections/Breadcrumb.vue";
import PriceTableSectionOne from "~/components/sections/PriceTableSectionOne.vue";
import FaqSectionOne from "~/components/sections/FaqSectionOne.vue";
import CtaSectionTwo from "~/components/sections/CtaSectionTwo.vue";

const menus = [
  {
    label: 'Pricing Plan',
    link: ''
  }
];
</script>

<template>
  <!-- Breadcrumb Wrapper Start -->
  <Breadcrumb title="Pricing Plan" :menus="menus" />
  <!-- Breadcrumb Wrapper End -->

  <!-- Price Table Start -->
  <PriceTableSectionOne />
  <!-- Price Table End -->

  <!-- FAQ Start -->
  <FaqSectionOne classes="bg-secondary"/>
  <!-- FAQ End -->

  <!-- CTA Wrapper Start -->
  <CtaSectionTwo />
  <!-- CTA Wrapper End -->
</template>

<style scoped>

</style>