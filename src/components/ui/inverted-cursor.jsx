import React, { useState, useEffect, useRef, useCallback } from 'react';

import './inverted-cursor.css';

const INTERACTIVE = 'a, button, input, select, textarea, [role="button"], summary';

export const Cursor = ({ size = 30, hoverSize = 60 }) => {
    const dotRef = useRef(null);
    const rafRef = useRef();
    const posRef = useRef({ x: -100, y: -100 });
    const prevRef = useRef({ x: -100, y: -100 });
    const reducedMotionRef = useRef(false);
    const [visible, setVisible] = useState(false);
    const [hovered, setHovered] = useState(false);
    const displaySize = hovered ? hoverSize : size;

    const animate = useCallback(() => {
        const el = dotRef.current;
        if (!el) return;

        const ease = reducedMotionRef.current ? 1 : 0.2;
        const curX = prevRef.current.x;
        const curY = prevRef.current.y;
        const targetX = posRef.current.x;
        const targetY = posRef.current.y;

        const newX = curX + (targetX - curX) * ease;
        const newY = curY + (targetY - curY) * ease;

        prevRef.current = { x: newX, y: newY };
        el.style.transform = `translate(${newX}px, ${newY}px) translate(-50%, -50%)`;

        rafRef.current = requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
        const capability = window.matchMedia('(hover: hover) and (pointer: fine)');
        if (!capability.matches) return;

        reducedMotionRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const handleMouseMove = (e) => {
            posRef.current = { x: e.clientX, y: e.clientY };
            setVisible(true);
        };

        const handleMouseEnter = () => setVisible(true);

        const handleMouseLeave = () => setVisible(false);

        const handleMouseOver = (e) => {
            setHovered(!!e.target.closest(INTERACTIVE));
        };

        document.addEventListener('mousemove', handleMouseMove, { passive: true });
        document.documentElement.addEventListener('mouseenter', handleMouseEnter);
        document.documentElement.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseover', handleMouseOver);

        document.documentElement.classList.add('custom-cursor-active');

        rafRef.current = requestAnimationFrame(animate);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseover', handleMouseOver);
            document.documentElement.classList.remove('custom-cursor-active');
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            document.body.style.cursor = 'auto';
        };
    }, [animate]);

    return (
        <div
            ref={dotRef}
            className="inverted-cursor-dot"
            style={{ width: displaySize, height: displaySize, opacity: visible ? 1 : 0 }}
            aria-hidden="true"
        />
    );
};

export default Cursor;