<script setup lang="ts">

</script>

<template>
  <div class="blog-wrapper">
    <div class="divider"></div>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-7">
          <div class="section-heading text-center">
            <h2 class="mb-0">Read Our Articles and News</h2>
          </div>
        </div>
      </div>
    </div>

    <div class="divider-sm"></div>

    <div class="container">
      <div class="row g-4">

        <!-- Blog Card -->
        <div class="col-12 col-md-6 col-lg-4">
          <div class="blog-card-two">
            <img src="@/assets/img/bg-img/28.png" alt="">
            <div class="blog-content">
              <div class="blog-meta d-flex align-items-center">
                <a href="#">March 26, 24</a>
                <div class="dot"></div>
                <a href="#">Branding</a>
              </div>
              <NuxtLink class="post-title" to="/blog/details">Providing brilliant ideas For your business</NuxtLink>
            </div>
          </div>
        </div>

        <!-- Blog Card -->
        <div class="col-12 col-md-6 col-lg-4">
          <div class="blog-card-two">
            <img src="@/assets/img/bg-img/29.png" alt="">
            <div class="blog-content">
              <div class="blog-meta d-flex align-items-center">
                <a href="#">March 26, 24</a>
                <div class="dot"></div>
                <a href="#">Branding</a>
              </div>
              <NuxtLink class="post-title" to="/blog/details">Top tools for efficient web development</NuxtLink>
            </div>
          </div>
        </div>

        <!-- Blog Card -->
        <div class="col-12 col-md-6 col-lg-4">
          <div class="blog-card-two">
            <img src="@/assets/img/bg-img/30.png" alt="">
            <div class="blog-content">
              <div class="blog-meta d-flex align-items-center">
                <a href="#">March 26, 24</a>
                <div class="dot"></div>
                <a href="#">Branding</a>
              </div>
              <NuxtLink class="post-title" to="/blog/details">The Role Of Color Theory In Web Design</NuxtLink>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="divider"></div>
  </div>
</template>

<style scoped>

</style>