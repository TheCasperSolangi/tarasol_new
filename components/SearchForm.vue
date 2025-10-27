<script setup lang="ts">
const settingStore = useSettingStore();
</script>

<template>
  <div class="search-bg-overlay" :class="{open: settingStore.isOpenSearch}" id="searchOverlay"></div>
  <div class="search-form-popup" :class="{open: settingStore.isOpenSearch}">
    <h2 class="mb-4">Ask me anything...</h2>
    <button type="button" class="close-btn" id="searchClose" aria-label="Close"
            @click="settingStore.closeSearchModal"
    >
      &times;
    </button>
    <form class="search-form">
      <input type="search" class="form-control" placeholder="Search...">
      <button type="submit" class="btn btn-dark">
        <span>Search</span>
        <span>Search</span>
      </button>
    </form>
  </div>
</template>

<style scoped>

</style>