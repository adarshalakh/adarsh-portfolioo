import { Reveal } from '@/components/common/Reveal';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ExperienceCard } from '@/components/cards/ExperienceCard';
import { Button } from '@/components/common/Button';
import { experiences } from '@/data/experience';
import { skillCategories } from '@/data/skills';
import { SkillCertificateLink } from '@/components/common/SkillCertificateLink';
import { ArrowRight, Briefcase, Wrench } from 'lucide-react';

export function Experience() {
  return (
    <>
      {/* ===== Header ===== */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-20">
        <div className="pointer-events-none absolute inset-0 dot-pattern opacity-50" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
              Career
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tightest text-ink-900 sm:text-5xl lg:text-6xl">
              Experience
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-500">
              Internship, operational and volunteer experience that shaped my practical skills in
              frontend development, communication and teamwork.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== Timeline ===== */}
      <section className="border-t border-ink-100 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <Reveal stagger>
            {experiences.map((exp, i) => (
              <ExperienceCard
                key={exp.id}
                experience={exp}
                isLast={i === experiences.length - 1}
              />
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== Skills overview ===== */}
      <section className="border-t border-ink-100 bg-ink-50/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Skills"
            title="Technical & soft skills"
            description="Categorized technologies and capabilities I use across projects."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map((cat, i) => (
              <Reveal key={cat.category} delay={i * 80}>
                <div className="h-full rounded-2xl border border-ink-100 bg-white p-5 transition-all duration-500 hover:border-ink-200 hover:shadow-lg hover:shadow-ink-900/[0.04]">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                      <Wrench size={14} />
                    </span>
                    <h3 className="font-display text-sm font-bold text-ink-900">{cat.category}</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <SkillCertificateLink
                        key={skill}
                        label={skill}
                        className="rounded-md bg-ink-50 px-2.5 py-1 text-xs font-medium text-ink-600 ring-1 ring-inset ring-ink-100"
                      />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Summary strip ===== */}
      <section className="border-t border-ink-100 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal stagger className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: Briefcase, label: 'Internship', value: '3 months at P5 Digital Solution' },
              { icon: ArrowRight, label: 'Projects built', value: '5+ including 3D Calculus Studio' },
              { icon: Wrench, label: 'Core stack', value: 'React.js, TypeScript, Three.js' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-2xl border border-ink-100 bg-white p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-900 text-accent-400">
                  <item.icon size={18} />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-ink-400">{item.label}</p>
                  <p className="text-sm font-semibold text-ink-800">{item.value}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="border-t border-ink-100 py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
              Interested in working together?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button to="/contact" size="lg">
                Let's connect
                <ArrowRight size={18} />
              </Button>
              <Button to="/projects" variant="secondary" size="lg">
                See my projects
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
