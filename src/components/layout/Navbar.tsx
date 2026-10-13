import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '@/data/profile';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-ink-100 bg-white/85 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8 lg:h-18">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-2.5"
            aria-label="Adarsh Mehta — Home"
          >
            <img
              src="/images/symbol.jpg"
              alt=""
              className="h-9 w-9 rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="hidden font-display text-base font-bold text-ink-900 sm:block">
              Adarsh Mehta
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-ink-900' : 'text-ink-500 hover:text-ink-900'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-4 -bottom-px h-px bg-accent-500" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden items-center gap-1.5 rounded-xl bg-ink-900 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-ink-800 hover:shadow-lg hover:shadow-ink-900/10 sm:inline-flex"
            >
              Let's Connect
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-700 transition-colors hover:bg-ink-100 lg:hidden"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!menuOpen}
      >
        <div
          className={`absolute inset-0 bg-ink-900/20 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[78%] max-w-xs bg-white shadow-2xl transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex h-16 items-center justify-between border-b border-ink-100 px-5">
            <span className="font-display text-sm font-bold text-ink-900">Menu</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-600 hover:bg-ink-100"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
          <div className="flex flex-col gap-1 px-3 py-6">
            {navLinks.map((link, i) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-all duration-300 ${
                    isActive ? 'bg-accent-50 text-accent-700' : 'text-ink-700 hover:bg-ink-50'
                  }`}
                  style={{
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? 'translateX(0)' : 'translateX(20px)',
                    transition: `opacity 0.3s ease ${i * 60 + 100}ms, transform 0.3s ease ${i * 60 + 100}ms, background-color 0.2s, color 0.2s`,
                  }}
                >
                  {link.label}
                  <ArrowUpRight size={16} className="text-ink-300" />
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-ink-900 px-5 py-3.5 text-base font-semibold text-white"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateX(0)' : 'translateX(20px)',
                transition: `opacity 0.3s ease ${navLinks.length * 60 + 100}ms, transform 0.3s ease ${navLinks.length * 60 + 100}ms`,
              }}
            >
              Let's Connect
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
