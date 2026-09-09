import { useEffect, useRef } from 'react';
import { initFanCrewArch } from '../../lib/fancrewArch';

export default function ArchitectureCanvas() {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) return;
        const cleanup = initFanCrewArch(ref.current);
        return cleanup;
    }, []);

    return (
        <div className="fc-arch-canvas" ref={ref}>
            <noscript>
                <p className="fc-arch-lead" style={{ marginTop: '16px' }}>
                    Creator and Crew flows converge into a single shared project workspace. Enable JavaScript to
                    explore the interactive canvas.
                </p>
            </noscript>
        </div>
    );
}