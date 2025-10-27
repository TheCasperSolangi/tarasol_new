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
            <!-- Search Button -->
            <div class="header-search-btn" id="searchButton" @click="openSearchModal()">
              <button class="btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g clip-path="url(#clip0_1_195)">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.5003 2C9.14485 2.00012 7.80912 2.32436 6.60451 2.94569C5.3999 3.56702 4.36135 4.46742 3.57549 5.57175C2.78963 6.67609 2.27926 7.95235 2.08696 9.29404C1.89466 10.6357 2.026 12.004 2.47003 13.2846C2.91406 14.5652 3.6579 15.7211 4.63949 16.6557C5.62108 17.5904 6.81196 18.2768 8.11277 18.6576C9.41358 19.0384 10.7866 19.1026 12.1173 18.8449C13.448 18.5872 14.6977 18.015 15.7623 17.176L19.4143 20.828C19.6029 21.0102 19.8555 21.111 20.1177 21.1087C20.3799 21.1064 20.6307 21.0012 20.8161 20.8158C21.0015 20.6304 21.1066 20.3796 21.1089 20.1174C21.1112 19.8552 21.0104 19.6026 20.8283 19.414L17.1763 15.762C18.1642 14.5086 18.7794 13.0024 18.9514 11.4157C19.1233 9.82905 18.8451 8.22602 18.1485 6.79009C17.4519 5.35417 16.3651 4.14336 15.0126 3.29623C13.66 2.44911 12.0962 1.99989 10.5003 2ZM4.00025 10.5C4.00025 8.77609 4.68507 7.12279 5.90406 5.90381C7.12305 4.68482 8.77635 4 10.5003 4C12.2242 4 13.8775 4.68482 15.0964 5.90381C16.3154 7.12279 17.0003 8.77609 17.0003 10.5C17.0003 12.2239 16.3154 13.8772 15.0964 15.0962C13.8775 16.3152 12.2242 17 10.5003 17C8.77635 17 7.12305 16.3152 5.90406 15.0962C4.68507 13.8772 4.00025 12.2239 4.00025 10.5Z"
                          fill="#FEFEFE" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_195">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>

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