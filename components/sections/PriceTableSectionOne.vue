<script setup lang="ts">
defineProps({
  classes: String
})
</script>

<template>
  <div class="price-table-wrapper" :class="classes">
    <div class="divider"></div>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8">
          <div class="section-heading text-center">
            <h2 class="mb-0">Pricing Plan to Boost Your Business</h2>
          </div>
        </div>
      </div>
    </div>

    <div class="divider-sm"></div>

    <div class="container">
      <div class="row g-4 justify-content-center">

        <!-- Price Card -->
        <div class="col-12 col-md-6 col-lg-4">
          <div class="price-card">
            <div class="price-info">
              <h6>Startup</h6>
              <h3 class="price">$110 <span>/mo</span></h3>
              <p class="mb-0">We prioritize their success because is drive authentic relationships.</p>
            </div>

            <ul class="price-description list-unstyled">
              <li><span class="material-symbols-outlined">check</span> Web & Mobile</li>
              <li><span class="material-symbols-outlined">check</span> UI Design Create</li>
              <li><span class="material-symbols-outlined">check</span> Blockchain Development</li>
              <li><span class="material-symbols-outlined">check</span> Full Website Design System</li>
              <li><span class="material-symbols-outlined">check</span> One Year Support Included</li>
            </ul>

            <div class="choose-plan">
              <a href="#" class="btn btn-dark w-100"><span>Choose this plan</span><span>Choose this
                           plan</span></a>
            </div>
          </div>
        </div>

        <!-- Price Card -->
        <div class="col-12 col-md-6 col-lg-4">
          <div class="price-card">
            <div class="price-info">
              <h6>Professional</h6>
              <h3 class="price">$130 <span>/mo</span></h3>
              <p class="mb-0">We prioritize their success because is drive authentic relationships.</p>
            </div>

            <ul class="price-description list-unstyled">
              <li><span class="material-symbols-outlined">check</span> Web & Mobile</li>
              <li><span class="material-symbols-outlined">check</span> UI Design Create</li>
              <li><span class="material-symbols-outlined">check</span> Blockchain Development</li>
              <li><span class="material-symbols-outlined">check</span> Full Website Design System</li>
              <li><span class="material-symbols-outlined">check</span> One Year Support Included</li>
            </ul>

            <div class="choose-plan">
              <a href="#" class="btn btn-primary w-100"><span>Choose this plan</span><span>Choose this
                           plan</span></a>
            </div>
          </div>
        </div>

        <!-- Price Card -->
        <div class="col-12 col-md-6 col-lg-4">
          <div class="price-card">
            <div class="price-info">
              <h6>Exclusive</h6>
              <h3 class="price">$140 <span>/mo</span></h3>
              <p class="mb-0">We prioritize their success because is drive authentic relationships.</p>
            </div>

            <ul class="price-description list-unstyled">
              <li><span class="material-symbols-outlined">check</span> Web & Mobile</li>
              <li><span class="material-symbols-outlined">check</span> UI Design Create</li>
              <li><span class="material-symbols-outlined">check</span> Blockchain Development</li>
              <li><span class="material-symbols-outlined">check</span> Full Website Design System</li>
              <li><span class="material-symbols-outlined">check</span> One Year Support Included</li>
            </ul>

            <div class="choose-plan">
              <a href="#" class="btn btn-dark w-100"><span>Choose this plan</span><span>Choose this
                           plan</span></a>
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