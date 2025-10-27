<script setup lang="ts">
// no script needed
</script>

<template>
  <div class="latest-service-wrapper bg-secondary">
    <div class="divider"></div>

    <!-- Section Heading -->
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="section-heading text-center">
            <h2 class="mb-0">Our Featured Services</h2>
          </div>
        </div>
      </div>
    </div>

    <div class="divider-sm"></div>

    <!-- Services Section -->
    <div class="container">
      <div class="row justify-content-center g-4">

        <!-- Service 1 -->
        <div class="col-md-6 col-lg-4">
          <div class="service-slide-card text-center p-4 h-100 d-flex flex-column align-items-center justify-content-between">
            <div>
              <!-- Icon -->
              <div class="icon-wrapper mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 50 50" fill="none">
                  <path d="M25 0C11.192 0 0 11.192 0 25C0 38.808 11.192 50 25 50C38.808 50 50 38.808 50 25C50 11.192 38.808 0 25 0ZM25 45.8333C13.0208 45.8333 4.16667 36.9792 4.16667 25C4.16667 13.0208 13.0208 4.16667 25 4.16667C36.9792 4.16667 45.8333 13.0208 45.8333 25C45.8333 36.9792 36.9792 45.8333 25 45.8333Z" fill="#ECC80B"/>
                  <path d="M35.4167 22.9167H26.0417V12.5C26.0417 11.348 25.1083 10.4167 23.9583 10.4167C22.8083 10.4167 21.875 11.348 21.875 12.5V25C21.875 26.152 22.8083 27.0833 23.9583 27.0833H35.4167C36.5667 27.0833 37.5 26.152 37.5 25C37.5 23.848 36.5667 22.9167 35.4167 22.9167Z" fill="#ECC80B"/>
                </svg>
              </div>

              <!-- Heading -->
              <h3 class="mb-3">International Certification</h3>

           
            </div>

            <!-- Button -->
            <NuxtLink to="/services/international-certification" class="btn btn-outline-light rounded-pill px-4 py-2 mt-auto">
              Show Details
            </NuxtLink>
          </div>
        </div>

        <!-- Service 2 -->
        <div class="col-md-6 col-lg-4">
          <div class="service-slide-card text-center p-4 h-100 d-flex flex-column align-items-center justify-content-between">
            <div>
              <!-- Icon -->
              <div class="icon-wrapper mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 50 50" fill="none">
                  <path d="M43.75 6.25H6.25C2.79948 6.25 0 9.04948 0 12.5V37.5C0 40.9505 2.79948 43.75 6.25 43.75H43.75C47.2005 43.75 50 40.9505 50 37.5V12.5C50 9.04948 47.2005 6.25 43.75 6.25ZM45.8333 37.5C45.8333 38.6489 44.8989 39.5833 43.75 39.5833H6.25C5.10106 39.5833 4.16667 38.6489 4.16667 37.5V12.5C4.16667 11.3511 5.10106 10.4167 6.25 10.4167H43.75C44.8989 10.4167 45.8333 11.3511 45.8333 12.5V37.5Z" fill="#ECC80B"/>
                  <path d="M33.3333 25H25V16.6667C25 15.5146 24.0656 14.5833 22.9167 14.5833C21.7677 14.5833 20.8333 15.5146 20.8333 16.6667V27.0833C20.8333 28.2354 21.7677 29.1667 22.9167 29.1667H33.3333C34.4823 29.1667 35.4167 28.2354 35.4167 27.0833C35.4167 25.9313 34.4823 25 33.3333 25Z" fill="#ECC80B"/>
                </svg>
              </div>

              <!-- Heading -->
              <h3 class="mb-3">Executive Program</h3>

           
            </div>

            <!-- Button -->
            <NuxtLink to="/services/executive-program" class="btn btn-outline-light rounded-pill px-4 py-2 mt-auto">
              Show Details
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="divider"></div>
  </div>
</template>

<style scoped>
.service-slide-card {
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.03);
  transition: all 0.3s ease;
}
.service-slide-card:hover {
  transform: translateY(-5px);
  border-color: #ecc80b;
  background: rgba(255, 255, 255, 0.06);
}
.icon-wrapper svg {
  transition: transform 0.3s ease;
}
.service-slide-card:hover .icon-wrapper svg {
  transform: scale(1.1);
}
.btn {

  font-size: 0.95rem;
  font-weight: 500;
  border: 1px solid #ecc80b;
  color: #ecc80b;
}
.btn:hover {
  background: #ecc80b;
  color: #000;
}
</style>
