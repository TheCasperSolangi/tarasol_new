<script setup lang="ts">
import Breadcrumb from "~/components/sections/Breadcrumb.vue";
import TeamMemberDetailsSection from "~/components/sections/TeamMemberDetailsSection.vue";
import TeamMemberSkillsSection from "~/components/sections/TeamMemberSkillsSection.vue";
import ContactFormSectionOne from "~/components/sections/ContactFormSectionOne.vue";
import CtaSectionTwo from "~/components/sections/CtaSectionTwo.vue";

const menus = [
  {
    label: 'Team',
    link: '/team'
  },
  {
    label: 'Team Details',
    link: ''
  },
];
</script>

<template>
  <!-- Breadcrumb Wrapper Start -->
  <Breadcrumb title="Team Details" :menus="menus" />
  <!-- Breadcrumb Wrapper End -->

  <!-- Team Member Details Start -->
  <TeamMemberDetailsSection />
  <!-- Team Member Details End -->

  <!-- Team Member Skills Start -->
  <TeamMemberSkillsSection />
  <!-- Team Member Skills End -->

  <!-- Contact Form Start -->
  <ContactFormSectionOne />
  <!-- Contact Form End -->

  <!-- CTA Wrapper Start -->
  <CtaSectionTwo />
  <!-- CTA Wrapper End -->
</template>

<style scoped>

</style>