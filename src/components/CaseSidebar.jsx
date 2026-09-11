import { Link } from 'react-router-dom';

export default function CaseSidebar({ toc }) {
    return (
        <aside className="sidebar case-sidebar">
            <Link to="/" className="home-link">
                <i className="fas fa-arrow-left"></i> Home
            </Link>

            <div className="sidebar-box">
                <h3 className="sidebar-box-header">Table of contents</h3>
                <ul className="sidebar-list">
                    {toc.map((item) => (
                        <li className="sidebar-list-item" key={item.id}>
                            <a href={'#' + item.id} className="sidebar-list-link">
                                <span>{item.num}.</span> {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}