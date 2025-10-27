<script setup lang="ts">
import Breadcrumb from "~/components/sections/Breadcrumb.vue";
import CtaSectionTwo from "~/components/sections/CtaSectionTwo.vue";
import RegistrationSection from "~/components/sections/RegistrationSection.vue";

const menus = [
  {
    label: 'Register',
    link: ''
  }
];
</script>

<template>
  <!-- Breadcrumb Wrapper Start -->
  <Breadcrumb title="Register" :menus="menus" />
  <!-- Breadcrumb Wrapper End -->

  <!-- Authentication Wrap Start -->
  <RegistrationSection />
  <!-- Authentication Wrap End -->

  <!-- CTA Wrapper Start -->
  <CtaSectionTwo />
  <!-- CTA Wrapper End -->
</template>

<style scoped>

</style>