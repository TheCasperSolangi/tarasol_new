<script setup lang="ts">
import Breadcrumb from "~/components/sections/Breadcrumb.vue";
import ErrorContent from "~/components/sections/ErrorContent.vue";
import CtaSectionTwo from "~/components/sections/CtaSectionTwo.vue";

const menus = [
  {
    label: 'Error',
    link: ''
  }
];
</script>

<template>
  <!-- Breadcrumb Wrapper Start -->
  <Breadcrumb title="Error" :menus="menus" />
  <!-- Breadcrumb Wrapper End -->

  <!-- Error Content Start -->
  <ErrorContent />
  <!-- Error Content End -->

  <!-- CTA Wrapper Start -->
  <CtaSectionTwo />
  <!-- CTA Wrapper End -->
</template>

<style scoped>

</style>