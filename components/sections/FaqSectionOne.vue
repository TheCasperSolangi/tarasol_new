<script setup lang="ts">
defineProps({
  classes: String
})
</script>

<template>
  <div class="faq-wrapper" :class="classes">
    <div class="divider"></div>

    <div class="container">
      <div class="row g-5 align-items-center">
        <div class="col-12 col-lg-6">
          <div class="section-heading">
            <h2 class="mb-0">Frequently Asked Questions</h2>
          </div>

          <div class="divider-sm"></div>

          <!-- FAQ Image -->
          <div class="faq-image">
            <img src="@/assets/img/bg-img/26.jpg" alt="">

            <!-- FAQ Info -->
            <div class="faq-info d-flex align-items-center">
              <h2 class="mb-0">10k+</h2>
              <p class="mb-0">Client Review</p>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-6">
          <div class="faq-accordion ps-lg-4">
            <div class="accordion" id="faqAccordion">
              <!-- Accordion -->
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse"
                          data-bs-target="#faqQuestion1" aria-expanded="true" aria-controls="faqQuestion1">
                    What is vision for the future?
                  </button>
                </h2>
                <div id="faqQuestion1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                  <div class="accordion-body pt-0">
                    A business consultant is a professional who provides expert advice and guidance on various
                    aspects such.
                  </div>
                </div>
              </div>
              <!-- Accordion -->
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#faqQuestion2" aria-expanded="false" aria-controls="faqQuestion2">
                    Do you offer free resources?
                  </button>
                </h2>
                <div id="faqQuestion2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body pt-0">
                    A business consultant is a professional who provides expert advice and guidance on various
                    aspects such.
                  </div>
                </div>
              </div>
              <!-- Accordion -->
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#faqQuestion3" aria-expanded="false" aria-controls="faqQuestion3">
                    Can help to find investors?
                  </button>
                </h2>
                <div id="faqQuestion3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body pt-0">
                    A business consultant is a professional who provides expert advice and guidance on various
                    aspects such.
                  </div>
                </div>
              </div>
              <!-- Accordion -->
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#faqQuestion4" aria-expanded="false" aria-controls="faqQuestion4">
                    Can help to find investors?
                  </button>
                </h2>
                <div id="faqQuestion4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body pt-0">
                    A business consultant is a professional who provides expert advice and guidance on various
                    aspects such.
                  </div>
                </div>
              </div>
              <!-- Accordion -->
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#faqQuestion5" aria-expanded="false" aria-controls="faqQuestion5">
                    What services do you offer?
                  </button>
                </h2>
                <div id="faqQuestion5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body pt-0">
                    A business consultant is a professional who provides expert advice and guidance on various
                    aspects such.
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