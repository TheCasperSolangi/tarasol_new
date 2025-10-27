<script setup lang="ts">
import imgBg from "@/assets/img/bg-img/32.jpg";

defineProps({
  title: {
    type: String,
    required: true,
  },
  menus: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="breadcrumb-wrapper bg-img jarallax bg-overlay" data-jarallax="" data-speed="0.6"
       :style="{backgroundImage: `url(${imgBg})`}">
    <div class="container h-100">
      <div class="breadcrumb-content h-100">
        <h2 class="wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="700ms">{{ title }}</h2>
        <ul class="list-unstyled wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="1000ms">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <template v-for="menu in menus">
            <li v-if="menu.link"><NuxtLink :to="menu.link">{{menu.label}}</NuxtLink></li>
            <li v-else>{{menu.label}}</li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>