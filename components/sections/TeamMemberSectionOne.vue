<script setup lang="ts">

</script>

<template>
  <div class="team-member-wrapper">
    <div class="divider"></div>

    <div class="container">
      <div class="row g-5">
        <div class="col-12 col-lg-5">
          <div class="section-heading">
            <h2 class="mb-4">Our Team Behind The Studio</h2>
            <NuxtLink to="/team" class="btn-link">VIEW ALL 16 MEMBERS <svg xmlns="http://www.w3.org/2000/svg"
                                                                          width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L16.2 7.8M17 17V7H7" stroke="#ECC80B" stroke-width="2" stroke-linecap="square" />
            </svg></NuxtLink>
          </div>
        </div>

        <div class="col-12 col-lg-7">
          <div class="row g-4">

            <!-- Team Card -->
            <div class="col-12 col-sm-6">
              <NuxtLink to="/team/details">
                <div class="team-card">
                  <img src="@/assets/img/bg-img/22.jpg" alt="">

                  <div class="team-info">
                    <h4>Daniyel Karlos</h4>
                    <p class="mb-0">Web Developer</p>
                  </div>
                </div>
              </NuxtLink>
            </div>

            <!-- Team Card -->
            <div class="col-12 col-sm-6">
              <NuxtLink to="/team/details">
                <div class="team-card">
                  <img src="@/assets/img/bg-img/23.jpg" alt="">

                  <div class="team-info">
                    <h4>Reece Bronson</h4>
                    <p class="mb-0">Sr. Director</p>
                  </div>
                </div>
              </NuxtLink>
            </div>

            <!-- Team Card -->
            <div class="col-12 col-sm-6">
              <NuxtLink to="/team/details">
                <div class="team-card">
                  <img src="@/assets/img/bg-img/24.jpg" alt="">

                  <div class="team-info">
                    <h4>Steve Liddle</h4>
                    <p class="mb-0">Web Developer</p>
                  </div>
                </div>
              </NuxtLink>
            </div>

            <!-- Team Card -->
            <div class="col-12 col-sm-6">
              <NuxtLink to="/team/details">
                <div class="team-card">
                  <img src="@/assets/img/bg-img/25.jpg" alt="">

                  <div class="team-info">
                    <h4>Ryan Williams</h4>
                    <p class="mb-0">CEO & Founder</p>
                  </div>
                </div>
              </NuxtLink>
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