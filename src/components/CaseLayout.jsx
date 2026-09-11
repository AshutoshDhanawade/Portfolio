import ProfileModal from './ProfileModal';
import TopNav from './TopNav';
import Footer from './Footer';
import CaseSidebar from './CaseSidebar';

export default function CaseLayout({ toc, contentClassName = '', children }) {
    return (
        <div className="case-study-layout">
            <ProfileModal />
            <CaseSidebar toc={toc} />
            <div className="case-study-main">
                <TopNav portfolioTo="/" />
                <div className={'case-study-content' + (contentClassName ? ' ' + contentClassName : '')}>
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    );
}