/**
 * FanCrew Case Study — Interactions & Animations
 */

document.addEventListener('DOMContentLoaded', () => {

    // Scroll Spy for Sidebar TOC
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
                if (link.getAttribute('href') && link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        });
    }

    // Scroll Reveal for .fc-reveal elements
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.fc-reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // Feature card active state on scroll
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.feature-card').forEach(card => {
        cardObserver.observe(card);
    });

});
