<script setup lang="ts">
const settingStore = useSettingStore();
const route = useRoute();

import HeaderOne from "~/components/header/HeaderOne.vue";
import FooterOne from "~/components/FooterOne.vue";
import CookieAlert from "~/components/CookieAlert.vue";
import ScrollToTop from "~/components/ScrollToTop.vue";

// WhatsApp configuration
const whatsappNumber = "+50687016253"; // Replace with your WhatsApp number (include country code without +)
const whatsappMessage = "Hello! I'm interested in tara solutions."; // Default message

const openWhatsApp = () => {
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};

watch(
    () => route.path,
    (newPath, oldPath) => {
      settingStore.closeSearchModal();
    }
);

onMounted(() => {
  settingStore.closeSearchModal();
});

onBeforeRouteLeave(() => {
  settingStore.closeSearchModal();
});
</script>

<template>
  <!-- Preloader Start -->
  <Preloader />
  <!-- Preloader End -->

  <!-- Right Side Menu Start -->
  <RightSideMenu />
  <!-- Right Side Menu End -->

  <!-- Search Form Start -->
  <SearchForm />
  <!-- Search Form End -->

  <!-- WhatsApp Button Start -->
  <button
    @click="openWhatsApp"
    class="whatsapp-button"
    aria-label="Contact us on WhatsApp"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="whatsapp-icon"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  </button>
  <!-- WhatsApp Button End -->

  <HeaderOne />
  <slot/>
  <!-- Footer Start -->
  <FooterOne />
  <!-- Footer End -->

  <!-- Cookie Alert Start -->
  <CookieAlert />
  <!-- Cookie Alert End -->

  <!-- Scroll To Top Start -->
  <ScrollToTop />
  <!-- Scroll To Top End -->
</template>

<style scoped>
.whatsapp-button {
  position: fixed;
  left: 30px;
  bottom: 30px;
  width: 60px;
  height: 60px;
  background: #25D366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
  transition: all 0.3s ease;
  z-index: 999;
  border: none;
  color: white;
}

.whatsapp-button:hover {
  background: #20ba5a;
  transform: scale(1.1);
  box-shadow: 0 6px 16px rgba(37, 211, 102, 0.5);
}

.whatsapp-button:active {
  transform: scale(0.95);
}

.whatsapp-icon {
  width: 32px;
  height: 32px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .whatsapp-button {
    left: 20px;
    bottom: 20px;
    width: 56px;
    height: 56px;
  }
  
  .whatsapp-icon {
    width: 28px;
    height: 28px;
  }
}
</style>