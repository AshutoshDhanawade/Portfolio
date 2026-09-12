import { Link } from 'react-router-dom';

import CaseLayout from '../components/CaseLayout';
import ArchitectureCanvas from '../components/fancrew/ArchitectureCanvas';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { useRevealObserver } from '../hooks/useRevealObserver';
import { useFeatureCards } from '../hooks/useFeatureCards';

import '../styles/fancrew.css';

const TOC = [
    { id: 'challenge', num: '01', label: 'The challenge' },
    { id: 'goal', num: '02', label: 'Goal' },
    { id: 'role', num: '03', label: 'My role' },
    { id: 'architecture', num: '04', label: 'Product architecture' },
    { id: 'core-loop', num: '05', label: 'Core product loop' },
    { id: 'insights', num: '06', label: 'Insights' },
    { id: 'creator-experience', num: '07', label: 'Creator experience' },
    { id: 'crew-experience', num: '08', label: 'Crew experience' },
    { id: 'workspace', num: '09', label: 'Workspace' },
    { id: 'collaboration', num: '10', label: 'Collaboration' },
    { id: 'deliverables', num: '11', label: 'Deliverables & revisions' },
    { id: 'unhappy-path', num: '12', label: 'The unhappy path' },
    { id: 'design-system', num: '13', label: 'Design system' },
    { id: 'approach', num: '14', label: 'My approach' },
    { id: 'outcome', num: '15', label: 'Outcome' },
    { id: 'reflection', num: '16', label: 'Reflection' }
];

const CREATOR_LOOP_STEPS = [
    'Discover Crew',
    'View Profile',
    'Post Project',
    'Review Applications',
    'Shortlist',
    'Hire',
    'Workspace',
    'Review Work',
    'Approve / Revise',
    'Complete'
];

const CREW_LOOP_STEPS = [
    'Onboarding',
    'Profile + Portfolio',
    'Discover Projects',
    'Project Details',
    'Apply',
    'Shortlisted',
    'Hired',
    'Workspace',
    'Submit Work',
    'Revision / Approval',
    'Payment'
];

const ROLE_PM_ITEMS = [
    'MVP scope', 'User roles', 'Creator and Crew workflows', 'Project lifecycle',
    'Application and hiring flow', 'Payment flow', 'Collaboration model', 'Edge cases',
    'Product hierarchy', 'Feature priorities'
];

const ROLE_UX_ITEMS = [
    'Authentication & onboarding', 'Creator experience', 'Crew experience', 'Dashboards',
    'Marketplace discovery', 'Professional profiles', 'Project creation', 'Project review',
    'Applications', 'Hiring', 'Payments', 'Project workspace', 'Chat & files', 'Deliverables',
    'Revisions', 'Notifications', 'Supporting states'
];

const ROLE_DS_ITEMS = [
    'Component architecture', 'Variants & tokens', 'Interaction states', 'Creator shell',
    'Crew shell', 'Reusable patterns', 'Responsive foundations'
];

const DS_ITEMS = [
    'Typography', 'Color Tokens', 'Spacing', 'Radius', 'Icons', 'Buttons', 'Inputs', 'Cards',
    'Status Pills', 'Navigation', 'Sidebars', 'Variants'
];

const FUTURE_ITEMS = [
    'Fan experiences',
    'Creator–Fan interactions',
    'Creator monetization',
    'Advanced Crew matching',
    'Richer project collaboration',
    'Advanced payment & dispute workflows',
    'Marketplace intelligence',
    'Recommendations based on project requirements'
];

const APPROACH_STEPS = [
    { title: 'Define the user', text: 'Creator or Crew?' },
    { title: 'Define the goal', text: 'Hire someone or get hired?' },
    { title: 'Map the workflow', text: 'Goal → Actions → Decisions → States → Completion' },
    { title: 'Define the information hierarchy', text: 'What should the user know first? What supports the decision? What is the primary action?' },
    { title: 'Design the interaction', text: 'Only after the workflow was clear did I move into the interface.' },
    { title: 'Systematize', text: 'Apply reusable components and patterns.' },
    { title: 'Think beyond the happy path', text: 'Consider alternate states, failures and recovery.' }
];

const LEARN_CARDS = [
    {
        num: '01',
        title: 'A marketplace is a relationship product.',
        text: "The value isn't just the listing or profile. It's the relationship that happens after two people find each other."
    },
    {
        num: '02',
        title: 'Designing states is as important as designing screens.',
        text: 'The real product appears when users:',
        extra: 'leave → return → revise → reject → cancel → dispute → recover'
    },
    {
        num: '03',
        title: 'Two-sided products require two mental models.',
        text: 'Creators and Crew belong to the same ecosystem but have different jobs and information needs.'
    },
    {
        num: '04',
        title: 'Design systems are product infrastructure.',
        text: 'Consistency across multiple roles and workflows cannot depend on manually designing every screen.'
    }
];

export default function FanCrew() {
    useScrollSpy();
    useRevealObserver();
    useFeatureCards();

    return (
        <CaseLayout toc={TOC} contentClassName="fc-page">
            {/* HERO */}
            <div className="fc-hero fc-reveal">
                <p className="fc-hero-eyebrow">Product Design · Product Management · UX/UI · Design Systems</p>
                <h1>FanCrew</h1>
                <p className="fc-hero-statement">Turning fragmented creative hiring into one connected workflow</p>
                <p className="fc-hero-desc">
                    FanCrew is a creator-focused marketplace that connects Creators with creative professionals —
                    "Crew." For MVP 1, the goal was to make the entire relationship between a Creator and Crew member
                    manageable inside one product — from discovering talent and posting a project to hiring,
                    collaboration, revisions, approval and payment.
                </p>
            </div>

            <div className="hero-image-container fc-reveal">
                <img src="/assets/images/fancrew hero image.png" alt="FanCrew Hero Mockup" className="hero-image" />
            </div>

            <header className="project-header fc-mt-lg">
                <div className="project-tags">
                    <span className="tag">Product Design</span>
                    <span className="tag">Marketplace</span>
                    <span className="tag">Two-Sided Platform</span>
                </div>
                <h1 className="project-title">FanCrew — Creator × Crew Marketplace</h1>
                <p className="section-text">
                    Designing a structured marketplace connecting Creators with creative professionals — from discovery
                    and hiring through collaboration, delivery and payment.
                </p>

                <div className="project-meta-grid">
                    <div className="meta-item">
                        <p className="meta-label">Role</p>
                        <p className="meta-value">Product Management, UX/UI Design, Design Systems</p>
                    </div>
                    <div className="meta-item">
                        <p className="meta-label">Scope</p>
                        <p className="meta-value">MVP 1 — Creator ↔ Crew Marketplace</p>
                    </div>
                    <div className="meta-item">
                        <p className="meta-label">Domain</p>
                        <p className="meta-value">Creator Economy, Creative Hiring, Project Management</p>
                    </div>
                    <div className="meta-item">
                        <p className="meta-label">Focus</p>
                        <p className="meta-value">Product Definition, UX Architecture, Interface Design, Design System</p>
                    </div>
                </div>
            </header>

            {/* 01 — THE CHALLENGE */}
            <section id="challenge" className="section">
                <div className="fc-reveal">
                    <span className="section-label">01 — The Challenge</span>
                    <h2 className="section-title">Hiring creative talent is rarely one single task.</h2>
                    <p className="section-text">
                        For a Creator, finding a designer, editor, photographer or other creative professional often
                        means moving between multiple disconnected tools.
                    </p>
                </div>

                <div className="fc-flow fc-reveal">
                    <span className="fc-flow-step">Find someone</span>
                    <span className="fc-flow-arrow">→</span>
                    <span className="fc-flow-step">Check portfolio</span>
                    <span className="fc-flow-arrow">→</span>
                    <span className="fc-flow-step">Message</span>
                    <span className="fc-flow-arrow">→</span>
                    <span className="fc-flow-step">Discuss requirements</span>
                    <span className="fc-flow-arrow">→</span>
                    <span className="fc-flow-step">Negotiate</span>
                    <span className="fc-flow-arrow">→</span>
                    <span className="fc-flow-step">Share files</span>
                    <span className="fc-flow-arrow">→</span>
                    <span className="fc-flow-step">Manage revisions</span>
                    <span className="fc-flow-arrow">→</span>
                    <span className="fc-flow-step">Make payment</span>
                </div>

                <div className="fc-editorial fc-reveal">
                    <p className="fc-statement--purple" style={{ fontSize: '1.3rem', fontWeight: 500 }}>
                        The bigger opportunity was to bring the entire Creator–Crew relationship into one structured
                        workflow.
                    </p>
                </div>
            </section>

            {/* 02 — GOAL */}
            <section id="goal" className="section">
                <div className="fc-reveal">
                    <span className="section-label">02 — Goal</span>
                    <h2 className="section-title">Validate the Creator ↔ Crew marketplace for MVP 1</h2>
                </div>

                <div className="fc-role-compare fc-reveal">
                    <div className="fc-role-compare-item" style={{ backgroundColor: '#fff' }}>
                        <h3>Creator</h3>
                        <p>Find the right person for a project and get the work completed.</p>
                    </div>
                    <div className="fc-role-compare-item" style={{ backgroundColor: '#fff' }}>
                        <h3>Crew</h3>
                        <p>Find relevant opportunities and get hired for projects that match their skills.</p>
                    </div>
                </div>

                <div className="fc-reveal">
                    <p className="fc-statement--purple" style={{ fontSize: '1.1rem', fontWeight: 500, textAlign: 'center', marginBottom: '24px' }}>
                        The complete lifecycle:
                    </p>
                    <div className="fc-lifecycle">
                        <span className="fc-lifecycle-step">Discover</span>
                        <span className="fc-lifecycle-arrow">→</span>
                        <span className="fc-lifecycle-step">Evaluate</span>
                        <span className="fc-lifecycle-arrow">→</span>
                        <span className="fc-lifecycle-step">Post / Apply</span>
                        <span className="fc-lifecycle-arrow">→</span>
                        <span className="fc-lifecycle-step">Shortlist</span>
                        <span className="fc-lifecycle-arrow">→</span>
                        <span className="fc-lifecycle-step">Hire</span>
                        <span className="fc-lifecycle-arrow">→</span>
                        <span className="fc-lifecycle-step">Collaborate</span>
                        <span className="fc-lifecycle-arrow">→</span>
                        <span className="fc-lifecycle-step">Deliver</span>
                        <span className="fc-lifecycle-arrow">→</span>
                        <span className="fc-lifecycle-step">Approve</span>
                        <span className="fc-lifecycle-arrow">→</span>
                        <span className="fc-lifecycle-step">Complete</span>
                    </div>
                </div>

                <div className="fc-editorial fc-mt-lg fc-reveal">
                    <p className="ashu-voice">
                        Rather than designing isolated screens, I treated the lifecycle as the product.
                    </p>
                </div>
            </section>

            {/* 03 — MY ROLE */}
            <section id="role" className="section">
                <div className="fc-reveal">
                    <span className="section-label">03 — My Role</span>
                    <h2 className="section-title">Product Management & UX/UI Design</h2>
                    <p className="fc-role-intro">
                        I worked on FanCrew across <strong>Product Management and UX/UI Design</strong>, with
                        responsibility spanning product definition, UX architecture, interface design and design-system
                        development.
                    </p>
                </div>

                <div className="fc-role-grid fc-reveal">
                    <div className="fc-role-group">
                        <h3>Product Management</h3>
                        <ul className="fc-role-list">
                            {ROLE_PM_ITEMS.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="fc-role-group">
                        <h3>UX / Product Design</h3>
                        <ul className="fc-role-list">
                            {ROLE_UX_ITEMS.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="fc-role-group">
                        <h3>Design System</h3>
                        <ul className="fc-role-list">
                            {ROLE_DS_ITEMS.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="fc-role-end fc-reveal">
                    <p className="ashu-voice">My responsibility wasn't simply to design screens.</p>
                    <p className="ashu-voice" style={{ marginTop: '12px', color: 'var(--fc-purple)' }}>
                        It was to design a scalable product experience and the system that keeps it consistent.
                    </p>
                </div>
            </section>

            {/* 04 — UNDERSTANDING THE PRODUCT */}
            <section id="architecture" className="section">
                <div className="fc-reveal">
                    <span className="section-label">04 — Understanding the Product</span>
                    <h2 className="section-title">Two user experiences, one connected ecosystem</h2>
                    <p className="section-text">
                        FanCrew has a larger ecosystem involving Fans, Creators, and Crew. This case study focuses
                        specifically on <strong>MVP 1: Creator ↔ Crew Marketplace</strong>.
                    </p>
                </div>

                {/* Product Architecture — Interactive System Canvas */}
                <div className="fc-arch-block fc-reveal">
                    <span className="fc-arch-eyebrow">Product Architecture</span>
                    <h3 className="fc-arch-heading">Two different user journeys. One shared project lifecycle.</h3>
                    <p className="fc-arch-lead">
                        Creators and Crew enter FanCrew from different directions, but their experiences eventually
                        converge around the same project.
                    </p>

                    <ArchitectureCanvas />

                    <div className="fc-arch-outro">
                        <p>The marketplace helps users <em className="ashu-voice fc-arch-accent">find each other</em>.</p>
                        <p>The workspace helps them <em className="ashu-voice fc-arch-accent">succeed together</em>.</p>
                    </div>
                </div>
            </section>

            {/* 05 — THE CORE PRODUCT LOOP */}
            <section id="core-loop" className="section">
                <div className="fc-reveal">
                    <span className="section-label">05 — The Core Product Loop</span>
                    <h2 className="section-title">Two different goals. One connected project lifecycle.</h2>
                </div>

                <div className="fc-loop fc-reveal">
                    {/* Creator Journey */}
                    <div className="fc-loop-col">
                        <p className="fc-loop-question">
                            "I have a project. How do I find the right person and get it completed?"
                        </p>
                        <div className="fc-loop-steps">
                            {CREATOR_LOOP_STEPS.map((step) => (
                                <div className="fc-loop-step" style={{ position: 'relative' }} key={step}>
                                    <div className="fc-loop-dot"></div>
                                    <span className="fc-loop-step-text">{step}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Crew Journey */}
                    <div className="fc-loop-col">
                        <p className="fc-loop-question">
                            "How do I find the right project and turn the opportunity into paid work?"
                        </p>
                        <div className="fc-loop-steps">
                            {CREW_LOOP_STEPS.map((step) => (
                                <div className="fc-loop-step" style={{ position: 'relative' }} key={step}>
                                    <div className="fc-loop-dot"></div>
                                    <span className="fc-loop-step-text">{step}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="fc-loop-converge fc-reveal">
                    <p>Both journeys converge at the Project Workspace — where discovery ends and execution begins.</p>
                </div>
            </section>

            {/* 06 — THREE CORE PRODUCT INSIGHTS */}
            <section id="insights" className="section">
                <div className="fc-reveal">
                    <span className="section-label">06 — Three Core Product Insights</span>
                    <h2 className="section-title fc-mb-lg">What shaped the product decisions</h2>
                </div>

                {/* Insight 01 */}
                <div className="fc-insight fc-reveal">
                    <span className="fc-insight-label">Insight 01</span>
                    <h3>The marketplace needed to sell trust, not just talent.</h3>
                    <div className="fc-two-col fc-two-col--narrow">
                        <div className="fc-insight-body">
                            <p>
                                A Creator can't make a good hiring decision from a name and profile picture.
                            </p>
                            <p>
                                So I treated the Crew profile as a <strong>professional hiring profile</strong>,
                                rather than a traditional social profile.
                            </p>

                            <div className="fc-info-grid" style={{ marginTop: '24px' }}>
                                <div className="fc-info-item">Role</div>
                                <div className="fc-info-item">Skills</div>
                                <div className="fc-info-item">Software Expertise</div>
                                <div className="fc-info-item">Experience</div>
                                <div className="fc-info-item">Portfolio</div>
                                <div className="fc-info-item">Ratings</div>
                                <div className="fc-info-item">Availability</div>
                                <div className="fc-info-item">Previous Work</div>
                                <div className="fc-info-item">Professional Info</div>
                            </div>

                            <p className="fc-insight-highlight">
                                Give Creators enough relevant information to confidently evaluate someone before
                                starting a project.
                            </p>
                        </div>
                        <div className="fc-editorial-img">
                            <div className="fc-placeholder fc-placeholder--screenshot">
                                <span>Crew Profile — Hiring View</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Insight 02 */}
                <div className="fc-insight fc-reveal">
                    <span className="fc-insight-label">Insight 02</span>
                    <h3>Discovery and execution are two different product modes.</h3>
                    <div className="fc-insight-body">
                        <div className="fc-transition">
                            <div className="fc-transition-block" style={{ borderColor: 'var(--fc-purple)' }}>
                                <h4>Before Hiring</h4>
                                <p style={{ marginTop: '8px' }}>
                                    Discover → Evaluate → Compare → Shortlist → Hire
                                </p>
                            </div>
                            <div className="fc-transition-arrow">→</div>
                            <div className="fc-transition-block" style={{ borderColor: 'var(--fc-purple)' }}>
                                <h4>After Hiring</h4>
                                <p style={{ marginTop: '8px' }}>
                                    Plan → Communicate → Deliver → Review → Revise → Approve
                                </p>
                            </div>
                        </div>

                        <div className="fc-callout" style={{ margin: '30px 0' }}>
                            <p>Marketplace → Project Workspace</p>
                        </div>

                        <p className="fc-insight-highlight">
                            Before hiring, the Creator is making a decision. After hiring, they're managing execution.
                        </p>
                    </div>
                </div>

                {/* Insight 03 */}
                <div className="fc-insight fc-reveal">
                    <span className="fc-insight-label">Insight 03</span>
                    <h3>Creative work is iterative by nature.</h3>
                    <div className="fc-insight-body">
                        <div className="fc-two-col" style={{ marginBottom: '30px' }}>
                            <div>
                                <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#999', marginBottom: '12px', fontWeight: 600 }}>
                                    The assumption
                                </p>
                                <div className="fc-flow" style={{ justifyContent: 'flex-start' }}>
                                    <span className="fc-flow-step" style={{ opacity: 0.5, textDecoration: 'line-through' }}>Brief</span>
                                    <span className="fc-flow-arrow" style={{ opacity: 0.3 }}>→</span>
                                    <span className="fc-flow-step" style={{ opacity: 0.5, textDecoration: 'line-through' }}>Perfect Output</span>
                                    <span className="fc-flow-arrow" style={{ opacity: 0.3 }}>→</span>
                                    <span className="fc-flow-step" style={{ opacity: 0.5, textDecoration: 'line-through' }}>Done</span>
                                </div>
                            </div>
                            <div>
                                <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--fc-purple)', marginBottom: '12px', fontWeight: 600 }}>
                                    The reality
                                </p>
                                <div className="fc-lifecycle" style={{ justifyContent: 'flex-start' }}>
                                    <span className="fc-lifecycle-step">Brief</span>
                                    <span className="fc-lifecycle-arrow">→</span>
                                    <span className="fc-lifecycle-step">First Delivery</span>
                                    <span className="fc-lifecycle-arrow">→</span>
                                    <span className="fc-lifecycle-step">Feedback</span>
                                    <span className="fc-lifecycle-arrow">→</span>
                                    <span className="fc-lifecycle-step">Revision</span>
                                    <span className="fc-lifecycle-arrow">→</span>
                                    <span className="fc-lifecycle-step">Review</span>
                                    <span className="fc-lifecycle-arrow">→</span>
                                    <span className="fc-lifecycle-step">Approval</span>
                                </div>
                            </div>
                        </div>

                        <p className="fc-insight-highlight">
                            Revisions couldn't be treated as an afterthought. They had to become part of the core
                            product workflow.
                        </p>
                    </div>
                </div>
            </section>

            {/* 07 — DESIGNING THE CREATOR EXPERIENCE */}
            <section id="creator-experience" className="section">
                <div className="fc-reveal">
                    <span className="section-label">07 — Designing the Creator Experience</span>
                    <h2 className="section-title">From brief to hired — a guided journey</h2>
                </div>

                {/* 01 — Post a Project */}
                <div className="fc-two-col fc-reveal" style={{ marginBottom: '80px' }}>
                    <div>
                        <span className="fc-section-number">01</span>
                        <h3 style={{ fontSize: '1.4rem', marginBottom: '20px' }}>Post a Project</h3>
                        <p className="fc-statement" style={{ fontSize: '1.2rem' }}>
                            Turning a complex brief into a guided workflow
                        </p>
                        <p className="section-text">
                            Rather than treating this as a long form, the project creation flow was structured as a
                            progressive process.
                        </p>

                        <div style={{ marginTop: '20px' }}>
                            <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--fc-purple)', fontWeight: 700, marginBottom: '12px' }}>
                                Project
                            </p>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                                Title · Category · Subcategory · Description · Objectives
                            </p>

                            <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--fc-purple)', fontWeight: 700, marginBottom: '12px' }}>
                                Requirements
                            </p>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                                Skills · Software · Experience level · Creative requirements
                            </p>

                            <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--fc-purple)', fontWeight: 700, marginBottom: '12px' }}>
                                Budget & Timeline
                            </p>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                                Budget · Budget type · Delivery date · Revision allowance
                            </p>

                            <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--fc-purple)', fontWeight: 700, marginBottom: '12px' }}>
                                Attachments
                            </p>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                References · Project documents · Creative assets
                            </p>
                        </div>
                    </div>
                    <div className="fc-editorial-img">
                        <div className="fc-placeholder fc-placeholder--screenshot">
                            <span>FanCrew — Post a Project screens</span>
                        </div>
                    </div>
                </div>

                {/* 02 — Review Before Commitment */}
                <div className="fc-two-col fc-reveal" style={{ marginBottom: '80px' }}>
                    <div className="fc-editorial-img" style={{ order: -1 }}>
                        <div className="fc-placeholder fc-placeholder--screenshot">
                            <span>FanCrew — Review Project screen</span>
                        </div>
                    </div>
                    <div>
                        <span className="fc-section-number">02</span>
                        <h3 style={{ fontSize: '1.4rem', marginBottom: '20px' }}>Review Before Commitment</h3>
                        <p className="fc-statement" style={{ fontSize: '1.2rem' }}>
                            Catch mistakes before the irreversible action.
                        </p>
                        <div className="fc-lifecycle" style={{ justifyContent: 'flex-start', marginBottom: '24px' }}>
                            <span className="fc-lifecycle-step">Post Project</span>
                            <span className="fc-lifecycle-arrow">→</span>
                            <span className="fc-lifecycle-step">Review</span>
                            <span className="fc-lifecycle-arrow">→</span>
                            <span className="fc-lifecycle-step">Payment</span>
                            <span className="fc-lifecycle-arrow">→</span>
                            <span className="fc-lifecycle-step">Publish</span>
                        </div>
                        <p className="section-text">
                            I introduced a dedicated Review Project step before payment and publishing so Creators could
                            verify the project before reaching the financial commitment.
                        </p>
                    </div>
                </div>

                {/* 03 — Saved Drafts */}
                <div className="fc-two-col fc-reveal" style={{ marginBottom: '80px' }}>
                    <div>
                        <span className="fc-section-number">03</span>
                        <h3 style={{ fontSize: '1.4rem', marginBottom: '20px' }}>Saved Drafts</h3>
                        <p className="fc-statement" style={{ fontSize: '1.2rem' }}>
                            Designing for interruption
                        </p>
                        <p className="section-text">
                            Project creation can require time and thought. Instead of treating an abandoned form as a
                            dead end, the system supports:
                        </p>
                        <div className="fc-lifecycle" style={{ justifyContent: 'flex-start', marginBottom: '24px' }}>
                            <span className="fc-lifecycle-step">Draft</span>
                            <span className="fc-lifecycle-arrow">→</span>
                            <span className="fc-lifecycle-step">Saved Draft</span>
                            <span className="fc-lifecycle-arrow">→</span>
                            <span className="fc-lifecycle-step">Ready for Payment</span>
                            <span className="fc-lifecycle-arrow">→</span>
                            <span className="fc-lifecycle-step">Active</span>
                        </div>
                        <p className="fc-insight-highlight">
                            Interruption became a recoverable workflow instead of failure.
                        </p>
                    </div>
                    <div className="fc-editorial-img">
                        <div className="fc-placeholder fc-placeholder--screenshot">
                            <span>FanCrew — Saved Draft interaction</span>
                        </div>
                    </div>
                </div>

                {/* 04 — Applications & Hiring */}
                <div className="fc-two-col fc-reveal">
                    <div className="fc-editorial-img" style={{ order: -1 }}>
                        <div className="fc-placeholder fc-placeholder--screenshot">
                            <span>FanCrew — Applications & Hiring</span>
                        </div>
                    </div>
                    <div>
                        <span className="fc-section-number">04</span>
                        <h3 style={{ fontSize: '1.4rem', marginBottom: '20px' }}>Applications & Hiring</h3>
                        <p className="fc-statement" style={{ fontSize: '1.2rem' }}>
                            Structuring the hiring decision
                        </p>
                        <div className="fc-lifecycle" style={{ justifyContent: 'flex-start', marginBottom: '24px' }}>
                            <span className="fc-lifecycle-step">View Applications</span>
                            <span className="fc-lifecycle-arrow">→</span>
                            <span className="fc-lifecycle-step">Open Profiles</span>
                            <span className="fc-lifecycle-arrow">→</span>
                            <span className="fc-lifecycle-step">Evaluate Portfolio</span>
                            <span className="fc-lifecycle-arrow">→</span>
                            <span className="fc-lifecycle-step">Shortlist</span>
                            <span className="fc-lifecycle-arrow">→</span>
                            <span className="fc-lifecycle-step">Message</span>
                            <span className="fc-lifecycle-arrow">→</span>
                            <span className="fc-lifecycle-step">Hire</span>
                        </div>
                        <p className="section-text">The applicant lifecycle:</p>
                        <div className="fc-lifecycle" style={{ justifyContent: 'flex-start', marginBottom: '24px' }}>
                            <span className="fc-lifecycle-step">Applied</span>
                            <span className="fc-lifecycle-arrow">→</span>
                            <span className="fc-lifecycle-step">Viewed</span>
                            <span className="fc-lifecycle-arrow">→</span>
                            <span className="fc-lifecycle-step">Shortlisted</span>
                            <span className="fc-lifecycle-arrow">→</span>
                            <span className="fc-lifecycle-step">Interview</span>
                            <span className="fc-lifecycle-arrow">→</span>
                            <span className="fc-lifecycle-step">Hired</span>
                        </div>
                        <p className="section-text">
                            The goal was to help Creators make a hiring decision without losing context.
                        </p>
                    </div>
                </div>
            </section>

            {/* 08 — DESIGNING THE CREW EXPERIENCE */}
            <section id="crew-experience" className="section">
                <div className="fc-reveal">
                    <span className="section-label">08 — Designing the Crew Experience</span>
                    <h2 className="section-title">The same marketplace from the opposite side</h2>

                    <div className="fc-callout">
                        <p>"Which opportunities are actually worth applying to?"</p>
                    </div>

                    <div className="fc-lifecycle" style={{ margin: '30px 0' }}>
                        <span className="fc-lifecycle-step">Discover</span>
                        <span className="fc-lifecycle-arrow">→</span>
                        <span className="fc-lifecycle-step">Evaluate</span>
                        <span className="fc-lifecycle-arrow">→</span>
                        <span className="fc-lifecycle-step">Apply</span>
                        <span className="fc-lifecycle-arrow">→</span>
                        <span className="fc-lifecycle-step">Track</span>
                        <span className="fc-lifecycle-arrow">→</span>
                        <span className="fc-lifecycle-step">Get Hired</span>
                    </div>

                    <p className="section-text">
                        Crew profiles are built around skills, software, experience, portfolio, and professional
                        information — giving Creators the context they need to evaluate fit.
                    </p>

                    <p className="fc-statement" style={{ fontSize: '1.2rem' }}>
                        The Crew profile becomes the bridge between discovery and credibility.
                    </p>
                </div>

                <div className="fc-two-col fc-mt-lg fc-reveal">
                    <div className="fc-editorial-img">
                        <div className="fc-placeholder fc-placeholder--screenshot">
                            <span>FanCrew — Crew Onboarding</span>
                        </div>
                    </div>
                    <div className="fc-editorial-img">
                        <div className="fc-placeholder fc-placeholder--screenshot">
                            <span>FanCrew — Project Discovery for Crew</span>
                        </div>
                    </div>
                </div>

                <div className="fc-two-col fc-reveal">
                    <div className="fc-editorial-img">
                        <div className="fc-placeholder fc-placeholder--screenshot">
                            <span>FanCrew — Project Detail</span>
                        </div>
                    </div>
                    <div className="fc-editorial-img">
                        <div className="fc-placeholder fc-placeholder--screenshot">
                            <span>FanCrew — Application Tracking</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 09 — FROM MARKETPLACE TO WORKSPACE */}
            <section id="workspace" className="section">
                <div className="fc-reveal">
                    <span className="section-label">09 — From Marketplace to Workspace</span>
                    <h2 className="section-title">Once someone is hired, the product has to change.</h2>
                    <p className="section-text">
                        The user no longer needs another marketplace screen. They need a place to{' '}
                        <strong>get the work done</strong>.
                    </p>
                </div>

                <div className="fc-workspace fc-reveal">
                    <div className="fc-workspace-header">
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--fc-purple)' }}>
                        </div>
                        <h3>Project Workspace</h3>
                    </div>
                    <div className="fc-workspace-grid">
                        <div className="fc-workspace-item">Overview</div>
                        <div className="fc-workspace-item">Requirements</div>
                        <div className="fc-workspace-item">Timeline</div>
                        <div className="fc-workspace-item">Files</div>
                        <div className="fc-workspace-item">Messages</div>
                        <div className="fc-workspace-item">Deliverables</div>
                        <div className="fc-workspace-item">Revisions</div>
                        <div className="fc-workspace-item">Activity</div>
                    </div>
                </div>

                <div className="fc-callout fc-mt-lg fc-reveal">
                    <p>
                        The marketplace helps users find each other. The workspace helps them succeed together.
                    </p>
                </div>

                <div className="fc-placeholder fc-placeholder--wide fc-placeholder--screenshot fc-mt-lg fc-reveal">
                    <span>FanCrew — Project Workspace</span>
                </div>
            </section>

            {/* 10 — COLLABORATION */}
            <section id="collaboration" className="section">
                <div className="fc-reveal">
                    <span className="section-label">10 — Collaboration</span>
                    <h2 className="section-title">Keeping communication contextual to the project</h2>
                    <p className="section-text">
                        The goal wasn't to build another generic chat product. It was to make communication{' '}
                        <strong>contextual to the project</strong>.
                    </p>
                </div>

                {/* Collaboration Diagram */}
                <div className="fc-reveal" style={{ maxWidth: '480px', margin: '40px auto' }}>
                    <div style={{ backgroundColor: 'var(--fc-purple-light)', borderRadius: '16px', padding: '30px', textAlign: 'center' }}>
                        <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px' }}>
                            Project
                        </p>
                        <div style={{ color: 'var(--fc-purple)', fontSize: '1.2rem', margin: '8px 0' }}>↓</div>
                        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                            Chat + Files + Deliverables
                        </p>
                        <div style={{ color: 'var(--fc-purple)', fontSize: '1.2rem', margin: '8px 0' }}>↓</div>
                        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                            Revisions
                        </p>
                        <div style={{ color: 'var(--fc-purple)', fontSize: '1.2rem', margin: '8px 0' }}>↓</div>
                        <p style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                            Approval
                        </p>
                    </div>
                </div>

                <div className="fc-two-col fc-reveal">
                    <div className="fc-editorial-img">
                        <div className="fc-placeholder fc-placeholder--screenshot">
                            <span>FanCrew — Project Chat</span>
                        </div>
                    </div>
                    <div className="fc-editorial-img">
                        <div className="fc-placeholder fc-placeholder--screenshot">
                            <span>FanCrew — Files & Activity</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 11 — DELIVERABLES & REVISIONS */}
            <section id="deliverables" className="section">
                <div className="fc-reveal">
                    <span className="section-label">11 — Deliverables & Revisions</span>
                    <h2 className="section-title">Designing the actual creative feedback loop</h2>
                    <p className="section-text">
                        The goal wasn't to build another generic chat product. It was to make communication{' '}
                        <strong>contextual to the project</strong>.
                    </p>
                </div>

                {/* Branching Diagram */}
                <div className="fc-branch fc-reveal">
                    <div className="fc-branch-start">Crew Submits Work</div>
                    <div className="fc-branch-arrow">↓</div>
                    <div className="fc-branch-start" style={{ backgroundColor: 'var(--text-primary)' }}>
                        Creator Reviews
                    </div>
                    <div className="fc-branch-arrow">↓</div>

                    <div className="fc-branch-paths">
                        <div className="fc-branch-path">
                            <span className="fc-branch-label fc-branch-label--approve">Approve</span>
                            <div className="fc-branch-steps">
                                <div className="fc-branch-step fc-branch-step--approve">Approved</div>
                                <div className="fc-branch-arrow">↓</div>
                                <div className="fc-branch-step fc-branch-step--approve">Complete</div>
                            </div>
                        </div>
                        <div className="fc-branch-path">
                            <span className="fc-branch-label fc-branch-label--revise">Revision</span>
                            <div className="fc-branch-steps">
                                <div className="fc-branch-step fc-branch-step--revise">Revision Requested</div>
                                <div className="fc-branch-arrow">↓</div>
                                <div className="fc-branch-step fc-branch-step--revise">Resubmit</div>
                                <div className="fc-branch-arrow">↓</div>
                                <div className="fc-branch-step fc-branch-step--revise">Review Again</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="fc-editorial fc-reveal">
                    <p className="fc-statement" style={{ fontSize: '1.2rem' }}>
                        This creates a controlled feedback loop rather than forcing users to manage revisions through
                        scattered conversations.
                    </p>
                </div>

                <div className="fc-two-col fc-reveal">
                    <div className="fc-editorial-img">
                        <div className="fc-placeholder fc-placeholder--screenshot">
                            <span>FanCrew — Deliverables</span>
                        </div>
                    </div>
                    <div className="fc-editorial-img">
                        <div className="fc-placeholder fc-placeholder--screenshot">
                            <span>FanCrew — Revisions</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 12 — DESIGNING FOR THE UNHAPPY PATH */}
            <section id="unhappy-path" className="section">
                <div className="fc-dark-section fc-reveal">
                    <span className="section-label">12 — Designing for the Unhappy Path</span>
                    <h2 className="section-title" style={{ color: 'white' }}>
                        A polished happy path doesn't make a robust product.
                    </h2>

                    <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '680px', marginBottom: '40px', lineHeight: 1.7 }}>
                        The main state progression:
                    </p>

                    <div className="fc-state-flow">
                        <span className="fc-state">Draft</span>
                        <span className="fc-state-arrow">→</span>
                        <span className="fc-state">Pending Payment</span>
                        <span className="fc-state-arrow">→</span>
                        <span className="fc-state">Active</span>
                        <span className="fc-state-arrow">→</span>
                        <span className="fc-state">Applications</span>
                        <span className="fc-state-arrow">→</span>
                        <span className="fc-state">Shortlisted</span>
                        <span className="fc-state-arrow">→</span>
                        <span className="fc-state">Crew Assigned</span>
                        <span className="fc-state-arrow">→</span>
                        <span className="fc-state">In Progress</span>
                        <span className="fc-state-arrow">→</span>
                        <span className="fc-state">Under Review</span>
                        <span className="fc-state-arrow">→</span>
                        <span className="fc-state">Revision Requested</span>
                        <span className="fc-state-arrow">→</span>
                        <span className="fc-state">Completed</span>
                    </div>

                    <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '680px', margin: '40px 0 20px', lineHeight: 1.7 }}>
                        Alternate states:
                    </p>

                    <div className="fc-alt-states">
                        <span className="fc-alt-state">Cancelled</span>
                        <span className="fc-alt-state">Rejected</span>
                        <span className="fc-alt-state">Withdrawn</span>
                        <span className="fc-alt-state">Disputed</span>
                    </div>

                    <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '680px', margin: '40px 0 20px', lineHeight: 1.7 }}>
                        Edge cases I considered:
                    </p>

                    <ul className="fc-edge-list">
                        <li>Creator leaves during project creation</li>
                        <li>Payment succeeds but user leaves</li>
                        <li>Multiple Crew members attempt to be hired</li>
                        <li>Crew uploads an invalid file</li>
                        <li>Creator doesn't respond to a submission</li>
                        <li>Revision is requested</li>
                        <li>Payment release fails</li>
                        <li>A dispute occurs</li>
                    </ul>

                    <div className="fc-callout fc-callout--dark" style={{ marginTop: '40px' }}>
                        <p>
                            The question shifted from "What should the screen look like?" to "What should the product
                            do when the expected thing doesn't happen?"
                        </p>
                    </div>
                </div>
            </section>

            {/* 13 — BUILDING THE DESIGN SYSTEM */}
            <section id="design-system" className="section">
                <div className="fc-reveal">
                    <span className="section-label">13 — Building the Design System</span>
                    <h2 className="section-title">Making complexity reusable</h2>
                    <p className="section-text">
                        The product contained two different user experiences and a large number of workflows. Without a
                        system, that complexity would quickly create inconsistency.
                    </p>
                </div>

                <div className="fc-ds-grid fc-reveal">
                    {DS_ITEMS.map((item, i) => (
                        <div className="fc-ds-item" style={i === DS_ITEMS.length - 1 ? { gridColumn: 'span 2' } : undefined} key={item}>
                            <p>{item}</p>
                        </div>
                    ))}
                </div>

                <div className="fc-ds-principle fc-reveal">
                    Reuse → Extend → Create only when necessary
                </div>

                <div className="fc-two-col fc-mt-lg fc-reveal">
                    <div className="fc-editorial-img">
                        <div className="fc-placeholder fc-placeholder--screenshot">
                            <span>FanCrew — Design System Overview</span>
                        </div>
                    </div>
                    <div className="fc-editorial-img">
                        <div className="fc-placeholder fc-placeholder--screenshot">
                            <span>FanCrew — Component Variants</span>
                        </div>
                    </div>
                </div>

                <div className="fc-two-col fc-reveal">
                    <div className="fc-editorial-img">
                        <div className="fc-placeholder fc-placeholder--screenshot">
                            <span>FanCrew — Creator Shell</span>
                        </div>
                    </div>
                    <div className="fc-editorial-img">
                        <div className="fc-placeholder fc-placeholder--screenshot">
                            <span>FanCrew — Crew Shell</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 14 — MY DESIGN APPROACH */}
            <section id="approach" className="section">
                <div className="fc-reveal">
                    <span className="section-label">14 — My Design Approach</span>
                    <h2 className="section-title">Workflow-first, not screen-first.</h2>
                </div>

                <div className="fc-timeline fc-reveal">
                    {APPROACH_STEPS.map((step, i) => (
                        <div className="fc-timeline-step" key={step.title}>
                            <div className="fc-timeline-num">{String(i + 1).padStart(2, '0')}</div>
                            <div className="fc-timeline-content">
                                <h4>{step.title}</h4>
                                <p>{step.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 15 — OUTCOME */}
            <section id="outcome" className="section">
                <div className="fc-reveal">
                    <span className="section-label">15 — Outcome</span>
                    <h2 className="section-title">A structured marketplace concept</h2>
                    <p className="section-text">
                        FanCrew MVP 1 evolved into a structured Creator–Crew marketplace concept connecting:
                    </p>
                </div>

                <div className="fc-lifecycle fc-reveal">
                    <span className="fc-lifecycle-step">Discovery</span>
                    <span className="fc-lifecycle-arrow">→</span>
                    <span className="fc-lifecycle-step">Evaluation</span>
                    <span className="fc-lifecycle-arrow">→</span>
                    <span className="fc-lifecycle-step">Hiring</span>
                    <span className="fc-lifecycle-arrow">→</span>
                    <span className="fc-lifecycle-step">Collaboration</span>
                    <span className="fc-lifecycle-arrow">→</span>
                    <span className="fc-lifecycle-step">Delivery</span>
                    <span className="fc-lifecycle-arrow">→</span>
                    <span className="fc-lifecycle-step">Approval</span>
                    <span className="fc-lifecycle-arrow">→</span>
                    <span className="fc-lifecycle-step">Payment</span>
                </div>

                <div className="fc-editorial fc-mt-lg fc-reveal">
                    <p className="section-text" style={{ marginBottom: '30px' }}>
                        I designed the key experiences across both sides of the marketplace while establishing the
                        design-system foundation required to scale the product.
                    </p>
                </div>

                <div className="fc-callout fc-reveal">
                    <p>
                        A Creator can start with "I need someone for this project" and move toward "the right person
                        is hired, the work is completed, and the relationship is settled."
                    </p>
                </div>
            </section>

            {/* 16 — WHAT I LEARNED */}
            <section id="reflection" className="section">
                <div className="fc-reveal">
                    <span className="section-label">16 — What I Learned</span>
                    <h2 className="section-title fc-mb-lg">Reflections on designing a two-sided marketplace</h2>
                </div>

                <div className="fc-learn-grid fc-reveal">
                    {LEARN_CARDS.map((card) => (
                        <div className="fc-learn-card" key={card.num}>
                            <div className="fc-learn-num">{card.num}</div>
                            <h4>{card.title}</h4>
                            <p>{card.text}</p>
                            {card.extra && (
                                <p style={{ marginTop: '8px', fontWeight: 600, color: 'var(--fc-purple)', fontSize: '0.9rem' }}>
                                    {card.extra}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* FUTURE SCOPE */}
            <section id="future" className="section">
                <div className="fc-reveal">
                    <span className="section-label">Future Scope</span>
                    <h2 className="section-title">Possible directions</h2>
                </div>

                <div className="fc-future-list fc-reveal">
                    {FUTURE_ITEMS.map((item) => (
                        <div className="fc-future-item" key={item}>{item}</div>
                    ))}
                </div>

                <div className="fc-editorial fc-mt-lg fc-reveal">
                    <p className="fc-statement--purple" style={{ fontSize: '1.3rem', fontWeight: 600 }}>
                        Connect the right people, structure the work, and make the relationship easier to manage.
                    </p>
                </div>
            </section>

            {/* FINAL TAKEAWAY */}
            <div className="fc-takeaway fc-reveal">
                <span className="section-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Final Takeaway</span>
                <h2 style={{ color: 'white', fontSize: '2.2rem', marginBottom: '30px' }}>
                    FanCrew taught me to think about product design beyond individual interfaces.
                </h2>
                <p>The challenge wasn't:</p>
                <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', fontWeight: 500, marginBottom: '30px' }}>
                    "How do I design a marketplace?"
                </p>
                <p>It was:</p>
                <div className="fc-callout fc-callout--dark" style={{ maxWidth: '640px', margin: '20px auto 30px', textAlign: 'left' }}>
                    <p style={{ fontSize: '1.15rem' }}>
                        "How do I design an ecosystem where discovery, trust, hiring, collaboration, delivery and
                        payment work together as one coherent experience?"
                    </p>
                </div>
                <p style={{ fontSize: '1.1rem', color: 'white', fontWeight: 600, marginTop: '40px' }}>
                    That shift — from screen design to system design — became the most important part of my work on
                    FanCrew.
                </p>
            </div>

            {/* NEXT PROJECT */}
            <div className="fc-next-project">
                <span className="fc-next-label">Next Project</span>
                <p className="fc-next-title">
                    <Link to="/projects/valasys-product-website">Valasys Product Website →</Link>
                </p>
            </div>
        </CaseLayout>
    );
}