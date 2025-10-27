import { ref, onMounted, nextTick } from "vue";

export function usePreloader() {
    const isLoading = ref(true); // Controls visibility of the preloader

    const hidePreloader = () => {
        const preloader = document.getElementById("preloader");

        if (!preloader) return;

        let opacity = 1;
        const fadeOut = setInterval(() => {
            if (opacity > 0) {
                opacity -= 0.1;
                preloader.style.opacity = opacity.toString();
            } else {
                clearInterval(fadeOut);
                isLoading.value = false; // Remove preloader after fading out
            }
        }, 100);
    };

    onMounted(async () => {
        await nextTick(); // Ensures the component is fully mounted before running the code

        if (document.readyState === "complete") {
            // If page is already loaded, hide preloader immediately
            hidePreloader();
        } else {
            window.addEventListener("load", hidePreloader);
        }
    });

    return { isLoading };
}
