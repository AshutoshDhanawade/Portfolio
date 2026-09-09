import { useClock } from '../hooks/useClock';

export default function HomeSidebar() {
    const time = useClock();

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
                        <a href="#" className="sidebar-list-link active"><span>01.</span> My Work</a>
                    </li>
                    <li className="sidebar-list-item">
                        <a href="#" className="sidebar-list-link"><span>02.</span> About Me</a>
                    </li>
                    <li className="sidebar-list-item">
                        <a href="#" className="sidebar-list-link"><span>03.</span> Playground</a>
                    </li>
                    <li className="sidebar-list-item">
                        <a href="#" className="sidebar-list-link">
                            <span>04.</span> Visitor Gallery{' '}
                            <span style={{ color: '#b35a76', marginLeft: '5px' }}>*</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="explore-footer">
                <h4>Find me at</h4>
                <div className="explore-footer-links">
                    <a href="#">Email</a>
                    <a href="#">LinkedIn</a>
                    <a href="#">GitHub</a>
                    <a href="#">X</a>
                </div>

                <div className="explore-status">
                    <p className="explore-status-time" id="current-time">{time}</p>
                    <p className="explore-status-ok">All systems operational</p>
                </div>
            </div>
        </aside>
    );
}