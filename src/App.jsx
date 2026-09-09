import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import FanCrew from './pages/FanCrew';
import Lingofable from './pages/Lingofable';
import Valasys from './pages/Valasys';

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

export default function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects/fancrew" element={<FanCrew />} />
                <Route path="/projects/lingofable" element={<Lingofable />} />
                <Route path="/projects/valasys" element={<Valasys />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </>
    );
}