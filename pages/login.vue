<script setup lang="ts">
import Breadcrumb from "~/components/sections/Breadcrumb.vue";
import LoginSection from "~/components/sections/LoginSection.vue";
import CtaSectionTwo from "~/components/sections/CtaSectionTwo.vue";

const menus = [
  {
    label: 'Login',
    link: ''
  }
];
</script>

<template>
  <!-- Breadcrumb Wrapper Start -->
  <Breadcrumb title="Login" :menus="menus" />
  <!-- Breadcrumb Wrapper End -->

  <!-- Authentication Wrap Start -->
  <LoginSection />
  <!-- Authentication Wrap Start -->

  <!-- CTA Wrapper Start -->
  <CtaSectionTwo />
  <!-- CTA Wrapper End -->
</template>

<style scoped>

</style>