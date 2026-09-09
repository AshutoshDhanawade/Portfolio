import ProfileModal from './ProfileModal';
import TopNav from './TopNav';
import Footer from './Footer';
import CaseSidebar from './CaseSidebar';

export default function CaseLayout({ toc, contentClassName = '', children }) {
    return (
        <>
            <ProfileModal />
            <CaseSidebar toc={toc} />
            <div className="main-wrapper">
                <TopNav portfolioTo="/" />
                <div className={'content-container' + (contentClassName ? ' ' + contentClassName : '')}>
                    {children}
                </div>
                <Footer />
            </div>
        </>
    );
}