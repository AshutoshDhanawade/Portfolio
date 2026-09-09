import { useEffect, useState } from 'react';

export function useClock() {
    const fmt = () =>
        new Date().toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });

    const [time, setTime] = useState(fmt);

    useEffect(() => {
        const id = setInterval(() => setTime(fmt()), 1000);
        return () => clearInterval(id);
    }, []);

    return time;
}