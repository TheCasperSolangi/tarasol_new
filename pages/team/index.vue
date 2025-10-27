<script setup lang="ts">
import Breadcrumb from "~/components/sections/Breadcrumb.vue";
import TeamMemberSectionTwo from "~/components/sections/TeamMemberSectionTwo.vue";
import CategorySlideSection from "~/components/sections/CategorySlideSection.vue";
import TestimonialSectionTwo from "~/components/sections/TestimonialSectionTwo.vue";
import CtaSectionTwo from "~/components/sections/CtaSectionTwo.vue";

const menus = [
  {
    label: 'Team',
    link: ''
  }
];
</script>

<template>
  <!-- Breadcrumb Wrapper Start -->
  <Breadcrumb title="Team" :menus="menus" />
  <!-- Breadcrumb Wrapper End -->

  <!-- Team Member Start -->
  <TeamMemberSectionTwo />
  <!-- Team Member End -->

  <!-- Category Slide Start -->
  <CategorySlideSection />
  <!-- Category Slide End -->

  <!-- Testimonial Start -->
  <TestimonialSectionTwo />
  <!-- Testimonial End -->

  <!-- CTA Wrapper Start -->
  <CtaSectionTwo />
  <!-- CTA Wrapper End -->
</template>

<style scoped>

</style>