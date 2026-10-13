import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

export function PageTransition({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      setShow(true);
      return;
    }
    setShow(false);
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setShow(true));
    });
    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  return (
    <div
      key={pathname}
      className={show ? 'page-enter page-enter-active' : 'page-enter'}
    >
      {children}
    </div>
  );
}
