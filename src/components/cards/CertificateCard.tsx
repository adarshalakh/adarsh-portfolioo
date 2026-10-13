import type { Certification } from '@/types';
import { Award, ExternalLink, ImageIcon } from 'lucide-react';

interface CertificateCardProps {
  certification: Certification;
}

export function CertificateCard({ certification }: CertificateCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white transition-all duration-500 hover:border-ink-200 hover:shadow-xl hover:shadow-ink-900/[0.05]">
      {/* Image preview area */}
      <div className="relative aspect-[4/3] overflow-hidden bg-ink-50">
        {certification.image ? (
          <img
            src={certification.image}
            alt={`${certification.title} certificate`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 dot-pattern">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-ink-100 transition-all duration-300 group-hover:ring-accent-200">
              <ImageIcon size={24} className="text-ink-300" />
            </div>
            <p className="text-xs font-medium text-ink-400">Certificate preview</p>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
            <Award size={16} />
          </span>
          {certification.year && (
            <span className="text-xs font-semibold text-ink-400">{certification.year}</span>
          )}
        </div>

        <h3 className="font-display text-base font-bold leading-snug text-ink-900">
          {certification.title}
        </h3>

        <p className="text-sm font-medium text-ink-600">{certification.issuer}</p>

        <p className="text-sm leading-relaxed text-ink-500">{certification.description}</p>

        {certification.credentialUrl && (
          <a
            href={certification.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-ink-700 transition-colors hover:text-accent-600"
          >
            View Credential
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </article>
  );
}
