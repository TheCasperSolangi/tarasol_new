<script setup lang="ts">
import Breadcrumb from "~/components/sections/Breadcrumb.vue";
import BlogDetailsSection from "~/components/sections/BlogDetailsSection.vue";
import CtaSectionTwo from "~/components/sections/CtaSectionTwo.vue";

const menus = [
  {
    label: 'Blog',
    link: '/blog'
  },
  {
    label: 'Blog Details',
    link: ''
  },
];
</script>

<template>
  <!-- Breadcrumb Wrapper Start -->
  <Breadcrumb title="Blog Details" :menus="menus" />
  <!-- Breadcrumb Wrapper End -->

  <!-- Blog Wrapper STart -->
  <BlogDetailsSection />
  <!-- Blog Wrapper End -->

  <!-- CTA Wrapper Start -->
  <CtaSectionTwo />
  <!-- CTA Wrapper End -->
</template>

<style scoped>

</style>