import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const ringRef = useRef();
  const dotRef = useRef();
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    let mx = 0, my = 0;
    let rx = 0, ry = 0;
    let raf;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top = my + 'px';
    };

    const animate = () => {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      raf = requestAnimationFrame(animate);
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    const onEnter = (e) => {
      if (e.target.closest('a, button, [data-cursor]')) {
        setHovering(true);
      }
    };

    const onLeave = (e) => {
      if (e.target.closest('a, button, [data-cursor]')) {
        setHovering(false);
      }
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout', onLeave);
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout', onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className={`cursor ${hovering ? 'hovering' : ''} ${clicking ? 'clicking' : ''}`}
      />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}
