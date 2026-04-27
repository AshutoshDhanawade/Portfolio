/**
 * Specific logic for Valasys Halloween Campaign case study
 */

document.addEventListener('DOMContentLoaded', () => {
    // Simple scroll animation for feature cards
    const observerOptions = {
        threshold: 0.5
    };

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card').forEach(card => {
        cardObserver.observe(card);
    });

    // Scroll Spy for TOC
    const sections = document.querySelectorAll('section[id]');
    const tocLinks = document.querySelectorAll('.sidebar-list-link');

    if (sections.length > 0 && tocLinks.length > 0) {
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.pageYOffset >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            tocLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        });
    }
});
