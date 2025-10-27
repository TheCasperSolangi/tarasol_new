<script setup lang="ts">
import bgImg from "@/assets/img/bg-img/11.jpg";
import {Fancybox} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import CounterSection from "~/components/sections/CounterSection.vue";

onMounted(() => {
  Fancybox.bind("[data-fancybox]", {
    // Options (optional)
    Thumbs: false,
    Toolbar: false,
  });
});
</script>

<template>
  <div class="cta-video-wrapper">
    <div class="container">
      <div class="video-wrap bg-img" :style="{backgroundImage: `url(${bgImg})`}">
        <div class="video-popup">
          <div class="popup-video">
            <div class="video-btn" data-fancybox href="https://www.youtube.com/watch?v=rDYdeq3JW_E">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_1_434)">
                  <path
                      d="M5.10545 0.529181C2.94172 -0.711968 1.1875 0.304796 1.1875 2.79837V21.1999C1.1875 23.6959 2.94172 24.7114 5.10545 23.4714L21.1893 14.2474C23.3538 13.0059 23.3538 10.9943 21.1893 9.753L5.10545 0.529181Z"
                      fill="#0E0E0E" />
                </g>
                <defs>
                  <clipPath id="clip0_1_434">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span class="video-sonar"></span>
            </div>
          </div>
        </div>
      </div>

      <CounterSection />
    </div>

    <div class="divider"></div>
  </div>
</template>

<style scoped>

</style>