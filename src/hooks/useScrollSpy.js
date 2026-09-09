import { useEffect } from 'react';

export function useScrollSpy() {
    useEffect(() => {
        const sections = Array.from(document.querySelectorAll('section[id]'));
        const tocLinks = Array.from(document.querySelectorAll('.sidebar-list-link'));
        if (sections.length === 0 || tocLinks.length === 0) return;

        const onScroll = () => {
            let current = '';
            sections.forEach((section) => {
                if (window.pageYOffset >= section.offsetTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            tocLinks.forEach((link) => {
                link.classList.remove('active');
                const href = link.getAttribute('href');
                if (href && href.includes(current)) {
                    link.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', onScroll);
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
}