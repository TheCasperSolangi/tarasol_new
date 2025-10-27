import { jarallax, jarallaxVideo } from 'jarallax';
import 'jarallax/dist/jarallax.min.css';

// Register Jarallax Video support
jarallaxVideo();

export default defineNuxtPlugin(() => {
    return {
        provide: {
            jarallax,
        },
    };
});
