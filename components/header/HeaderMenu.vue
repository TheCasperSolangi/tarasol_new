<script setup lang="ts">
import { ref } from "vue";

const activeMenu = ref<string | null>(null);

const toggleMenu = (menu: string) => {
  activeMenu.value = activeMenu.value === menu ? null : menu;
};
</script>

<template>
  <ul class="navbar-nav navbar-nav-scroll">
    <!-- Home -->
    <li class="vorix-dd">
      <NuxtLink to="/">Home</NuxtLink>
    </li>

    <!-- Certifications Dropdown -->
    <li class="vorix-dd">
      <a href="#" @click.prevent="toggleMenu('certifications')">
        Certifications
      </a>
      <ul
        class="vorix-dd-menu"
        :class="[activeMenu === 'certifications' ? 'd-block' : '']"
      >
        <li>
          <NuxtLink to="/services/executive-programs">Executive Programs</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/services/international-certification">
            International Certifications
          </NuxtLink>
        </li>
      </ul>
    </li>

    <!-- About Us -->
    <li class="vorix-dd">
      <NuxtLink to="/about-us">About Us</NuxtLink>
    </li>

    <!-- Contact -->
    <li class="vorix-dd">
      <NuxtLink to="/contact">Contact</NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
.vorix-dd-menu {
  display: none;
}
.vorix-dd-menu.d-block {
  display: block;
}
</style>
