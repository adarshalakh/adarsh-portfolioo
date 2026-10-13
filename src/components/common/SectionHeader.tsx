import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({ eyebrow, title, description, align = 'left', className = '' }: SectionHeaderProps) {
  return (
    <Reveal className={`flex flex-col gap-4 ${align === 'center' ? 'items-center text-center' : 'items-start'} ${className}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
          <span className="h-px w-8 bg-accent-400" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold leading-[1.1] text-ink-900 sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className={`max-w-2xl text-base leading-relaxed text-ink-500 sm:text-lg ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
