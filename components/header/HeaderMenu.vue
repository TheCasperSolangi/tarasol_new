<script setup lang="ts">
import { ref } from "vue";

const activeMenu = ref<string | null>(null);

const toggleMenu = (menu: string) => {
  activeMenu.value = activeMenu.value === menu ? null : menu;
};
</script>

<template>
  <ul class="navbar-nav navbar-nav-scroll">
    <li class="vorix-dd">
      <a href="#" @click.prevent="toggleMenu('home')">Home</a>
    </li>

    <!-- Certifications Dropdown -->
    <li class="vorix-dd">
      <a href="#" @click.prevent="toggleMenu('certifications')">Certifications</a>
      <ul
        class="vorix-dd-menu"
        :class="[activeMenu === 'certifications' ? 'd-block' : '']"
      >
        <li>
          <NuxtLink to="/executive-programs">Executive Programs</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/international-certifications">
            International Certifications
          </NuxtLink>
        </li>
      </ul>
    </li>

    <li class="vorix-dd">
      <a href="/about-us" @click.prevent="toggleMenu('about')">About Us</a>
    </li>



    <li class="vorix-dd">
      <a href="=/contact" @click.prevent="toggleMenu('contact')">Contact</a>
    </li>
  </ul>
</template>

<style scoped>
/* Optional dropdown visibility control (same as header 2) */
.vorix-dd-menu {
  display: none;
}
.vorix-dd-menu.d-block {
  display: block;
}
</style>
