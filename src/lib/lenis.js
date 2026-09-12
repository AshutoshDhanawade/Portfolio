import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

let lenis = null;

export function initLenis(options = {}) {
    if (lenis) return lenis;

    lenis = new Lenis({
        autoRaf: true,
        smoothWheel: true,
        ...options,
    });

    return lenis;
}

export function getLenis() {
    return lenis;
}

export function destroyLenis() {
    if (lenis) {
        lenis.destroy();
        lenis = null;
    }
}