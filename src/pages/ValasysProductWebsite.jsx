import { Link } from 'react-router-dom';

import CaseLayout from '../components/CaseLayout';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { useRevealObserver } from '../hooks/useRevealObserver';
import { useFeatureCards } from '../hooks/useFeatureCards';

import '../styles/valasys-product-website.css';

const TOC = [
    { id: 'challenge', num: '01', label: 'The Challenge' },
    { id: 'understanding', num: '02', label: 'Understanding the Product' },
    { id: 'process', num: '03', label: 'Design Process' },
    { id: 'direction', num: '04', label: 'Design Direction' },
    { id: 'interaction', num: '05', label: 'Interaction Design' },
    { id: 'experience', num: '06', label: 'Final Experience' },
    { id: 'outcome', num: '07', label: 'Outcome & Learnings' }
];

const PROCESS_STEPS = [
    {
        num: '01',
        label: 'Research',
        desc: 'Audited existing site, competitor patterns, and B2B SaaS conventions.'
    },
    {
        num: '02',
        label: 'Information Architecture',
        desc: 'Mapped product capabilities into a clear content hierarchy.'
    },
    {
        num: '03',
        label: 'Wireframes',
        desc: 'Structured page layouts and content flow before visual design.'
    },
    {
        num: '04',
        label: 'Visual Exploration',
        desc: 'Tested typography, color, card systems, and spacing directions.'
    },
    {
        num: '05',
        label: 'Interaction Design',
        desc: 'Designed hover, scroll, and focus behaviors for engagement.'
    },
    {
        num: '06',
        label: 'Prototype',
        desc: 'Assembled the full interactive prototype for review and iteration.'
    }
];

export default function ValasysProductWebsite() {
    useScrollSpy();
    useRevealObserver();
    useFeatureCards();

    return (
        <CaseLayout toc={TOC} contentClassName="vpw-page">

            {/* ============================================
                00 — HERO
                ============================================ */}
            <div className="vpw-hero vpw-reveal">
                <p className="vpw-hero-eyebrow">B2B SaaS · UI/UX · Interaction Design</p>
                <h1>Valasys Product Website</h1>
                <p className="vpw-hero-statement">
                    Making a complex B2B sales-intelligence product easier to explore through interaction design.
                </p>
                <div className="vpw-hero-meta">
                    <div className="vpw-hero-meta-item">
                        <span className="vpw-hero-meta-label">Role</span>
                        <span className="vpw-hero-meta-value">UI/UX Designer</span>
                    </div>
                    <div className="vpw-hero-meta-item">
                        <span className="vpw-hero-meta-label">Focus</span>
                        <span className="vpw-hero-meta-value">Website Design · Interaction Design · Prototyping</span>
                    </div>
                    <div className="vpw-hero-meta-item">
                        <span className="vpw-hero-meta-label">Company</span>
                        <span className="vpw-hero-meta-value">Valasys Media</span>
                    </div>
                </div>
            </div>

            {/* <div className="vpw-full-bleed vpw-reveal">
                <div className="vpw-placeholder vpw-placeholder--hero">
                    <div className="vpw-placeholder-inner">
                        <div className="vpw-placeholder-icon">▲</div>
                        <span>Full-page website preview — replace with actual screenshot or prototype embed</span>
                    </div>
                </div>
            </div> */}

            {/* ============================================
                01 — THE CHALLENGE
                ============================================ */}
            <section id="challenge" className="section">
                <div className="vpw-editorial vpw-reveal">
                    <span className="section-label">01 — The Challenge</span>
                    <h2 className="vpw-statement--large">
                        B2B products are complex.<br />Their websites don't have to be.
                    </h2>
                </div>

                <div className="vpw-two-col vpw-two-col--wide-first vpw-mt-lg vpw-reveal">
                    <div className="vpw-challenge-text">
                        <p className="section-text">
                            Valasys is a B2B sales-intelligence platform with multiple product capabilities.
                            The challenge was to communicate a complex product clearly while making the website
                            feel more engaging, modern, and product-led.
                        </p>
                        <div className="vpw-challenge-pills">
                            <span className="vpw-pill">Multiple capabilities</span>
                            <span className="vpw-pill">Complex information hierarchy</span>
                            <span className="vpw-pill">Need for progressive disclosure</span>
                        </div>
                    </div>
                    <div className="vpw-full-bleed-inside">
                        <div className="vpw-placeholder vpw-placeholder--portrait">
                            <div className="vpw-placeholder-inner">
                                <div className="vpw-placeholder-icon">◎</div>
                                <span>Existing website<br />before redesign</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================
                02 — UNDERSTANDING THE PRODUCT
                ============================================ */}
            <section id="understanding" className="section">
                <div className="vpw-editorial vpw-reveal">
                    <span className="section-label">02 — Understanding the Product</span>
                    <h2 className="section-title">What Valasys does — and why the website needed a new approach</h2>
                    <p className="section-text">
                        Valasys offers several product capabilities under one platform. The website needed to
                        explain each capability while maintaining a clear hierarchy and guiding users toward
                        product exploration and relevant CTAs.
                    </p>
                </div>

                <div className="vpw-journey vpw-reveal">
                    <div className="vpw-journey-step">
                        <div className="vpw-journey-num">01</div>
                        <h4>Discover</h4>
                        <p>User arrives and identifies relevance</p>
                    </div>
                    <div className="vpw-journey-arrow">→</div>
                    <div className="vpw-journey-step">
                        <div className="vpw-journey-num">02</div>
                        <h4>Understand</h4>
                        <p>Product value becomes clear</p>
                    </div>
                    <div className="vpw-journey-arrow">→</div>
                    <div className="vpw-journey-step">
                        <div className="vpw-journey-num">03</div>
                        <h4>Explore</h4>
                        <p>Capabilities are revealed progressively</p>
                    </div>
                    <div className="vpw-journey-arrow">→</div>
                    <div className="vpw-journey-step vpw-journey-step--active">
                        <div className="vpw-journey-num">04</div>
                        <h4>Convert</h4>
                        <p>User takes the next action</p>
                    </div>
                </div>

                <div className="vpw-full-bleed vpw-mt-lg vpw-reveal">
                    <div className="vpw-placeholder vpw-placeholder--wide">
                        <div className="vpw-placeholder-inner">
                            <div className="vpw-placeholder-icon">⬡</div>
                            <span>Product capability architecture — replace with actual diagram or UI</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================
                03 — DESIGN PROCESS
                ============================================ */}
            <section id="process" className="section">
                <div className="vpw-editorial vpw-reveal">
                    <span className="section-label">03 — Design Process</span>
                    <h2 className="section-title">Structured UI/UX, not just visual styling</h2>
                    <p className="section-text">
                        Each step informed the next, ensuring the visual and interaction decisions were
                        grounded in research and architecture.
                    </p>
                </div>

                <div className="vpw-process vpw-reveal">
                    {PROCESS_STEPS.map((step, i) => (
                        <div className="vpw-process-card" key={step.num}>
                            <div className="vpw-process-card-head">
                                <span className="vpw-process-num">{step.num}</span>
                                {i < PROCESS_STEPS.length - 1 && <div className="vpw-process-line" />}
                            </div>
                            <h4>{step.label}</h4>
                            <p>{step.desc}</p>
                            <div className="vpw-placeholder vpw-placeholder--thumb">
                                <span>Thumbnail</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="vpw-full-bleed vpw-mt-lg vpw-reveal">
                    <div className="vpw-placeholder vpw-placeholder--wide">
                        <div className="vpw-placeholder-inner">
                            <div className="vpw-placeholder-icon">⊞</div>
                            <span>Process documentation — research artifacts, wireframes, IA maps</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================
                04 — DESIGN DIRECTION
                ============================================ */}
            <section id="direction" className="section">
                <div className="vpw-editorial vpw-reveal">
                    <span className="section-label">04 — Design Direction</span>
                    <h2 className="section-title">Evolving the visual system</h2>
                    <p className="section-text">
                        The visual direction was developed through exploration of layout patterns,
                        card-based UI, typography, hierarchy, and product-focused SaaS interface design.
                    </p>
                </div>

                {/* Visual Exploration — Large + Small layout */}
                <div className="vpw-direction-row vpw-reveal">
                    <div className="vpw-direction-large">
                        <div className="vpw-placeholder vpw-placeholder--screenshot">
                            <div className="vpw-placeholder-inner">
                                <div className="vpw-placeholder-icon">◇</div>
                                <span>Layout exploration — early direction</span>
                            </div>
                        </div>
                        <p className="vpw-direction-caption">Layout exploration</p>
                    </div>
                    <div className="vpw-direction-stack">
                        <div className="vpw-placeholder vpw-placeholder--screenshot-sm">
                            <div className="vpw-placeholder-inner">
                                <div className="vpw-placeholder-icon">Aa</div>
                                <span>Typography system</span>
                            </div>
                        </div>
                        <div className="vpw-placeholder vpw-placeholder--screenshot-sm">
                            <div className="vpw-placeholder-inner">
                                <div className="vpw-placeholder-icon">■</div>
                                <span>Card system & components</span>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="vpw-direction-caption vpw-direction-caption--block vpw-reveal">
                    Visual Language — Typography, Color, Cards, Spacing, UI Hierarchy
                </p>

                <div className="vpw-full-bleed vpw-reveal">
                    <div className="vpw-placeholder vpw-placeholder--wide">
                        <div className="vpw-placeholder-inner">
                            <div className="vpw-placeholder-icon">◧</div>
                            <span>Visual language overview — color palette, type scale, spacing tokens, card variants</span>
                        </div>
                    </div>
                </div>

                {/* Design Iterations */}
                <div className="vpw-direction-row vpw-mt-lg vpw-reveal">
                    <div className="vpw-direction-stack">
                        <div className="vpw-placeholder vpw-placeholder--screenshot-sm">
                            <div className="vpw-placeholder-inner">
                                <div className="vpw-placeholder-icon">◐</div>
                                <span>Early iteration</span>
                            </div>
                        </div>
                        <div className="vpw-placeholder vpw-placeholder--screenshot-sm">
                            <div className="vpw-placeholder-inner">
                                <div className="vpw-placeholder-icon">◑</div>
                                <span>Refined iteration</span>
                            </div>
                        </div>
                    </div>
                    <div className="vpw-direction-large">
                        <div className="vpw-placeholder vpw-placeholder--screenshot">
                            <div className="vpw-placeholder-inner">
                                <div className="vpw-placeholder-icon">◉</div>
                                <span>Final design direction</span>
                            </div>
                        </div>
                        <p className="vpw-direction-caption">Design iterations — early to refined</p>
                    </div>
                </div>
            </section>

            {/* ============================================
                05 — INTERACTION DESIGN
                ============================================ */}
            <section id="interaction" className="section">
                <div className="vpw-editorial vpw-reveal">
                    <span className="section-label">05 — Interaction Design</span>
                    <h2 className="vpw-statement--large">
                        What if the website didn't just explain the product —<br />but let users explore it?
                    </h2>
                    <p className="section-text" style={{ marginTop: '24px' }}>
                        Two key interaction patterns defined the prototype experience — each solving
                        a specific UX problem through motion and feedback.
                    </p>
                </div>

                {/* Interaction 01 — Hover → Focus */}
                <div className="vpw-interaction vpw-reveal">
                    <div className="vpw-interaction-header">
                        <span className="vpw-interaction-label">Interaction 01</span>
                        <h3 className="vpw-interaction-title">Hover → Focus</h3>
                    </div>

                    <div className="vpw-interaction-body">
                        <div className="vpw-interaction-visual">
                            <div className="vpw-glow-demos">
                                <div className="vpw-glow-card" tabIndex="0" role="button" aria-label="Interactive demo card — Sales Intelligence">
                                    <div className="vpw-glow-card-border" />
                                    <div className="vpw-glow-card-content">
                                        <span className="vpw-glow-card-eyebrow">Product Capability</span>
                                        <h4>Sales Intelligence</h4>
                                        <p>Real-time prospect data and engagement insights.</p>
                                    </div>
                                </div>
                                <div className="vpw-glow-card vpw-glow-card--offset" tabIndex="0" role="button" aria-label="Interactive demo card — Data Enrichment">
                                    <div className="vpw-glow-card-border" />
                                    <div className="vpw-glow-card-content">
                                        <span className="vpw-glow-card-eyebrow">Product Capability</span>
                                        <h4>Data Enrichment</h4>
                                        <p>Complete and accurate company profiles.</p>
                                    </div>
                                </div>
                                <p className="vpw-demo-hint">Hover or focus the cards above</p>
                            </div>
                        </div>

                        <div className="vpw-interaction-text">
                            <div className="vpw-interaction-block-item">
                                <span className="vpw-interaction-tag">Problem</span>
                                <p>Static cards lacked interaction feedback and visual focus. Users had no signal that elements were explorable.</p>
                            </div>
                            <div className="vpw-interaction-block-item vpw-interaction-block-item--decision">
                                <span className="vpw-interaction-tag vpw-interaction-tag--decision">Decision</span>
                                <p>Introduce a subtle edge-glow interaction that responds to cursor movement — creating a magnetic, focused feel.</p>
                            </div>
                            <div className="vpw-interaction-block-item vpw-interaction-block-item--purpose">
                                <span className="vpw-interaction-tag vpw-interaction-tag--purpose">Purpose</span>
                                <p>Create focus and depth without adding unnecessary visual noise. Reward exploration.</p>
                            </div>
                        </div>
                    </div>

                    <div className="vpw-logic vpw-reveal">
                        <div className="vpw-logic-row">
                            <span className="vpw-logic-node">User Hover</span>
                            <span className="vpw-logic-connector" />
                            <span className="vpw-logic-node">Visual Feedback</span>
                            <span className="vpw-logic-connector" />
                            <span className="vpw-logic-node vpw-logic-node--end">Focus</span>
                        </div>
                    </div>
                </div>

                {/* Interaction 02 — Scroll → Discover */}
                <div className="vpw-interaction vpw-reveal">
                    <div className="vpw-interaction-header">
                        <span className="vpw-interaction-label">Interaction 02</span>
                        <h3 className="vpw-interaction-title">Scroll → Discover</h3>
                    </div>

                    <div className="vpw-interaction-body vpw-interaction-body--reversed">
                        <div className="vpw-interaction-visual">
                            <div className="vpw-scroll-demos">
                                <div className="vpw-scroll-card-stack">
                                    <div className="vpw-scroll-card vpw-scroll-card--back">
                                        <span className="vpw-scroll-card-tag">Capability 01</span>
                                        <h4>Lead Discovery</h4>
                                    </div>
                                    <div className="vpw-scroll-card vpw-scroll-card--mid">
                                        <span className="vpw-scroll-card-tag">Capability 02</span>
                                        <h4>Data Enrichment</h4>
                                    </div>
                                    <div className="vpw-scroll-card vpw-scroll-card--front">
                                        <span className="vpw-scroll-card-tag">Capability 03</span>
                                        <h4>Pipeline Intelligence</h4>
                                    </div>
                                </div>
                                <p className="vpw-demo-hint">Scroll-triggered card reveal</p>
                            </div>
                        </div>

                        <div className="vpw-interaction-text">
                            <div className="vpw-interaction-block-item">
                                <span className="vpw-interaction-tag">Problem</span>
                                <p>Showing multiple product capabilities simultaneously increased visual density and reduced comprehension.</p>
                            </div>
                            <div className="vpw-interaction-block-item vpw-interaction-block-item--decision">
                                <span className="vpw-interaction-tag vpw-interaction-tag--decision">Decision</span>
                                <p>Use scroll progression to reveal and animate content progressively, one capability at a time.</p>
                            </div>
                            <div className="vpw-interaction-block-item vpw-interaction-block-item--purpose">
                                <span className="vpw-interaction-tag vpw-interaction-tag--purpose">Purpose</span>
                                <p>Turn product exploration into a guided visual narrative rather than an information dump.</p>
                            </div>
                        </div>
                    </div>

                    <div className="vpw-logic vpw-reveal">
                        <div className="vpw-logic-row">
                            <span className="vpw-logic-node">User Scroll</span>
                            <span className="vpw-logic-connector" />
                            <span className="vpw-logic-node">Card Movement</span>
                            <span className="vpw-logic-connector" />
                            <span className="vpw-logic-node">Information Reveal</span>
                            <span className="vpw-logic-connector" />
                            <span className="vpw-logic-node vpw-logic-node--end">Discovery</span>
                        </div>
                    </div>
                </div>

                {/* <div className="vpw-full-bleed vpw-mt-lg vpw-reveal">
                    <div className="vpw-placeholder vpw-placeholder--wide-tall">
                        <div className="vpw-placeholder-inner">
                            <div className="vpw-placeholder-icon">▶</div>
                            <span>Full prototype recording — replace with video embed or GIF</span>
                        </div>
                    </div>
                </div> */}
            </section>

            {/* ============================================
                06 — FINAL EXPERIENCE
                ============================================ */}
            <section id="experience" className="section">
                <div className="vpw-editorial vpw-reveal">
                    <span className="section-label">06 — Final Experience</span>
                    <h2 className="section-title">The complete website walkthrough</h2>
                </div>

                <div className="vpw-walkthrough vpw-reveal">
                    <div className="vpw-walkthrough-step">
                        <span className="vpw-walkthrough-label">Hero</span>
                        <img
                            src="/assets/images/Valasys product website hero section.jpg"
                            alt="Valasys Product Website — hero section"
                            className="vpw-walkthrough-img"
                        />
                    </div>
                    <div className="vpw-walkthrough-step">
                        <span className="vpw-walkthrough-label">CTA</span>
                        <img
                            src="/assets/images/Valasys product website CTA.png"
                            alt="Valasys Product Website — CTA section"
                            className="vpw-walkthrough-img"
                        />
                    </div>
                </div>

                <div className="vpw-final-image-wrapper vpw-reveal">
                    <img
                        src="/assets/images/ValasysProductWebsite.jpg"
                        alt="Valasys Product Website — final design"
                        className="vpw-final-image"
                    />
                </div>
            </section>

            {/* ============================================
                07 — OUTCOME & LEARNINGS
                ============================================ */}
            <section id="outcome" className="section">
                <div className="vpw-editorial vpw-reveal">
                    <span className="section-label">07 — Outcome & Learnings</span>
                    <h2 className="section-title">What it taught me</h2>
                </div>

                <div className="vpw-learnings vpw-reveal">
                    <div className="vpw-learning">
                        <div className="vpw-learning-num">01</div>
                        <h4>Motion needs a job</h4>
                        <p>
                            Animation should support hierarchy, feedback, or progression rather than
                            simply decorate the interface.
                        </p>
                    </div>
                    <div className="vpw-learning">
                        <div className="vpw-learning-num">02</div>
                        <h4>Complex products need progressive disclosure</h4>
                        <p>
                            Users don't need every capability explained simultaneously. Reveal
                            information as users are ready for it.
                        </p>
                    </div>
                    <div className="vpw-learning">
                        <div className="vpw-learning-num">03</div>
                        <h4>B2B doesn't have to feel static</h4>
                        <p>
                            Enterprise experiences can remain structured while still feeling
                            interactive and modern.
                        </p>
                    </div>
                </div>

                <div className="vpw-final-statement vpw-reveal">
                    <p>
                        The result is a website that communicates product depth through interaction —
                        not through information overload. A recruiter scrolling through this case study
                        should understand the problem, the process, the craft, and the thinking
                        behind every decision.
                    </p>
                </div>
            </section>

            {/* NEXT PROJECT */}
            <div className="vpw-next-project vpw-reveal">
                <span className="vpw-next-label">Next Project</span>
                <p className="vpw-next-title">
                    <Link to="/projects/valasys">Valasys Halloween Campaign →</Link>
                </p>
            </div>
        </CaseLayout>
    );
}
