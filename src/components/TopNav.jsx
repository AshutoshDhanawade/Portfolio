import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TopNav({ portfolioTo = '/' }) {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen((o) => !o);

    return (
        <nav className="top-nav">
            <div className={'top-nav-links' + (open ? ' open' : '')}>
                {portfolioTo === '#' ? (
                    <a href="#" className="top-nav-link" onClick={() => setOpen(false)}>Portfolio</a>
                ) : (
                    <Link to={portfolioTo} className="top-nav-link" onClick={() => setOpen(false)}>Portfolio</Link>
                )}
                <a href="#" className="top-nav-link" onClick={() => setOpen(false)}>Case Studies</a>
                <a href="#" className="top-nav-link" onClick={() => setOpen(false)}>App Design</a>
            </div>
            <div className="top-nav-btns">
                <button className="btn btn-outline btn-hide-mobile">Resume</button>
                <button className="btn btn-outline btn-hide-mobile">Log in</button>
                <button className="btn btn-primary btn-hide-mobile">Sign up</button>
                <button className="nav-toggle" aria-label="Toggle menu" onClick={toggle}>
                    <i className={open ? 'fas fa-times' : 'fas fa-bars'}></i>
                </button>
            </div>
        </nav>
    );
}
