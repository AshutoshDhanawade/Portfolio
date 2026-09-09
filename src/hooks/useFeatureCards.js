import { useEffect } from 'react';

export function useFeatureCards() {
    useEffect(() => {
        const els = Array.from(document.querySelectorAll('.feature-card'));
        if (els.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            },
            { threshold: 0.5 }
        );

        els.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);
}