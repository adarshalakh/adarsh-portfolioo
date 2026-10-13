import { Link } from 'react-router-dom';
import { SkillCertificateLink } from '@/components/common/SkillCertificateLink';
import type { Project } from '@/types';
import { ArrowUpRight, ExternalLink, Github, Lock, Eye } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index?: number;
  variant?: 'default' | 'featured';
}

export function ProjectCard({ project, variant = 'default' }: ProjectCardProps) {
  const isFeatured = variant === 'featured';

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white transition-all duration-500 hover:border-ink-200 hover:shadow-2xl hover:shadow-ink-900/[0.07] ${
        isFeatured ? 'lg:flex-row' : ''
      }`}
    >
      {/* Visual preview */}
      <div
        className={`relative overflow-hidden bg-ink-100 ${isFeatured ? 'lg:w-[44%]' : 'aspect-[16/10]'}`}
      >
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {project.privateProject && (
          <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-ink-900/85 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
            <Lock size={12} />
            Private Project
          </div>
        )}
        {project.featured && !project.privateProject && (
          <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-accent-600 backdrop-blur-sm">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`flex flex-1 flex-col gap-4 p-6 ${isFeatured ? 'lg:p-8' : ''}`}>
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-600">
            {project.category}
          </span>
          {project.achievement && (
            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
              {project.achievement}
            </span>
          )}
        </div>

        <div>
          <h3 className={`font-display font-bold text-ink-900 ${isFeatured ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
            {project.title}
          </h3>
          {project.team && (
            <p className="mt-1 text-sm text-ink-400">Team: {project.team}</p>
          )}
        </div>

        <p className={`text-sm leading-relaxed text-ink-500 ${isFeatured ? '' : 'line-clamp-3'}`}>
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, isFeatured ? 8 : 5).map((tech) => (
            <SkillCertificateLink
              key={tech}
              label={tech}
              className="rounded-md bg-ink-50 px-2.5 py-1 text-xs font-medium text-ink-600 ring-1 ring-inset ring-ink-100"
            />
          ))}
          {project.technologies.length > (isFeatured ? 8 : 5) && (
            <span className="rounded-md px-2.5 py-1 text-xs font-medium text-ink-400">
              +{project.technologies.length - (isFeatured ? 8 : 5)} more
            </span>
          )}
        </div>

        {/* Key features (featured only) */}
        {isFeatured && (
          <ul className="grid gap-2 sm:grid-cols-2">
            {project.features.slice(0, 6).map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-ink-500">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Actions */}
        <div className="mt-auto flex flex-wrap items-center gap-2.5 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-ink-900 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-ink-800 hover:shadow-lg hover:shadow-ink-900/10"
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-sm font-semibold text-ink-700 transition-all duration-300 hover:border-ink-300 hover:bg-ink-50"
            >
              <Github size={15} />
              GitHub
            </a>
          )}
          {project.documentUrl && (
            <a
              href={project.documentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-sm font-semibold text-ink-700 transition-all duration-300 hover:border-ink-300 hover:bg-ink-50"
            >
              <ExternalLink size={15} />
              Project PDF
            </a>
          )}
          {project.privateProject && (
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-ink-200 bg-ink-50 px-4 py-2.5 text-sm font-medium text-ink-500">
              <Eye size={15} />
              Private — No public link
            </span>
          )}
          <Link
            to="/projects"
            className="ml-auto inline-flex items-center gap-1 text-sm font-semibold text-ink-600 transition-colors hover:text-accent-600"
          >
            Details
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
