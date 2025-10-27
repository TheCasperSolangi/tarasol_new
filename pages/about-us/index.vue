<script setup lang="ts">
import Breadcrumb from "~/components/sections/Breadcrumb.vue";
import AboutUsSectionTwo from "~/components/sections/AboutUsSectionTwo.vue";
import CounterSection from "~/components/sections/CounterSection.vue";
import WorkProcessSectionTwo from "~/components/sections/WorkProcessSectionTwo.vue";
import VideoSection from "~/components/sections/VideoSection.vue";
import TeamMemberSectionOne from "~/components/sections/TeamMemberSectionOne.vue";
import TestimonialSectionTwo from "~/components/sections/TestimonialSectionTwo.vue";
import CtaSectionTwo from "~/components/sections/CtaSectionTwo.vue";
import WorkProcessSectionOne from "~/components/sections/WorkProcessSectionOne.vue";

const menus = [
  {
    label: 'About Us',
    link: ''
  }
];
</script>

<template>
  <!-- Breadcrumb Wrapper Start -->
  <Breadcrumb title="About Us" :menus="menus" />
  <!-- Breadcrumb Wrapper End -->

  <!-- About Us Start -->
  <AboutUsSectionTwo />
  <!-- About Us End -->

  <!-- Counter Wrapper -->
  <div class="cta-video-wrapper">
    <div class="divider"></div>

    <div class="container">
      <CounterSection />
    </div>

    <div class="divider"></div>
  </div>
  <!-- Counter Wrapper -->

  <!-- Process Start -->
  <WorkProcessSectionOne />
  <!-- Process End -->

  <!-- Team Member End -->

  <!-- Testimonial Start -->
  <TestimonialSectionTwo />
  <!-- Testimonial End -->

  <!-- CTA Wrapper Start -->
  <CtaSectionTwo />
  <!-- CTA Wrapper End -->
</template>

<style scoped>

</style>