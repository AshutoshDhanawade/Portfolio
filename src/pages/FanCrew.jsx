import { Link } from 'react-router-dom';

import CaseLayout from '../components/CaseLayout';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { useRevealObserver } from '../hooks/useRevealObserver';

import '../styles/fancrew.css';

const TOC = [
    { id: 'problem', num: '01', label: 'The problem' },
    { id: 'architecture', num: '02', label: 'Product architecture' },
    { id: 'creator-experience', num: '03', label: 'Creator experience' },
    { id: 'crew-experience', num: '04', label: 'Crew experience' },
    { id: 'workspace', num: '05', label: 'Marketplace → Workspace' },
    { id: 'gallery', num: '06', label: 'Final Takeaway' }
];

const MARKETPLACE_STEPS = ['Discovery', 'Evaluation', 'Hiring'];
const EXECUTION_STEPS = ['Requirements', 'Timeline', 'Files', 'Messages', 'Deliverables', 'Revisions', 'Approval', 'Completion'];

const WORKSPACE_MODULES = ['Overview', 'Requirements', 'Timeline', 'Files', 'Messages', 'Deliverables', 'Revisions', 'Activity'];

const CREATOR_UX = [
    {
        num: '01',
        title: 'Progressive project creation',
        text: 'Rather than treating project creation as one long form, the workflow progressively captures project details, requirements, budget and timeline before review and publishing.',
        chips: ['Title', 'Category', 'Description', 'Skills', 'Software', 'Experience', 'Budget', 'Timeline', 'Attachments']
    },
    {
        num: '02',
        title: 'Review before financial commitment',
        text: 'A dedicated review step before payment and publishing lets Creators verify the project before the financial commitment.',
        chips: ['Post Project', 'Review', 'Payment', 'Publish']
    },
    {
        num: '03',
        title: 'Keep applicant evaluation contextual',
        text: 'Applications, portfolios and profiles stay in context so Creators can evaluate and shortlist without losing context.',
        chips: ['Applied', 'Viewed', 'Shortlisted', 'Interview', 'Hired']
    }
];

const CREW_UX = [
    {
        num: '01',
        title: 'Relevant project information before applying',
        text: 'Project details give Crew the full picture — scope, skills, budget and timeline — before they commit to apply.',
        chips: ['Project Detail', 'Skills', 'Budget', 'Timeline']
    },
    {
        num: '02',
        title: 'Clear application state',
        text: 'The application is trackable at every step, so Crew always knows where they stand.',
        chips: ['Applied', 'Viewed', 'Shortlisted', 'Hired']
    },
    {
        num: '03',
        title: 'Professional profile as a trust layer',
        text: 'Skills, software, experience and portfolio create the credibility bridge between discovery and hiring.',
        chips: ['Profile', 'Portfolio', 'Skills', 'Ratings', 'Availability']
    }
];

const REVISION_STEPS = ['Brief', 'First Delivery', 'Feedback', 'Revision', 'Review', 'Approval'];

const EDGE_CASES = [
    'Creator leaves during project creation',
    'Payment succeeds but the user leaves',
    'Multiple Crew members attempt to be hired',
    'Invalid file upload',
    'Creator doesn\'t respond to a submission',
    'Payment release fails',
    'A dispute occurs'
];

const GALLERY = [
    { label: 'Creator Dashboard', size: 'large', tone: 'a' },
    { label: 'Crew Dashboard', size: 'wide', tone: 'b' },
    { label: 'Project Creation', size: 'std', tone: 'c' },
    { label: 'Project Details', size: 'std', tone: 'd' },
    { label: 'Applications', size: 'std', tone: 'e' },
    { label: 'Crew Profile', size: 'std', tone: 'f' },
    { label: 'Apply to Project', size: 'std', tone: 'c' },
    { label: 'Project Workspace', size: 'wide', tone: 'a' },
    { label: 'Deliverables', size: 'std', tone: 'b' },
    { label: 'Revision', size: 'std', tone: 'd' },
    { label: 'Approval', size: 'std', tone: 'e' },
    { label: 'Payment', size: 'std', tone: 'f' }
];

const DS_ITEMS = [
    'Typography', 'Color Tokens', 'Spacing', 'Radius', 'Icons', 'Buttons', 'Inputs', 'Cards',
    'Status Pills', 'Navigation', 'Sidebars', 'Variants'
];

function ScreenTile({ label, size = 'md', tone = 'a', bar = 'FanCrew', reveal = true, delay = 0, img }) {
    const cls = ['fc-ss', `fc-ss--${size}`, `fc-ss--tone-${tone}`];
    if (img) cls.push('fc-ss--has-img');
    if (reveal) cls.push('fc-reveal');
    if (delay) cls.push(`fc-reveal-delay-${delay}`);

    const tabName = img ? bar : (bar && bar !== 'FanCrew' ? bar : `FanCrew · ${label}`);

    return (
        <div className={cls.join(' ')} data-tone={tone}>
            <div className="fc-ss-bar">
                <i></i>
                <i></i>
                <i></i>
                <em>{tabName}</em>
            </div>
            <div className="fc-ss-body">
                {img ? <img className="fc-ss-img" src={img} alt={label} /> : <p className="fc-ss-soon">Coming soon</p>}
            </div>
        </div>
    );
}

function UxCallout({ num, title, text, chips, reveal = true }) {
    return (
        <div className={'fc-ux-card' + (reveal ? ' fc-reveal' : '')}>
            <span className="fc-ux-num">{num}</span>
            <h4 className="fc-ux-title">{title}</h4>
            <p className="fc-ux-text">{text}</p>
            {chips && (
                <div className="fc-ux-chips">
                    {chips.map((chip) => (
                        <span className="fc-ux-chip" key={chip}>{chip}</span>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function FanCrew() {
    useScrollSpy();
    useRevealObserver();

    return (
        <CaseLayout toc={TOC} contentClassName="fc-page">
            {/* HERO */}
            <div className="fc-hero fc-reveal">
                <div className="fc-hero-inner">
                    <div className="fc-hero-left">
                        <p className="fc-hero-eyebrow">Product Design · UX/UI · Design Systems</p>
                        <h1>FanCrew</h1>
                        <p className="fc-hero-statement">Turning fragmented creative hiring into one connected workflow</p>
                    </div>
                    <div className="fc-hero-right">
                        <p className="fc-hero-desc">
                            FanCrew is a creator-focused marketplace that connects Creators with creative professionals —
                            "Crew." For MVP 1, the goal was to make the entire relationship between a Creator and Crew member
                            manageable inside one product — from discovering talent and posting a project to hiring,
                            collaboration, revisions, approval and payment.
                        </p>
                    </div>
                </div>
            </div>

            <div className="hero-image-container fc-reveal">
                <img src="/assets/images/fancrew hero image.png" alt="FanCrew Hero Mockup" className="hero-image" />
            </div>

            <header className="project-header fc-mt-lg fc-reveal">
                <div className="project-tags">
                    <span className="tag">Product Design</span>
                    <span className="tag">Marketplace</span>
                    <span className="tag">Two-Sided Platform</span>
                </div>
                <div className="project-meta-grid">
                    <div className="meta-item">
                        <p className="meta-label">Role</p>
                        <p className="meta-value">Product Design · UX/UI · Design Systems</p>
                    </div>
                    <div className="meta-item">
                        <p className="meta-label">Scope</p>
                        <p className="meta-value">MVP 1 — Creator ↔ Crew Marketplace</p>
                    </div>
                    <div className="meta-item">
                        <p className="meta-label">Domain</p>
                        <p className="meta-value">Creator Economy, Creative Hiring</p>
                    </div>
                    <div className="meta-item">
                        <p className="meta-label">Screens</p>
                        <p className="meta-value">~150 screens across both experiences</p>
                    </div>
                </div>
            </header>

            {/* 01 — THE PROBLEM */}
            <section id="problem" className="section">
                <div className="fc-reveal">
                    <span className="section-label">01 — The Problem</span>
                    <h2 className="section-title">One marketplace. Two users. One connected workflow.</h2>
                    <p className="section-text">
                        FanCrew is a creator-focused marketplace connecting Creators with creative professionals —
                        Crew. The goal was to bring the relationship between Creators and Crew into one structured
                        workflow, from discovery and hiring to collaboration, delivery and payment.
                    </p>
                    <p className="section-text">
                        Creative hiring is rarely one single task. Creators often move between different tools to find
                        talent, discuss requirements, share files, manage revisions and handle payments.
                    </p>
                </div>

                <div className="fc-role-compare fc-reveal">
                    <div className="fc-role-compare-item fc-problem-user">
                        <span className="fc-problem-user-tag">Creator</span>
                        <p>"I have a project. How do I find the right person and get it completed?"</p>
                    </div>
                    <div className="fc-role-compare-item fc-problem-user">
                        <span className="fc-problem-user-tag fc-problem-user-tag--crew">Crew</span>
                        <p>"How do I find the right project and turn the opportunity into paid work?"</p>
                    </div>
                </div>
            </section>

            {/* 02 — PRODUCT ARCHITECTURE */}
            <section id="architecture" className="section">
                <div className="fc-reveal">
                    <span className="section-label">02 — Product Architecture</span>
                    <h2 className="section-title">Two different journeys. One shared project lifecycle.</h2>
                    <p className="section-text">
                        Creators and Crew enter FanCrew from different directions, but their experiences eventually
                        converge around the same project.
                    </p>
                </div>

                <div className="fc-arch3-img fc-reveal">
                    <img src="/assets/images/Product Architecture.png" alt="FanCrew product architecture diagram" />
                </div>

                <div className="fc-arch3-note fc-reveal">
                    <span className="fc-arch3-note-dot"></span>
                    Both journeys converge at the <strong>Project Workspace</strong> — where discovery ends and execution begins.
                </div>
            </section>

            {/* 03 — CREATOR EXPERIENCE */}
            <section id="creator-experience" className="section">
                <div className="fc-reveal">
                    <span className="section-label">03 — Creator Experience</span>
                    <h2 className="section-title">From brief to hire.</h2>
                    <p className="section-text">
                        I designed the Creator experience around a guided project lifecycle — helping Creators define
                        their requirements, review the project before publishing, evaluate applicants and make a hiring
                        decision without losing context.
                    </p>
                </div>

                <div className="fc-pin-grid fc-reveal">
                    <ScreenTile label="Creator Dashboard" size="pin" tone="a" bar="FanCrew · Creator" img="/assets/images/Creator Dashboard.png" />
                    <ScreenTile label="Create / Post a Project" size="pin" tone="c" bar="FanCrew · New Project" img="/assets/images/Create Post a Project.png" />
                    <ScreenTile label="Creator Onboarding" size="pin" tone="f" bar="FanCrew · Onboarding" img="/assets/images/Creator Onboarding.png" />
                    <ScreenTile label="Review Project" size="pin" tone="e" bar="FanCrew · Review" img="/assets/images/Review Project.png" />
                    <ScreenTile label="My Projects" size="pin" tone="d" bar="FanCrew · Projects" img="/assets/images/My Projects.png" />
                    <ScreenTile label="Project Details" size="pin" tone="c" bar="FanCrew · Project" img="/assets/images/Project Details Page.png" />
                </div>

                <div className="fc-ux-grid">
                    {CREATOR_UX.map((ux) => (
                        <UxCallout key={ux.num} {...ux} />
                    ))}
                </div>
            </section>

            {/* 04 — CREW EXPERIENCE */}
            <section id="crew-experience" className="section">
                <div className="fc-reveal">
                    <span className="section-label">04 — Crew Experience</span>
                    <h2 className="section-title">From opportunity to paid work.</h2>
                    <p className="section-text">
                        For Crew, the goal is different: discover relevant opportunities, evaluate the project, apply
                        with confidence and track the journey toward getting hired.
                    </p>
                </div>

                <div className="fc-pin-grid fc-reveal">
                    <ScreenTile label="Crew Dashboard" size="pin" tone="b" bar="FanCrew · Crew" img="/assets/images/crew-dashboard.png" />
                    <ScreenTile label="Crew Onboarding" size="pin" tone="f" bar="FanCrew · Onboarding" img="/assets/images/crew-onboarding.png" />
                    <ScreenTile label="Apply to Project" size="pin" tone="c" bar="FanCrew · Apply" img="/assets/images/crew-Apply for Project.png" />
                    <ScreenTile label="Hired Project" size="pin" tone="b" bar="FanCrew · My Project" img="/assets/images/crew-My Projects.png" />
                </div>

                <div className="fc-ux-grid">
                    {CREW_UX.map((ux) => (
                        <UxCallout key={ux.num} {...ux} />
                    ))}
                </div>
            </section>

            {/* 05 — FROM MARKETPLACE TO WORKSPACE */}
            <section id="workspace" className="section">
                <div className="fc-reveal">
                    <span className="section-label">05 — From Marketplace to Workspace</span>
                    <h2 className="section-title">Once someone is hired, the product has to change.</h2>
                    <p className="section-text">
                        After hiring, users no longer need another marketplace screen. They need a structured place to
                        get the work done.
                    </p>
                </div>

                <div className="fc-transition fc-transition--v fc-reveal">
                    <div className="fc-transition-block fc-transition-block--soft">
                        <h4>Marketplace</h4>
                        <p>{MARKETPLACE_STEPS.join(' → ')}</p>
                    </div>
                    <div className="fc-transition-arrow">↓</div>
                    <div className="fc-transition-block" style={{ borderColor: 'var(--fc-purple)' }}>
                        <h4>Project Workspace</h4>
                        <p>Where the hired project gets managed</p>
                    </div>
                    <div className="fc-transition-arrow">↓</div>
                    <div className="fc-transition-block fc-transition-block--soft">
                        <h4>Execution</h4>
                        <p>{EXECUTION_STEPS.join(' → ')}</p>
                    </div>
                </div>

                <div className="fc-workspace fc-reveal">
                    <div className="fc-workspace-header">
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--fc-purple)' }}></div>
                        <h3>Project Workspace</h3>
                    </div>
                    <div className="fc-workspace-grid">
                        {WORKSPACE_MODULES.map((mod) => (
                            <div className="fc-workspace-item" key={mod}>{mod}</div>
                        ))}
                    </div>
                </div>

                <div className="fc-ss-grid fc-reveal">
                    <ScreenTile label="Chat / Messages" size="md" tone="a" bar="FanCrew · Messages" img="/assets/images/Message.png" />
                    <ScreenTile label="Files" size="md" tone="e" bar="FanCrew · Files" img="/assets/images/crew-shared assets.png" />
                    <ScreenTile label="Deliverables" size="md" tone="b" bar="FanCrew · Deliverables" />
                </div>

                <div className="fc-editorial fc-reveal">
                    <p className="fc-statement" style={{ fontSize: '1.2rem' }}>
                        Creative work is iterative, so revisions are treated as part of the core workflow rather than
                        an afterthought.
                    </p>
                </div>

                <div className="fc-branch fc-reveal">
                    <div className="fc-branch-start">Crew Submits Work</div>
                    <div className="fc-branch-arrow">↓</div>
                    <div className="fc-branch-start" style={{ backgroundColor: 'var(--text-primary)' }}>Creator Reviews</div>
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

                <div className="fc-ss-grid fc-reveal">
                    <ScreenTile label="Revision Request" size="md" tone="e" bar="FanCrew · Revision" />
                    <ScreenTile label="Approval / Completion" size="md" tone="d" bar="FanCrew · Review Work" />
                    <ScreenTile label="Payment" size="md" tone="f" bar="FanCrew · Payment" />
                </div>

                <div className="fc-callout fc-reveal" style={{ marginTop: '40px' }}>
                    <p>
                        Edge cases handled: {EDGE_CASES.join(' · ')}.
                    </p>
                </div>
            </section>

            {/* 06 — FINAL PRODUCT */}
            <section id="gallery" className="section">
                <div className="fc-reveal">
                    <span className="section-label">Final Product</span>
                    <h2 className="section-title">Designed as a system, not a collection of screens.</h2>
                    <p className="section-text">
                        FanCrew MVP 1 connects discovery, evaluation, hiring, collaboration, delivery, approval and
                        payment across two distinct user experiences.
                    </p>
                </div>

                <div className="fc-gallery-grid fc-reveal">
                    {GALLERY.map((item) => (
                        <div className={'fc-gallery-item fc-gallery-item--' + item.size} key={item.label}>
                            <ScreenTile label={item.label} size="fill" tone={item.tone} bar="FanCrew" reveal={false} />
                        </div>
                    ))}
                </div>

                <div className="fc-ds-strip fc-reveal">
                    <div className="fc-ds-strip-inner">
                        <p className="fc-ds-principle">Reuse → Extend → Create only when necessary</p>
                        <div className="fc-ds-grid">
                            {DS_ITEMS.map((item) => (
                                <div className="fc-ds-item" key={item}><p>{item}</p></div>
                            ))}
                        </div>
                        <p className="fc-ds-caption">
                            A shared design system kept ~150 screens consistent across two different user experiences.
                        </p>
                    </div>
                </div>
            </section>

            {/* FINAL TAKEAWAY */}
            <div className="fc-takeaway fc-reveal">
                <span className="section-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Final Takeaway</span>
                <h2 style={{ color: 'white', fontSize: '2.2rem', marginBottom: '30px' }}>
                    From screen design to system design.
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