<script setup lang="ts">
const { isVisible, scrollToTop } = useScrollTop(600);
</script>

<template>
  <button id="scrollTopButton" :class="[isVisible ? 'scrolltop-show' : 'scrolltop-hide']"
          @click="scrollToTop"
  >
    <span class="material-symbols-outlined">arrow_upward_alt</span>
  </button>
</template>

<style scoped>

</style>