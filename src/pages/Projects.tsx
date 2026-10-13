import { useState } from 'react';
import { Reveal } from '@/components/common/Reveal';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { SkillCertificateLink } from '@/components/common/SkillCertificateLink';
import { projects } from '@/data/projects';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

type Filter = 'All' | 'Featured' | 'Private';

export function Projects() {
  const [filter, setFilter] = useState<Filter>('All');

  const filtered = projects.filter((p) => {
    if (filter === 'Featured') return p.featured;
    if (filter === 'Private') return p.privateProject;
    return true;
  });

  const filters: { label: Filter; count: number }[] = [
    { label: 'All', count: projects.length },
    { label: 'Featured', count: projects.filter((p) => p.featured).length },
    { label: 'Private', count: projects.filter((p) => p.privateProject).length },
  ];

  return (
    <>
      {/* ===== Header ===== */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-20">
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-50" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
              Portfolio
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tightest text-ink-900 sm:text-5xl lg:text-6xl">
              Projects
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-500">
              A collection of projects spanning interactive 3D visualization, promotional websites,
              business websites, private company work and hackathon builds.
            </p>
          </Reveal>

          {/* Filters */}
          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap items-center gap-2">
              {filters.map((f) => (
                <button
                  key={f.label}
                  onClick={() => setFilter(f.label)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    filter === f.label
                      ? 'bg-ink-900 text-white shadow-sm'
                      : 'border border-ink-200 bg-white text-ink-600 hover:border-ink-300'
                  }`}
                >
                  {f.label}
                  <span
                    className={`rounded-full px-1.5 text-xs ${
                      filter === f.label ? 'bg-white/20 text-white' : 'bg-ink-100 text-ink-400'
                    }`}
                  >
                    {f.count}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Projects list ===== */}
      <section className="border-t border-ink-100 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal stagger className="flex flex-col gap-8">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                variant={project.featured && i === 0 ? 'featured' : 'default'}
              />
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== Detailed features section ===== */}
      <section className="border-t border-ink-100 bg-ink-50/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="In Detail"
            title="Every project, feature by feature"
            description="A complete breakdown of what each project includes."
          />

          <div className="mt-12 flex flex-col gap-6">
            {projects.map((project, i) => (
              <Reveal key={project.id} delay={i * 80}>
                <details className="group rounded-2xl border border-ink-100 bg-white p-6 transition-all duration-300 open:border-ink-200 open:shadow-lg open:shadow-ink-900/[0.03] lg:p-7">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="font-display text-2xl font-bold text-ink-200 transition-colors group-open:text-accent-300">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-bold text-ink-900">{project.title}</h3>
                        <p className="text-sm text-ink-400">{project.role} · {project.category}</p>
                      </div>
                    </div>
                    <ArrowDown
                      size={20}
                      className="shrink-0 text-ink-400 transition-transform duration-300 group-open:rotate-180"
                    />
                  </summary>

                  <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
                    {/* Long description + tech */}
                    <div>
                      <p className="text-sm leading-relaxed text-ink-500">{project.longDescription}</p>

                      {project.team && (
                        <p className="mt-3 text-sm text-ink-400">
                          Team: <span className="font-semibold text-ink-700">{project.team}</span>
                        </p>
                      )}
                      {project.achievement && (
                        <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                          {project.achievement}
                        </p>
                      )}

                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <SkillCertificateLink
                            key={tech}
                            label={tech}
                            className="rounded-md bg-ink-50 px-2.5 py-1 text-xs font-medium text-ink-600 ring-1 ring-inset ring-ink-100"
                          />
                        ))}
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2.5">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-lg bg-ink-900 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-ink-800"
                          >
                            Live Demo
                            <ArrowUpRight size={14} />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-lg border border-ink-200 px-4 py-2.5 text-sm font-semibold text-ink-700 transition-all hover:bg-ink-50"
                          >
                            GitHub
                            <ArrowUpRight size={14} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Features list */}
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-400">
                        Key Features
                      </h4>
                      <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                        {project.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2.5 rounded-lg bg-ink-50/60 px-3 py-2.5 text-sm text-ink-600"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
