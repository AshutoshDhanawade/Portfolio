/**
 * Common functionality for all portfolio pages
 */

// Profile Modal Logic
document.addEventListener('DOMContentLoaded', () => {
    const profileBtn = document.getElementById('profile-btn');
    const modalOverlay = document.getElementById('profile-modal');
    const modalClose = document.getElementById('modal-close');

    if (profileBtn && modalOverlay && modalClose) {
        profileBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scroll
        });

        modalClose.addEventListener('click', () => {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Time Update (if element exists)
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        function updateTime() {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true });
            timeElement.textContent = timeString;
        }
        setInterval(updateTime, 1000);
        updateTime();
    }
});
