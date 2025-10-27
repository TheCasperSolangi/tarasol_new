import { ref, onMounted, onUnmounted } from 'vue';

export function useStickyHeader() {
    const isSticky = ref(false);

    const handleScroll = () => {
        isSticky.value = window.scrollY > 10;
    };

    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Run once to check initial scroll position
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
    });

    return { isSticky };
}
