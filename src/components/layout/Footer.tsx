import { Link } from 'react-router-dom';
import { navLinks, profile } from '@/data/profile';
import { SocialIcons } from '@/components/common/SocialIcons';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-ink-50/50">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Identity */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2.5" aria-label="Adarsh Mehta — Home">
              <img src="/images/symbol.jpg" alt="" className="h-9 w-9 rounded-lg object-cover" />
              <span className="font-display text-base font-bold text-ink-900">Adarsh Mehta</span>
            </Link>
            <p className="text-sm leading-relaxed text-ink-500">
              Frontend Developer building responsive, interactive and modern web experiences.
            </p>
            <SocialIcons className="mt-1" />
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">Quick Links</h3>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-ink-600 transition-colors hover:text-accent-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">Social</h3>
            <ul className="flex flex-col gap-2.5">
              {profile.links
                .filter((l) => l.icon !== 'mail' && l.icon !== 'phone')
                .map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 text-sm text-ink-600 transition-colors hover:text-accent-600"
                    >
                      {link.label}
                      <ArrowUpRight size={13} className="opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5" />
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">Contact</h3>
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 text-sm text-ink-600 transition-colors hover:text-accent-600"
            >
              <Mail size={15} className="text-ink-400" />
              {profile.email}
            </a>
            <p className="inline-flex items-center gap-2 text-sm text-ink-600">
              <MapPin size={15} className="text-ink-400" />
              {profile.location}
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-ink-200/60 pt-6">
          <p className="text-xs text-ink-400">
            &copy; 2026 Adarsh Mehta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
