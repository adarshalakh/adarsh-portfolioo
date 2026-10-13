import type { Experience } from '@/types';
import { SkillCertificateLink } from '@/components/common/SkillCertificateLink';
import { User } from 'lucide-react';

interface ExperienceCardProps {
  experience: Experience;
  isLast: boolean;
}

export function ExperienceCard({ experience, isLast }: ExperienceCardProps) {
  return (
    <div className="relative flex gap-6 pb-12 last:pb-0 md:gap-8">
      {/* Timeline rail */}
      <div className="relative flex flex-col items-center">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-ink-200 bg-white font-display text-sm font-bold text-ink-900 shadow-sm transition-all duration-300 hover:border-accent-300 hover:text-accent-600">
          {experience.number}
        </div>
        {!isLast && (
          <div className="mt-2 w-px flex-1 bg-gradient-to-b from-ink-200 to-ink-100" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-2">
        <div className="rounded-2xl border border-ink-100 bg-white p-6 transition-all duration-500 hover:border-ink-200 hover:shadow-xl hover:shadow-ink-900/[0.05] md:p-7">
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-600">
                {experience.period}
              </span>
              <span className="text-xs font-medium text-ink-400">{experience.type}</span>
            </div>
            <h3 className="mt-2 font-display text-xl font-bold text-ink-900">
              {experience.company}
            </h3>
            <p className="text-sm font-semibold text-ink-600">{experience.role}</p>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-ink-500">
            {experience.description}
          </p>

          {experience.mentor && (
            <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-ink-400">
              <User size={14} />
              Mentor: <span className="font-medium text-ink-600">{experience.mentor}</span>
            </p>
          )}

          {/* Details list */}
          <ul className="mt-5 grid gap-2">
            {experience.details.map((detail) => (
              <li key={detail} className="flex items-start gap-2.5 text-sm text-ink-500">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                {detail}
              </li>
            ))}
          </ul>

          {/* Technologies */}
          <div className="mt-6 flex flex-wrap gap-1.5 border-t border-ink-100 pt-5">
            {experience.technologies.map((tech) => (
              <SkillCertificateLink
                key={tech}
                label={tech}
                className="rounded-md bg-ink-50 px-2.5 py-1 text-xs font-medium text-ink-600 ring-1 ring-inset ring-ink-100"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
