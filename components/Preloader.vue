<script setup lang="ts">
const { isLoading } = usePreloader();
</script>

<template>
  <div v-if="isLoading" class="preloader" id="preloader">
    <div class="spinner-grow" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<style scoped>

</style>