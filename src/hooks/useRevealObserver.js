import { useEffect } from 'react';

export function useRevealObserver() {
    useEffect(() => {
        const els = Array.from(document.querySelectorAll('.fc-reveal, .vpw-reveal'));
        if (els.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
        );

        els.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);
}