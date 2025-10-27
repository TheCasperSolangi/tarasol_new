<script setup lang="ts">

</script>

<template>
  <div class="error-content text-center">
    <div class="divider"></div>

    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="d-flex justify-content-center">
            <img class="pb-2 dark-mode-404" src="@/assets/img/core-img/404.png" alt="">
            <img class="pb-2 light-mode-404" src="@/assets/img/core-img/404-light.png" alt="">
          </div>
          <div class="section-heading mt-5">
            <h2 class="mb-4">Look Like You're Lost</h2>
            <p>The link you followed probably broken or the page has been removed</p>
            <NuxtLink to="/" class="btn btn-primary mt-5">
              <span>BACK TO HOME</span><span>BACK TO HOME</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="divider"></div>
  </div>
</template>

<style scoped>

</style>