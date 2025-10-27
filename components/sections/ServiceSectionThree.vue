<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import servicesData from "@/assets/data/services.json"; // <-- place your JSON here

const services = ref<any[]>([]);
const showAll = ref(false);

// Load the JSON data
onMounted(() => {
  services.value = servicesData;
});

// Computed to show either 6 or all
const visibleServices = computed(() => {
  return showAll.value ? services.value : services.value.slice(0, 6);
});

// Toggle button
const toggleShowAll = () => {
  showAll.value = !showAll.value;
};
</script>

<template>
  <div class="service-wrapper">
    <div class="divider"></div>

    <div class="container">
      <div class="row g-4 g-lg-5">
        <div
          v-for="(item, index) in visibleServices"
          :key="index"
          class="col-12 col-md-6 col-xl-4"
        >
          <NuxtLink to="/services/details">
            <div class="service-slide-card">
              <span class="material-symbols-outlined">workspace_premium</span>
              <h2>{{ item.Certificaciones }}</h2>
              <p class="mb-0">{{ item.Objetivo_general }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- Expand / Collapse Button -->
      <div class="text-center mt-4">
        <button class="btn btn-outline-primary" @click="toggleShowAll">
          {{ showAll ? 'Show Less' : 'Expand All' }}
        </button>
      </div>
    </div>

    <div class="divider"></div>
  </div>
</template>

<style scoped>

</style>
