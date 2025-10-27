import { ref, onMounted, onUnmounted } from 'vue';

export function useScrollTop(topDistance = 600) {
    const isVisible = ref(false);

    const checkScroll = () => {
        isVisible.value = window.scrollY > topDistance;
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

    onMounted(() => {
        window.addEventListener('scroll', checkScroll);
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', checkScroll);
    });

    return {
        isVisible,
        scrollToTop
    };
}
