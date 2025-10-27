<script setup lang="ts">

</script>

<template>
  <div class="blog-wrapper">
    <div class="divider"></div>

    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-heading d-md-flex align-items-end justify-content-between">
            <h2 class="mb-4 mb-md-0">Our Latest Blog <br>& News</h2>
            <a href="#" class="btn btn-primary"><span>ALL BLOGS</span><span>ALL BLOGS</span></a>
          </div>
        </div>
      </div>
    </div>

    <div class="divider-sm"></div>

    <div class="container">
      <div class="row g-4">

        <!-- Blog Card -->
        <div class="col-12 col-md-6 col-lg-4">
          <div class="blog-card">
            <img src="@/assets/img/bg-img/17.jpg" alt="">
            <div class="blog-meta d-flex align-items-center">
              <a href="#">March 26, 24</a>
              <div class="dot"></div>
              <a href="#">Branding</a>
            </div>
            <NuxtLink class="post-title" to="/blog/details">Providing brilliant ideas For your business</NuxtLink>
          </div>
        </div>

        <!-- Blog Card -->
        <div class="col-12 col-md-6 col-lg-4">
          <div class="blog-card">
            <img src="@/assets/img/bg-img/18.jpg" alt="">
            <div class="blog-meta d-flex align-items-center">
              <a href="#">March 26, 24</a>
              <div class="dot"></div>
              <a href="#">Branding</a>
            </div>
            <NuxtLink class="post-title" to="/blog/details">Everything You Should Know About Return</NuxtLink>
          </div>
        </div>

        <!-- Blog Card -->
        <div class="col-12 col-md-6 col-lg-4">
          <div class="blog-card">
            <img src="@/assets/img/bg-img/19.jpg" alt="">
            <div class="blog-meta d-flex align-items-center">
              <a href="#">March 26, 24</a>
              <div class="dot"></div>
              <a href="#">Branding</a>
            </div>
            <NuxtLink class="post-title" to="/blog/details">Top tools for efficient web development</NuxtLink>
          </div>
        </div>

      </div>
    </div>

    <div class="divider"></div>
  </div>
</template>

<style scoped>

</style>