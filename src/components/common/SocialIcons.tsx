import type { SocialLink } from '@/types';
import { profile } from '@/data/profile';
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Mail,
  Phone,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<SocialLink['icon'], LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  twitter: Twitter,
  mail: Mail,
  phone: Phone,
};

interface SocialIconsProps {
  links?: SocialLink[];
  size?: number;
  className?: string;
  iconClassName?: string;
}

export function SocialIcons({ links = profile.links, size = 18, className = '', iconClassName = '' }: SocialIconsProps) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {links.map((link) => {
        const Icon = iconMap[link.icon];
        const isExternal = !link.url.startsWith('mailto:') && !link.url.startsWith('tel:');
        return (
          <a
            key={link.label}
            href={link.url}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            aria-label={link.label}
            title={link.label}
            className={`group flex h-10 w-10 items-center justify-center rounded-lg text-ink-500 transition-all duration-300 hover:bg-ink-100 hover:text-ink-900 ${iconClassName}`}
          >
            <Icon size={size} className="transition-transform duration-300 group-hover:scale-110" />
          </a>
        );
      })}
    </div>
  );
}
