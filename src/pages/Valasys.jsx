import CaseLayout from '../components/CaseLayout';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { useFeatureCards } from '../hooks/useFeatureCards';

import '../styles/valasys.css';

const TOC = [
    { id: 'context', num: '01', label: 'Context' },
    { id: 'problem', num: '02', label: 'The problem' },
    { id: 'solution', num: '03', label: 'The solution' },
    { id: 'execution', num: '04', label: 'Execution' },
    { id: 'landing', num: '05', label: 'Landing Page' },
    { id: 'marketing', num: '06', label: 'Email & Ad creatives' },
    { id: 'interaction', num: '07', label: 'Interaction design' },
    { id: 'reflection', num: '08', label: 'Reflection' }
];

export default function Valasys() {
    useScrollSpy();
    useFeatureCards();

    return (
        <CaseLayout toc={TOC}>
            {/* Hero Section */}
            <div className="hero-image-container halloween-hero">
                <div>
                    <p className="emoji">🎃</p>
                    <h1>Halloween Campaign</h1>
                    <p>Driving high-intent clicks through thematic positioning</p>
                </div>
            </div>

            <header className="project-header">
                <div className="project-tags">
                    <span className="tag">B2B SaaS</span>
                    <span className="tag">Performance Design</span>
                </div>
                <h1 className="project-title">🎃 Building a Halloween Campaign for a Sales Intelligence SaaS (0 → 1)</h1>
                <p className="section-text project-title-halloween">
                    Driving high-intent clicks through thematic positioning, not gimmicks.
                </p>
                <p className="section-text">
                    We designed and launched a Halloween campaign for a B2B sales intelligence platform, focused on
                    increasing top-of-funnel engagement across ads, email, and landing pages — without compromising
                    trust or product clarity.
                </p>

                <div className="project-meta-grid">
                    <div className="meta-item">
                        <p className="meta-label">Role</p>
                        <p className="meta-value">Product Designer, Campaign Strategist, Performance Design</p>
                    </div>
                    <div className="meta-item">
                        <p className="meta-label">Team</p>
                        <p className="meta-value">Marketing Lead, Performance Marketer</p>
                    </div>
                    <div className="meta-item">
                        <p className="meta-label">Timeline</p>
                        <p className="meta-value">Oct 2025 (3 weeks)</p>
                    </div>
                    <div className="meta-item">
                        <p className="meta-label">Skills</p>
                        <p className="meta-value">Conversion design, B2B messaging, Landing page UX, Ad & email design</p>
                    </div>
                </div>
            </header>

            {/* CONTEXT */}
            <section id="context" className="section">
                <span className="section-label">Context</span>
                <h2 className="section-title">B2B users don’t “celebrate” campaigns — they evaluate them</h2>
                <p className="section-text">
                    Unlike B2C, seasonal campaigns in B2B often fail because they feel gimmicky, reduce perceived
                    credibility, or distract from core value. At the same time, ignoring seasonal moments = missed
                    attention.
                </p>
                <div className="feature-card halloween-problem">
                    <p>The challenge was clear:</p>
                    <p>How do we leverage Halloween without diluting trust?</p>
                </div>
            </section>

            {/* THE PROBLEM */}
            <section id="problem" className="section">
                <span className="section-label">The Problem</span>
                <h2 className="section-title">High impressions, low engagement quality</h2>
                <p className="section-text">
                    From past campaigns:
                </p>
                <div className="features-container" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                    <div className="feature-card">
                        <h3 className="feature-title">Ads visibility</h3>
                        <p className="feature-desc">Ads were getting visibility but not strong CTR.</p>
                    </div>
                    <div className="feature-card">
                        <h3 className="feature-title">Email engagement</h3>
                        <p className="feature-desc">Email engagement plateaued at ~1.5–2%.</p>
                    </div>
                    <div className="feature-card">
                        <h3 className="feature-title">Landing pages</h3>
                        <p className="feature-desc">Landing pages had low dwell time due to heavy messaging.</p>
                    </div>
                </div>
            </section>

            {/* THE SOLUTION */}
            <section id="solution" className="section">
                <span className="section-label">The Solution</span>
                <h2 className="section-title">“Uncover Hidden Opportunities” — a theme that fits the product</h2>
                <p className="section-text">
                    Instead of going “spooky,” we aligned Halloween with product value:{' '}
                    <strong>Sales intelligence = uncovering what others miss.</strong>
                </p>

                <div className="bento-grid">
                    <div className="bento-item bento-1 halloween-dark">
                        <div className="bento-content">
                            <h3>Core Positioning</h3>
                            <p>“Stop guessing. Start uncovering.”</p>
                        </div>
                        <div style={{ fontSize: '4rem', textAlign: 'center', marginTop: '40px', opacity: 0.3 }}>🕵️‍♂️</div>
                    </div>
                    <div className="bento-item bento-2">
                        <div className="bento-content">
                            <h3 className="bento-title">The Translation</h3>
                            <p className="bento-desc">Not ghosts — but pipeline gaps. Hidden data, missed leads, invisible opportunities.</p>
                        </div>
                    </div>
                    <div className="bento-item bento-3">
                        <div className="bento-content">
                            <h3 className="bento-title">Brand Alignment</h3>
                            <p className="bento-desc">Narrative was on-brand, relevant, and memorable without being gimmicky.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* EXECUTION */}
            <section id="execution" className="section">
                <span className="section-label">Execution</span>
                <h2 className="section-title">Designed as a system, not isolated assets</h2>
                <p className="section-text">
                    We didn’t treat ads, emails, and landing pages separately. Everything followed one consistent flow:{' '}
                    <strong>Ad → Email → Landing Page → Conversion.</strong>
                </p>
                <div className="onboarding-container">
                    <div className="onboarding-row">
                        <div className="onboarding-screen halloween-step">
                            <h4>Consistent Flow</h4>
                            <p style={{ fontSize: '0.8rem', color: '#666' }}>Reinforced the same idea across all touchpoints.</p>
                        </div>
                        <div className="onboarding-screen halloween-step">
                            <h4>Reduced Friction</h4>
                            <p style={{ fontSize: '0.8rem', color: '#666' }}>Decreased cognitive friction between steps.</p>
                        </div>
                        <div className="onboarding-screen halloween-step">
                            <h4>Increased Intent</h4>
                            <p style={{ fontSize: '0.8rem', color: '#666' }}>Each step validated the user's decision to continue.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* LANDING PAGE */}
            <section id="landing" className="section">
                <span className="section-label">Landing Page</span>
                <h2 className="section-title">Built for fast clarity, not exploration</h2>
                <div className="features-container">
                    <div className="features-list">
                        <div className="feature-card active">
                            <h3 className="feature-title">The Hook</h3>
                            <p className="feature-desc">“How many opportunities are you missing?” — communicatiing value within seconds.</p>
                        </div>
                        <div className="feature-card">
                            <h3 className="feature-title">Reframing the Problem</h3>
                            <p className="feature-desc">Highlighting that most sales teams rely on incomplete data.</p>
                        </div>
                        <div className="feature-card">
                            <h3 className="feature-title">Product Clarity</h3>
                            <p className="feature-desc">Directly showing how the tool uncovers hidden prospects.</p>
                        </div>
                        <div className="feature-card halloween-result">
                            <h3 className="feature-title">Result</h3>
                            <p className="feature-desc">CTR: 1.9% | Engagement: 10–12s</p>
                        </div>
                    </div>
                    <div className="mockup-container">
                        <div
                            style={{
                                backgroundColor: '#333',
                                width: '300px',
                                height: '500px',
                                borderRadius: '20px',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{ background: '#efeadf', height: '100px', padding: '20px' }}>
                                <div style={{ height: '10px', width: '60%', background: '#ddd', borderRadius: '5px', marginBottom: '10px' }}></div>
                                <div style={{ height: '15px', width: '90%', background: '#1a1a1a', borderRadius: '5px' }}></div>
                            </div>
                            <div style={{ padding: '20px', color: 'white' }}>
                                <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>You're missing pipeline gaps.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MARKETING ASSETS */}
            <section id="marketing" className="section">
                <span className="section-label">Marketing Assets</span>
                <h2 className="section-title">Designed to trigger curiosity, not explain everything</h2>

                <div className="onboarding-container">
                    <div className="onboarding-row">
                        <div className="feature-card" style={{ gridColumn: 'span 2' }}>
                            <h3 className="feature-title">Email Campaign</h3>
                            <p className="feature-desc">One sharp idea, one clear CTA, one curiosity gap. Subject: “You’re probably missing 30% of your pipeline”.</p>
                            <p style={{ marginTop: '15px', fontWeight: 700, color: '#0d5d3e' }}>Result: 2.7% CTR (Benchmark: 1.5–2%)</p>
                        </div>
                        <div className="feature-card">
                            <h3 className="feature-title">Ad Creatives</h3>
                            <p className="feature-desc">Pattern interrupt with subtle dark theme and “Hidden” UI elements.</p>
                            <p style={{ marginTop: '15px', fontWeight: 700, color: '#0d5d3e' }}>Result: 2% CTR</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTERACTION DESIGN */}
            <section id="interaction" className="section">
                <span className="section-label">Interaction & Behavior Design</span>
                <h2 className="section-title">Reducing friction across the funnel</h2>
                <p className="section-text">
                    Key decisions included consistent messaging across all touchpoints and progressive disclosure (ad →
                    email → LP). B2B users scan fast and ignore fluff; we respected that behavior.
                </p>
                <div className="feature-card" style={{ backgroundColor: '#f5f1ea' }}>
                    <p style={{ fontWeight: 600 }}>Why this worked:</p>
                    <ul style={{ marginTop: '10px', listStylePosition: 'inside', color: '#666' }}>
                        <li>Scan fast</li>
                        <li>Decide quickly</li>
                        <li>Ignore fluffy decoration</li>
                    </ul>
                </div>
            </section>

            {/* REFLECTION */}
            <section id="reflection" className="section">
                <span className="section-label">Reflection</span>
                <h2 className="section-title">What I learned</h2>
                <div className="features-container" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                    <div className="feature-card">
                        <h3 className="feature-title">Product Truth</h3>
                        <p className="feature-desc">Thematic campaigns must map to product truth or they weaken the value.</p>
                    </div>
                    <div className="feature-card">
                        <h3 className="feature-title">Clarity {'>'} Creativity</h3>
                        <p className="feature-desc">Clarity beats creativity in B2B. Creativity should support understanding.</p>
                    </div>
                    <div className="feature-card">
                        <h3 className="feature-title">Speed = Conversion</h3>
                        <p className="feature-desc">10–12s engagement means users got what they needed fast.</p>
                    </div>
                </div>

                <div style={{ marginTop: '60px', padding: '40px', background: '#1a1a1a', color: 'white', borderRadius: '24px', textAlign: 'center' }}>
                    <h3 style={{ color: 'white', fontSize: '1.8rem', marginBottom: '20px' }}>Final Thought</h3>
                    <p style={{ fontStyle: 'italic', opacity: 0.8, fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                        “Seasonal campaigns in B2B shouldn’t feel like decoration. They should feel like a sharper way to
                        communicate the same value.”
                    </p>
                </div>
            </section>
        </CaseLayout>
    );
}