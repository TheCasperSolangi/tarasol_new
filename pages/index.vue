<script setup lang="ts">

import HeroSectionOne from "~/components/sections/HeroSectionOne.vue";
import CtaSectionOne from "~/components/sections/CtaSectionOne.vue";
import ServicesSectionOne from "~/components/sections/ServicesSectionOne.vue";
import AboutUsSectionOne from "~/components/sections/AboutUsSectionOne.vue";
import OurProjectsSectionOne from "~/components/sections/OurProjectsSectionOne.vue";
import WorkProcessSectionOne from "~/components/sections/WorkProcessSectionOne.vue";
import PopupVideoSectionOne from "~/components/sections/PopupVideoSectionOne.vue";
import AwardsHonorsSectionOne from "~/components/sections/AwardsHonorsSectionOne.vue";
import TestimonialContactSectionOne from "~/components/sections/TestimonialContactSectionOne.vue";
import BlogSectionOne from "~/components/sections/BlogSectionOne.vue";
import CtaSectionTwo from "~/components/sections/CtaSectionTwo.vue";

useHead({
  title: 'Tara Solutions - Digital Transformation and IT Services',
})
</script>

<template>
  <!-- Hero Wrapper Start-->
  <HeroSectionOne />
  <!-- Hero Wrapper End-->

  <!-- CTA Wrapper Start-->
  <CtaSectionOne />
  <!-- CTA Wrapper End-->

  <!-- Services Wrapper Start -->
  <ServicesSectionOne />
  <!-- Services Wrapper End -->

  <!-- About Us Start -->
  <AboutUsSectionOne />
  <!-- About Us End -->


  <!-- Our Projects End -->

  <!-- Work Process Wrapper Start -->
  <WorkProcessSectionOne />
  <!-- Work Process Wrapper End -->

  <!-- Popup Video Container Start -->
  <PopupVideoSectionOne />
  <!-- Popup Video Container End -->

  <!-- Awards & Honors Start-->
  <AwardsHonorsSectionOne />
  <!-- Awards & Honors End-->

  <!-- Testimonial & Contact Start -->
  <TestimonialContactSectionOne />
  <!-- Testimonial & Contact End -->


  <!-- Blog Wrapper End -->

  <!-- CTA Wrapper Start -->
  <CtaSectionTwo />
  <!-- CTA Wrapper End -->
</template>

<style scoped>

</style>