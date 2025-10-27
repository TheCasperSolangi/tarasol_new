<script setup lang="ts">
import Breadcrumb from "~/components/sections/Breadcrumb.vue";
import BlogSectionThree from "~/components/sections/BlogSectionThree.vue";
import CtaSectionTwo from "~/components/sections/CtaSectionTwo.vue";

const menus = [
  {
    label: 'Blog',
    link: ''
  },
];
</script>

<template>
  <!-- Breadcrumb Wrapper Start -->
  <Breadcrumb title="Blog" :menus="menus" />
  <!-- Breadcrumb Wrapper End -->

  <!-- Blog Wrapper Start -->
  <BlogSectionThree />
  <!-- Blog Wrapper End -->

  <!-- CTA Wrapper Start -->
  <CtaSectionTwo />
  <!-- CTA Wrapper End -->
</template>

<style scoped>

</style>