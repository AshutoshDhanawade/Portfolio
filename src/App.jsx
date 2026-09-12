import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Cursor from './components/ui/inverted-cursor';
import { initLenis, destroyLenis, getLenis } from './lib/lenis';
import Home from './pages/Home';
import FanCrew from './pages/FanCrew';
import Lingofable from './pages/Lingofable';
import Valasys from './pages/Valasys';
import ValasysProductWebsite from './pages/ValasysProductWebsite';

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        const lenis = getLenis();
        if (lenis) {
            lenis.scrollTo(0, { immediate: true, force: true });
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname]);
    return null;
}

export default function App() {
    useEffect(() => {
        document.title = 'Ashutosh Dhanawade - UI UX Designer';
    }, []);

    useEffect(() => {
        initLenis();
        return () => destroyLenis();
    }, []);

    return (
        <>
            <Cursor />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects/fancrew" element={<FanCrew />} />
                <Route path="/projects/lingofable" element={<Lingofable />} />
                <Route path="/projects/valasys" element={<Valasys />} />
                <Route path="/projects/valasys-product-website" element={<ValasysProductWebsite />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </>
    );
}