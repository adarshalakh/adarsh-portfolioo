import { useEffect, useRef, useState, type ReactNode, type ElementType } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  delay?: number;
  as?: ElementType;
}

export function Reveal({ children, className = '', stagger = false, delay = 0, as: Tag = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${stagger ? 'stagger' : 'reveal'} ${visible ? 'is-visible' : ''} ${className}`}
      style={delay && !stagger ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
