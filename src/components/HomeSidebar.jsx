import { useEffect, useState } from 'react';
import { useClock } from '../hooks/useClock';
import { getLenis } from '../lib/lenis';

function smoothScrollTo(selector, event) {
    event.preventDefault();
    const el = document.querySelector(selector);
    const y = el ? Math.max(0, el.offsetTop - 70) : 0;
    const lenis = getLenis();
    if (lenis) {
        lenis.scrollTo(y);
    } else {
        window.scrollTo(0, y);
    }
}

export default function HomeSidebar() {
    const time = useClock();
    const [active, setActive] = useState('about');

    useEffect(() => {
        const about = document.getElementById('about');
        const work = document.getElementById('work');
        const onScroll = () => {
            const y = window.scrollY;
            if (work && about && y >= work.offsetTop - 100) setActive('work');
            else if (about && y >= about.offsetTop) setActive('about');
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <aside className="sidebar">
            <div className="profile-bio" style={{ marginBottom: '40px' }}>
                <p
                    style={{
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        fontFamily: 'Outfit',
                        color: '#b35a76',
                        marginBottom: '15px'
                    }}
                >
                    *
                </p>
                <h2 style={{ fontFamily: 'Outfit', fontSize: '1.8rem', lineHeight: 1.2, marginBottom: '15px' }}>
                    Ashutosh Dhanawade
                </h2>
                <p
                    style={{
                        fontSize: '0.7rem',
                        textTransform: 'uppercase',
                        fontWeight: 700,
                        color: '#888',
                        letterSpacing: '1px',
                        marginBottom: '20px'
                    }}
                >
                    UI UX DESIGNER
                </p>
                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6 }}>
                    I am a passionate UI/UX Designer dedicated to creating user-centric digital experiences that are
                    both beautiful and functional.
                    <br />
                    <br />
                    Focused on solving complex design problems with clean, elegant solutions.
                </p>
            </div>

            <div className="sidebar-box">
                <h3 className="sidebar-box-header">Explore</h3>
                <ul className="sidebar-list">
                    <li className="sidebar-list-item">
                        <a href="#about-portrait about-reveal revealed" className={'sidebar-list-link' + (active === 'about' ? ' active' : '')} onClick={(e) => smoothScrollTo('#about', e)}>
                            <span>01.</span> About Me
                        </a>
                    </li>
                    <li className="sidebar-list-item">
                        <a href="#work" className={'sidebar-list-link' + (active === 'work' ? ' active' : '')} onClick={(e) => smoothScrollTo('#work', e)}>
                            <span>02.</span> My Work
                        </a>
                    </li>
                </ul>
            </div>

            <div className="explore-footer">
                <h4>Find me at</h4>
                <div className="explore-footer-links">
                    <a href="mailto:ajdhanawade2001@gmail.com">Email</a>
                    <a href="https://www.linkedin.com/in/ashutosh-dhanawade-574258210/" target="_blank">LinkedIn</a>

                </div>

                <div className="explore-status">
                    <p className="explore-status-time" id="current-time">{time}</p>
                    <p className="explore-status-ok">All systems operational</p>
                </div>
            </div>
        </aside>
    );
}