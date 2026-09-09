import { Link } from 'react-router-dom';

export default function TopNav({ portfolioTo = '/' }) {
    return (
        <nav className="top-nav">
            <div className="top-nav-links">
                {portfolioTo === '#' ? (
                    <a href="#" className="top-nav-link">Portfolio</a>
                ) : (
                    <Link to={portfolioTo} className="top-nav-link">Portfolio</Link>
                )}
                <a href="#" className="top-nav-link">Case Studies</a>
                <a href="#" className="top-nav-link">App Design</a>
            </div>
            <div className="top-nav-btns">
                <button className="btn btn-outline">Resume</button>
                <button className="btn btn-outline">Log in</button>
                <button className="btn btn-primary">Sign up</button>
            </div>
        </nav>
    );
}