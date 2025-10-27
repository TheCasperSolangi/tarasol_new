<script setup lang="ts">
const settingStore = useSettingStore();
</script>

<template>
  <div v-if="settingStore.isCookieAlertShow" class="cookiealert shadow-lg show">
    <h2 class="mb-3">Cookie's Notice</h2>
    <p class="mb-4">We use cookies for the best experience on our website, for social media features and to anal
      traffic. accepting
      you agree to our use of cookies. Read <a href="#" target="_blank"> Cookies Policy.</a></p>
    <button
        class="btn btn-dark acceptcookies" type="button"
        @click="settingStore.closeCookieAlert()"
    >
      <span>Accept</span><span>Accept</span>
    </button>
  </div>
</template>

<style scoped>

</style>