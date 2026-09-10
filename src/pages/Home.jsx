import { Link } from 'react-router-dom';

import ProfileModal from '../components/ProfileModal';
import HomeSidebar from '../components/HomeSidebar';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import { usePageTitle } from '../hooks/usePageTitle';

import '../styles/portfolio.css';

export default function Home() {
    usePageTitle('Ashutosh Dhanawade | UI UX Designer');

    return (
        <>
            <ProfileModal />
            <HomeSidebar />

            <div className="main-wrapper">
                <TopNav portfolioTo="#" />

                <div className="content-container">
                    <div className="project-grid">
                        {/* Valasys Project Card */}
                        <Link to="/projects/valasys" className="project-card">
                            <span className="project-card-num">No. 01</span>
                            <div className="project-card-image-wrapper">
                                <img
                                    src="/assets/images/hero-banner.png"
                                    alt="Valasys"
                                    className="project-card-image"
                                    style={{ filter: 'hue-rotate(45deg) brightness(0.7)' }}
                                />
                                <div className="view-case-study">
                                    <i className="fas fa-eye"></i> VIEW CASE STUDY
                                </div>
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
                                <div className="view-case-study">
                                    <i className="fas fa-eye"></i> VIEW CASE STUDY
                                </div>
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

                        {/* FanCrew Project Card */}
                        <Link to="/projects/fancrew" className="project-card">
                            <span className="project-card-num">No. 03</span>
                            <div className="project-card-image-wrapper">
                                <img
                                    src="/assets/images/hero-banner.png"
                                    alt="FanCrew"
                                    className="project-card-image"
                                    style={{ filter: 'hue-rotate(240deg) brightness(0.75)' }}
                                />
                                <div className="view-case-study">
                                    <i className="fas fa-eye"></i> VIEW CASE STUDY
                                </div>
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
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}