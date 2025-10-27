<script setup lang="ts">
import HeaderMenu from "~/components/header/HeaderMenu.vue";

const { theme, toggleTheme, openSearchModal } = useSettingStore();
const route = useRoute();
const { isSticky } = useStickyHeader();

watchEffect(() => {
  if (import.meta.client) {
    document.body.className = theme;
  }
});

onMounted(() => {
  if (import.meta.client) {

  }
})
</script>

<template>
  <header class="header-area" :class="{ 'sticky-on': isSticky }">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
      <!-- Navbar Brand -->
<!-- Navbar Brand -->
<NuxtLink class="navbar-brand" to="/">
  <img 
    class="dark-logo" 
    src="@/assets/img/core-img/logo.png" 
    alt="Logo" 
    style="width: 100px; height: 90px; object-fit: contain;"
  >
  <img 
    class="light-logo" 
    src="@/assets/img/core-img/logo-light.png" 
    alt="Logo Light" 
    style="width: 100px; height: 90px; object-fit: contain;"
  >
</NuxtLink>


        <!-- Navbar Toggler -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#vorixNav"
                aria-controls="vorixNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="material-symbols-outlined">view_cozy</span>
        </button>

        <!-- Navbar Nav -->
        <div class="collapse navbar-collapse justify-content-end" id="vorixNav">
          <HeaderMenu />

          <div class="d-flex align-items-center">
          
            <!-- Dark/Light Button -->
            <button id="theme-toggle" class="theme-btn" @click="toggleTheme">
              <span v-if="theme === 'dark-mode'" class="material-symbols-outlined sun">clear_day</span>
              <span v-if="theme === 'light-mode'" class="material-symbols-outlined moon d-block">bedtime</span>
            </button>

            <!-- Contact Button -->
            <NuxtLink v-if="route.name !== 'home-2'" class="btn btn-primary" to="/contact"><span>GET IN TOUCH</span><span>GET IN TOUCH</span></NuxtLink>

            <!-- Side menu -->
            <div v-if="route.name === 'home-2'" class="mb-3 mb-lg-0" id="sideMenuButton">
              <a class="btn btn-primary sideMenuButton" data-bs-toggle="offcanvas" href="#sideMenuOffcanvas"
                 role="button" aria-controls="sideMenuOffcanvas"
              >
                        <span>
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                              <path d="M3 12H21" stroke="#0E0E0E" stroke-width="2" stroke-linecap="round" />
                              <path d="M3 6H21" stroke="#0E0E0E" stroke-width="2" stroke-linecap="round" />
                              <path d="M3 18H21" stroke="#0E0E0E" stroke-width="2" stroke-linecap="round" />
                           </svg>
                        </span>
                <span>
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                              <path d="M3 12H21" stroke="#0E0E0E" stroke-width="2" stroke-linecap="round" />
                              <path d="M3 6H21" stroke="#0E0E0E" stroke-width="2" stroke-linecap="round" />
                              <path d="M3 18H21" stroke="#0E0E0E" stroke-width="2" stroke-linecap="round" />
                           </svg>
                        </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>

</style>