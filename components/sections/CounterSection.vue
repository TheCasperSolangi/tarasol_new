<script setup lang="ts">
import ScrollCounter from "~/components/ScrollCounter.vue"
</script>

<template>
  <div class="row g-4 g-lg-5">
    <!-- CTA Card -->
    <div class="col-12 col-md-4">
      <div class="cta-content">
        <h2 class="mb-3">
          <span class="counter">
            <ScrollCounter :start="0" :end="15" :duration="3000" />
          </span>+
        </h2>
        <h4>Years of Global Expertise</h4>
        <p class="mb-0">
          Delivering world-class professional certifications and corporate training programs across industries and continents.
        </p>
      </div>
    </div>

    <!-- CTA Card -->
    <div class="col-12 col-md-4">
      <div class="cta-content">
        <h2 class="mb-3">
          <span class="counter">
            <ScrollCounter :start="0" :end="500" :duration="3000" />
          </span>+
        </h2>
        <h4>Corporate Training Programs</h4>
        <p class="mb-0">
          From Lean Six Sigma to Agile and Scrum, we’ve empowered organizations with globally recognized upskilling solutions.
        </p>
      </div>
    </div>

    <!-- CTA Card -->
    <div class="col-12 col-md-4">
      <div class="cta-content">
        <h2 class="mb-3">
          <span class="counter">
            <ScrollCounter :start="0" :end="10_000" :duration="3000" />
          </span>+
        </h2>
        <h4>Certified Professionals</h4>
        <p class="mb-0">
          Our alumni represent a strong global network of certified professionals driving excellence and innovation worldwide.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
