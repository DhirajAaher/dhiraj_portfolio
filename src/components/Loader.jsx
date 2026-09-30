import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    let start = null;
    const duration = 2200;

    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // Ease out expo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * 100));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setTimeout(() => {
          setExiting(true);
          setTimeout(onComplete, 900);
        }, 200);
      }
    };

    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!exiting ? (
        <motion.div
          className="loader"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <span className="loader-brand">Dhiraj Aher · Portfolio</span>

          <div className="loader-number">
            {String(count).padStart(2, '0')}
          </div>

          <div className="loader-bar-wrap">
            <motion.div
              className="loader-bar-fill"
              style={{ scaleX: count / 100, transformOrigin: 'left' }}
            />
          </div>

          <span className="loader-label">Loading</span>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
