<script setup lang="ts">
import bgImage from "@/assets/img/bg-img/1.jpg"

const { $jarallax } = useNuxtApp();

onMounted(() => {
  $jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.6,
  });
});
</script>

<template>
  <div class="cta-wrap jarallax" data-jarallax="" data-speed="0.6" :style="{backgroundImage: `url(${bgImage})`}">
    <div class="divider"></div>

    <div class="container">
      <div class="row justify-content-end">
        <div class="col-12 col-sm-11 col-md-10 col-lg-7 col-xl-6 col-xxl-5">
          <div class="cta-card">
            <!-- Total Clients -->
            <div class="total-clients-wrap">
              <div class="total-number">
                <h3>200+</h3>
                <p class="mb-0">Satisfied Customers</p>
              </div>

              <!-- Clients Image -->
              <div class="clients-images">
                <img src="@/assets/img/bg-img/5.jpg" alt="">
                <img src="@/assets/img/bg-img/4.jpg" alt="">
                <img src="@/assets/img/bg-img/3.jpg" alt="">
                <img src="@/assets/img/bg-img/2.jpg" alt="">
              </div>
            </div>

            <!-- Stats -->
            <div class="cta-stats">
              <div>
                <h2>100+</h2>
                <p class="mb-0">Global Clients</p>
              </div>

              <div>
                <h2>150+</h2>
                <p class="mb-0">Instructors</p>
              </div>

              <div>
                <h2>15+</h2>
                <p class="mb-0">Scoped Ideas</p>
              </div>

              <div>
                <h2>300+</h2>
                <p class="mb-0">Corporates Trained</p>
              </div>
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