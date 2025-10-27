<script setup lang="ts">

</script>

<template>
  <div class="mission-vision-wrapper">
    <div class="divider"></div>

    <div class="container">
      <div class="row g-4 align-items-center">
        <!-- Mission Vision Image -->
        <div class="col-12 col-lg-6">
          <div class="mission-vision-img-container">
            <img src="@/assets/img/bg-img/6.jpg" alt="">
            <!-- Experience -->
            <div class="experience">
              <h3 class="mb-0">20+</h3>
              <span>Years Experience</span>
            </div>
          </div>
        </div>

        <!-- Mission Vision Content -->
        <div class="col-12 col-lg-6">
          <div class="mission-vision-content">
            <h2>Digital Solutions Made Simple</h2>
            <p class="mb-4">Aliquam eu nunc imperdiet, volutpat mi vel, lobortis ligula. In lorem pharetra
              dignissim lacus, faucibus volutpat lorem suscipit nec. vel Nunc fringilla arcu eu massa ornare
              pharetra.</p>

            <div class="mission-vision-accordion">
              <div class="accordion" id="missionVision">
                <!-- Accordion -->
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Our Mission
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show"
                       data-bs-parent="#missionVision">
                    <div class="accordion-body">
                      Etiam id justo vitae lacus hendrerit ornare sit amet in justo. Donec non felis tempus
                      augue malesuada accumsan non nisl.Embrace growth with dynamic vitality.
                    </div>
                  </div>
                </div>
                <!-- Accordion -->
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Our Vision
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#missionVision">
                    <div class="accordion-body">
                      Etiam id justo vitae lacus hendrerit ornare sit amet in justo. Donec non felis tempus
                      augue malesuada accumsan non nisl.Embrace growth with dynamic vitality.
                    </div>
                  </div>
                </div>
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