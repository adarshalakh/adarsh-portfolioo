import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 will-change-transform active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none';

const variants: Record<Variant, string> = {
  primary:
    'bg-ink-900 text-white hover:bg-ink-800 shadow-sm hover:shadow-xl hover:shadow-ink-900/10 hover:-translate-y-0.5',
  secondary:
    'bg-white text-ink-900 border border-ink-200 hover:border-ink-400 hover:bg-ink-50 hover:-translate-y-0.5 shadow-sm',
  ghost: 'text-ink-700 hover:text-accent-600 hover:bg-accent-50',
};

const sizes: Record<Size, string> = {
  sm: 'text-sm px-4 py-2',
  md: 'text-sm px-5 py-2.5',
  lg: 'text-base px-7 py-3.5',
};

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  to,
  href,
  target,
  rel,
  type = 'button',
  onClick,
  disabled,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
