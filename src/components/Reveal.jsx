import { useInView } from 'react-intersection-observer';

export default function Reveal({ children, delay = 0, direction = 'up', className = '' }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const transforms = {
    up: 'translateY(40px)',
    down: 'translateY(-40px)',
    left: 'translateX(-40px)',
    right: 'translateX(40px)',
    none: 'none',
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : transforms[direction],
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
