import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import ProfileModal from '../components/ProfileModal';
import HomeSidebar from '../components/HomeSidebar';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import { useRevealObserver } from '../hooks/useRevealObserver';

import '../styles/portfolio.css';

export default function Home() {
    useRevealObserver();
    const aboutSectionRef = useRef(null);

    useEffect(() => {
        const section = aboutSectionRef.current;
        if (!section) return;

        const mqDesktop = window.matchMedia('(min-width: 861px)');
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!mqDesktop.matches || reduceMotion) return;

        const pads = Array.from(section.querySelectorAll('.about-parallax'));
        let max = section.offsetHeight;

        const update = () => {
            const t = Math.max(0, Math.min(window.scrollY, max));
            pads.forEach((el) => {
                el.style.transform = `translateY(${-t}px)`;
            });
        };

        const onScroll = () => update();

        const onResize = () => {
            max = section.offsetHeight;
            update();
        };

        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return (
        <>
            <ProfileModal />
            <HomeSidebar />

            <div className="main-wrapper">
                <TopNav portfolioTo="#" />

                <div className="content-container">
                    {/* About Me Section */}
                    <section className="about-section" id="about" ref={aboutSectionRef}>
                        <div className="about-layout">
                            <div className="about-parallax about-left-cell">
                                <div className="about-left about-reveal" style={{ '--reveal-delay': '0s' }}>
                                    <div className="about-status">
                                        <span className="about-status-dot"></span>
                                        <p className="about-status-text">Currently designing digital experiences</p>
                                    </div>
                                </div>
                            </div>

                            <div className="about-parallax about-headline-cell">
                                <h2 className="about-headline about-reveal" style={{ '--reveal-delay': '0.12s' }}>
                                    Designing digital experiences that solve real business problems.
                                </h2>
                            </div>

                            <div className="about-portrait about-reveal" style={{ '--reveal-delay': '0.24s' }}>
                                <div className="about-portrait-frame">
                                    <span className="about-portrait-glow" aria-hidden="true"></span>
                                    <span className="about-portrait-glow-2" aria-hidden="true"></span>
                                    <img
                                        src="/assets/images/Ashutosh Dhanawade.png"
                                        alt="Ashutosh Dhanawade"
                                        className="about-portrait-sharp"
                                        draggable="false"
                                    />
                                    <img
                                        src="/assets/images/Ashutosh Dhanawade.png"
                                        alt=""
                                        aria-hidden="true"
                                        className="about-portrait-blur"
                                        draggable="false"
                                    />
                                    <img
                                        src="/assets/images/Ashutosh Dhanawade.png"
                                        alt=""
                                        aria-hidden="true"
                                        className="about-portrait-blur-hard"
                                        draggable="false"
                                    />
                                </div>
                            </div>

                            <div className="about-parallax about-right-cell">
                                <div className="about-right about-reveal" style={{ '--reveal-delay': '0.36s' }}>
                                    <p className="about-desc">
                                        I'm a UI/UX and Product Designer focused on turning complex business problems
                                        into clear, valuable digital experiences. Working across UX, interaction and
                                        visual design, I design with intent — shaping products that are both meaningful
                                        and measurable.
                                    </p>
                                    <a className="about-cta" href="mailto:ajdhanawade2001@gmail.com">
                                        Let's work together<span className="about-cta-arrow">&rarr;</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* My Work Section */}
                    <div className="project-grid" id="work">
                        {/* FanCrew Project Card */}
                        <Link to="/projects/fancrew" className="project-card">
                            <span className="project-card-num">No. 01</span>
                            <div className="project-card-image-wrapper">
                                <img
                                    src="/assets/images/fancrew hero image.png"
                                    alt="FanCrew"
                                    className="project-card-image"
                                />
                            </div>
                            <div className="project-card-header">
                                <h3 className="project-card-title">FanCrew</h3>
                                <div className="project-card-tags">
                                    <span className="project-card-tag">Marketplace</span>
                                    <span className="project-card-tag">Product Design</span>
                                </div>
                            </div>
                            <p className="project-card-desc">
                                Designing a structured Creator–Crew marketplace connecting discovery, hiring,
                                collaboration, delivery and payment into one coherent product experience.
                            </p>
                            <div className="project-card-divider"></div>
                            <div className="project-card-meta">
                                <div className="project-meta-col">
                                    <h4>Role</h4>
                                    <p>Product Management, UX/UI, Design Systems</p>
                                </div>
                                <div className="project-meta-col">
                                    <h4>Scope</h4>
                                    <p>MVP 1 — Creator ↔ Crew</p>
                                </div>
                                <div className="project-meta-col">
                                    <h4>Domain</h4>
                                    <p>Creator Economy, Two-Sided Platform</p>
                                </div>
                            </div>
                        </Link>

                        {/* Valasys Product Website Card */}
                        <Link to="/projects/valasys-product-website" className="project-card">
                            <span className="project-card-num">No. 02</span>
                            <div className="project-card-image-wrapper">
                                <img
                                    src="/assets/images/hero-banner.png"
                                    alt="Valasys Product Website"
                                    className="project-card-image"
                                    style={{ filter: 'hue-rotate(160deg) brightness(0.7)' }}
                                />
                            </div>
                            <div className="project-card-header">
                                <h3 className="project-card-title">Valasys Product Website</h3>
                                <div className="project-card-tags">
                                    <span className="project-card-tag">B2B SaaS</span>
                                    <span className="project-card-tag">Interaction Design</span>
                                </div>
                            </div>
                            <p className="project-card-desc">
                                Making a complex B2B sales-intelligence product easier to explore through
                                interaction design, progressive disclosure, and modern web design.
                            </p>
                            <div className="project-card-divider"></div>
                            <div className="project-card-meta">
                                <div className="project-meta-col">
                                    <h4>Role</h4>
                                    <p>UI/UX Designer, Interaction Designer</p>
                                </div>
                                <div className="project-meta-col">
                                    <h4>Scope</h4>
                                    <p>Full Design & Prototype</p>
                                </div>
                                <div className="project-meta-col">
                                    <h4>Domain</h4>
                                    <p>B2B SaaS, Sales Intelligence</p>
                                </div>
                            </div>
                        </Link>

                        {/* Valasys Project Card */}
                        <Link to="/projects/valasys" className="project-card">
                            <span className="project-card-num">No. 03</span>
                            <div className="project-card-image-wrapper">
                                <img
                                    src="/assets/images/hero-banner.png"
                                    alt="Valasys"
                                    className="project-card-image"
                                    style={{ filter: 'hue-rotate(45deg) brightness(0.7)' }}
                                />
                            </div>
                            <div className="project-card-header">
                                <h3 className="project-card-title">Valasys Halloween Campaign</h3>
                                <div className="project-card-tags">
                                    <span className="project-card-tag">B2B SaaS</span>
                                    <span className="project-card-tag">Performance Design</span>
                                </div>
                            </div>
                            <p className="project-card-desc">
                                🎃 Building a 0→1 Halloween campaign for a Sales Intelligence SaaS, driving high-intent
                                clicks through thematic positioning without gimmicks.
                            </p>
                            <div className="project-card-divider"></div>
                            <div className="project-card-meta">
                                <div className="project-meta-col">
                                    <h4>Role</h4>
                                    <p>Product Designer, Performance Design</p>
                                </div>
                                <div className="project-meta-col">
                                    <h4>Team</h4>
                                    <p>Marketing Lead, Performance Marketer</p>
                                </div>
                                <div className="project-meta-col">
                                    <h4>Timeframe</h4>
                                    <p>Oct 2025 (3 weeks)</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}