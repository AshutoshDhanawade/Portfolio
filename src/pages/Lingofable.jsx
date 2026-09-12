import CaseLayout from '../components/CaseLayout';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { useFeatureCards } from '../hooks/useFeatureCards';

import '../styles/lingofable.css';

const TOC = [
    { id: 'context', num: '01', label: 'Context' },
    { id: 'solution', num: '02', label: 'The solution' },
    { id: 'features', num: '03', label: 'Features' },
    { id: 'interaction', num: '04', label: 'Interaction design' },
    { id: 'onboarding', num: '05', label: 'Onboarding & conversion' },
    { id: 'reflection', num: '06', label: 'Reflection' }
];

export default function Lingofable() {
    useScrollSpy();
    useFeatureCards();

    return (
        <CaseLayout toc={TOC}>
            {/* Hero Section */}
            <div className="hero-image-container">
                <img src="/assets/images/hero-banner.png" alt="Lingofable Banner" className="hero-image" />
            </div>

            <header className="project-header">
                <div className="project-tags">
                    <span className="tag">Product Design</span>
                    <span className="tag">EdTech</span>
                </div>
                <h1 className="project-title">Building Lingofable from 0-1</h1>
                <p className="section-text">
                    Lingofable is a story-driven language learning platform that helps users acquire languages naturally
                    through immersive storytelling and adaptive difficulty.
                </p>

                <div className="project-meta-grid">
                    <div className="meta-item">
                        <p className="meta-label">Role</p>
                        <p className="meta-value">Founder, Product Designer, Marketing</p>
                    </div>
                    <div className="meta-item">
                        <p className="meta-label">Team</p>
                        <p className="meta-value">Founding Team: 1 PM, 1 Designer, 5 Engineers</p>
                    </div>
                    <div className="meta-item">
                        <p className="meta-label">Timeline</p>
                        <p className="meta-value">Oct 2023 - Apr 2024</p>
                    </div>
                    <div className="meta-item">
                        <p className="meta-label">Skills</p>
                        <p className="meta-value">Video editing, Adobe Photoshop, UI/UX Design</p>
                    </div>
                </div>
            </header>

            {/* Language Learning is Tricky */}
            <section id="context" className="section">
                <span className="section-label">The Problem</span>
                <h2 className="section-title">Language learning is tricky</h2>
                <p className="section-text">
                    Many learners struggle with the jump from basic vocabulary to actual comprehension. Traditional
                    methods often feel disjointed and lack the context needed for long-term retention.
                </p>
            </section>

            {/* The Solution */}
            <section id="solution" className="section">
                <span className="section-label">The Solution</span>
                <h2 className="section-title">Comprehensive input at scale, delivered through stories</h2>
                <p className="section-text">
                    We built a system that generates stories tailored to the user's current level, ensuring they are
                    always in the "sweet spot" of learning—challenged but not overwhelmed.
                </p>

                {/* Bento Grid */}
                <div className="bento-grid">
                    <div className="bento-item bento-1">
                        <div className="bento-content">
                            <h3 className="bento-title">From fairy tales to Reddit threads</h3>
                            <p className="bento-desc">Diverse content sources to keep learners engaged with real-world
                                language.</p>
                        </div>
                        <img src="/projects/lingofable/assets/bento-1-fairy-tales.png" alt="Fairy tales content" className="bento-img" />
                    </div>
                    <div className="bento-item bento-2">
                        <div className="bento-content">
                            <h3 className="bento-title">Track your progress</h3>
                            <p className="bento-desc">Visualizing growth through vocabulary mastery and reading streaks.</p>
                        </div>
                        <img src="/projects/lingofable/assets/bento-2-track-progress.png" alt="Progress tracking" className="bento-img" />
                    </div>
                    <div className="bento-item bento-3">
                        <div className="bento-content">
                            <h3 className="bento-title">Always at the perfect i+1 difficulty</h3>
                            <p className="bento-desc">Adaptive algorithms that adjust sentence complexity in real-time.</p>
                        </div>
                        <img src="/projects/lingofable/assets/bento-3-i+1-difficulty.png" alt="Adaptive difficulty" className="bento-img" />
                    </div>
                </div>
            </section>

            {/* Real Progress */}
            <section id="features" className="section">
                <span className="section-label">Design</span>
                <h2 className="section-title">Designed to help learners make real progress</h2>

                <div className="features-container">
                    <div className="features-list">
                        <div className="feature-card active">
                            <h3 className="feature-title">Story-based Learning</h3>
                            <p className="feature-desc">Natural language acquisition through immersive narratives.</p>
                        </div>
                        <div className="feature-card">
                            <h3 className="feature-title">Spaced Repetition System</h3>
                            <p className="feature-desc">Retain vocabulary longer with intelligent review cycles.</p>
                        </div>
                        <div className="feature-card">
                            <h3 className="feature-title">Immersive Dictionary</h3>
                            <p className="feature-desc">Instant context-aware translations within every story.</p>
                        </div>
                        <div className="feature-card">
                            <h3 className="feature-title">Smart Progress Tracking</h3>
                            <p className="feature-desc">Monitor your fluency gains with detailed analytics.</p>
                        </div>
                    </div>
                    <div className="mockup-container">
                        <div className="phone-mockup">
                            <div className="phone-screen">
                                <img src="/projects/lingofable/assets/onboarding-words.png" alt="App interface" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Teaching users how to interact */}
            <section id="interaction" className="section">
                <span className="section-label">User Interaction</span>
                <h2 className="section-title">Teaching users how to interact</h2>
                <div className="feature-card" style={{ marginBottom: '40px', backgroundColor: '#fcfcfc' }}>
                    <p className="section-text">
                        We developed interactive tutorials that guide users through the core mechanics of the app,
                        ensuring they understand how to use the immersive reading tools effectively.
                    </p>
                    <div className="interaction-images" style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                        <img
                            src="/projects/lingofable/assets/onboarding-words.png"
                            alt="Interaction 1"
                            style={{ width: '48%', borderRadius: '12px', border: '1px solid var(--border-color)' }}
                        />
                        <img
                            src="/projects/lingofable/assets/onboarding-fables.png"
                            alt="Interaction 2"
                            style={{ width: '48%', borderRadius: '12px', border: '1px solid var(--border-color)' }}
                        />
                    </div>
                </div>
            </section>

            {/* Onboarding */}
            <section id="onboarding" className="section">
                <span className="section-label">Onboarding Flow</span>
                <h2 className="section-title">Crafting the perfect onboarding</h2>
                <p className="section-text">
                    A seamless entry point is crucial for retention. We designed a flow that identifies the user's level
                    and interests within minutes.
                </p>

                <div className="onboarding-container">
                    <div className="onboarding-row">
                        <div className="onboarding-screen">
                            <img src="/projects/lingofable/assets/onboarding-test-1.png" alt="Step 1" className="onboarding-img" />
                        </div>
                        <div className="onboarding-screen">
                            <img src="/projects/lingofable/assets/onboarding-test-2.png" alt="Step 2" className="onboarding-img" />
                        </div>
                        <div className="onboarding-screen">
                            <img src="/projects/lingofable/assets/onboarding-test-3.png" alt="Step 3" className="onboarding-img" />
                        </div>
                    </div>
                    <div className="onboarding-row">
                        <div className="onboarding-screen">
                            <img src="/projects/lingofable/assets/onboarding-fables.png" alt="Step 4" className="onboarding-img" />
                        </div>
                        <div className="onboarding-screen">
                            <img src="/projects/lingofable/assets/onboarding-commit.png" alt="Step 5" className="onboarding-img" />
                        </div>
                        <div className="onboarding-screen">
                            <img src="/projects/lingofable/assets/onboarding-words.png" alt="Step 6" className="onboarding-img" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Learning */}
            <section id="reflection" className="section">
                <span className="section-label">Reflection</span>
                <h2 className="section-title">What we learned</h2>
                <p className="section-text">
                    Building Lingofable from scratch taught us the importance of user feedback and iterative design. We
                    learned that simple is often better when it comes to learning tools.
                </p>

                <div className="reflection-photo-container">
                    <img src="/assets/images/reflection-photo.jpg" alt="Team meeting" className="reflection-photo" />
                </div>
            </section>
        </CaseLayout>
    );
}