import { Link } from 'react-router-dom';
import { Reveal } from '@/components/common/Reveal';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Button } from '@/components/common/Button';
import { SocialIcons } from '@/components/common/SocialIcons';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { ExperienceCard } from '@/components/cards/ExperienceCard';
import { HomeEditorialHero } from '@/components/home/HomeEditorialHero';
import { ProfileVisual } from '@/components/common/ProfileVisual';
import { SkillCertificateLink } from '@/components/common/SkillCertificateLink';
import { featuredProjects } from '@/data/projects';
import { experiences } from '@/data/experience';
import { skillCategories } from '@/data/skills';
import { profile } from '@/data/profile';
import {
  ArrowRight,
  ArrowDown,
  Download,
  Sparkles,
  Code2,
  Layers,
  GraduationCap,
} from 'lucide-react';

export function Home() {
  const topSkills = skillCategories.flatMap((c) => c.skills).slice(0, 14);
  const previewExperiences = experiences.slice(0, 2);

  return (
    <>
      <HomeEditorialHero />

      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-40 lg:pb-28">
        {/* Background patterns */}
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-60" />
        <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-accent-100/40 blur-3xl" />
        <div className="pointer-events-none absolute top-40 -left-20 h-72 w-72 rounded-full bg-violet-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
            {/* Left: text */}
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-ink-600 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Available for internships & collaborations
                </span>
              </Reveal>

              <Reveal delay={100}>
                <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tightest text-ink-900 sm:text-5xl lg:text-6xl xl:text-7xl">
                  Frontend
                  <br />
                  <span className="shimmer-text">Developer</span>
                </h2>
              </Reveal>

              <Reveal delay={200}>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-500 sm:text-xl">
                  Building responsive, interactive and modern web experiences.
                </p>
              </Reveal>

              <Reveal delay={300}>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-400 sm:text-base">
                  I'm Adarsh Mehta, a B.Sc. Mathematics &amp; Computer Science student and Frontend
                  Developer with hands-on internship experience in React.js, JavaScript and modern web
                  development.
                </p>
              </Reveal>

              <Reveal delay={400}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button to="/projects" size="lg">
                    View Projects
                    <ArrowRight size={18} />
                  </Button>
                  <Button to="/contact" variant="secondary" size="lg">
                    Contact Me
                  </Button>
                  <a
                    href={profile.resumeUrl}
                    download
                    className="inline-flex items-center gap-2 rounded-xl px-4 py-3.5 text-sm font-semibold text-ink-600 transition-colors hover:text-accent-600"
                  >
                    <Download size={16} />
                    Resume
                  </a>
                </div>
              </Reveal>

              <Reveal delay={500}>
                <div className="mt-8 flex items-center gap-3">
                  <span className="text-xs font-medium uppercase tracking-wider text-ink-400">
                    Connect
                  </span>
                  <span className="h-px w-8 bg-ink-200" />
                  <SocialIcons />
                </div>
              </Reveal>
            </div>

            {/* Right: visual */}
            <Reveal delay={300} className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent-100 to-violet-400/20 blur-2xl" />
                <div className="relative rounded-3xl border border-ink-100 bg-white p-8 shadow-xl shadow-ink-900/[0.06]">
                  <div className="flex items-center justify-between">
                    <div className="relative shrink-0">
                      <ProfileVisual size="md" />
                      <img
                        src="/images/loc.jpg"
                        alt=""
                        className="absolute -bottom-2 -right-3 h-12 w-12 rounded-full border-4 border-white object-cover shadow-md"
                      />
                    </div>
                    <div className="text-right">
                      <p className="font-display text-lg font-bold text-ink-900">{profile.name}</p>
                      <p className="text-sm text-ink-500">{profile.title}</p>
                      <p className="mt-1 text-xs text-ink-400">{profile.location}</p>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {[
                      { icon: Code2, label: 'React.js', value: 'Core' },
                      { icon: Layers, label: 'TypeScript', value: 'Typed' },
                      { icon: Sparkles, label: 'Three.js', value: '3D' },
                      { icon: GraduationCap, label: 'B.Sc. CS', value: '2028' },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-2.5 rounded-xl border border-ink-100 bg-ink-50/50 px-3 py-2.5"
                      >
                        <item.icon size={18} className="text-accent-600" />
                        <div>
                          <p className="text-xs font-semibold text-ink-800">{item.label}</p>
                          <p className="text-[11px] text-ink-400">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Scroll cue */}
          <Reveal delay={600}>
            <div className="mt-16 flex items-center gap-2 text-xs font-medium text-ink-400">
              <ArrowDown size={14} className="animate-bounce" />
              Scroll to explore
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Short intro ===== */}
      <section className="border-t border-ink-100 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
            <Reveal>
              <div className="flex flex-col gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
                  Introduction
                </span>
                <img
                  src="/images/asth.jpg"
                  alt="Adarsh Mehta"
                  className="aspect-[4/3] w-full max-w-sm rounded-2xl object-cover object-bottom shadow-lg shadow-ink-900/[0.08]"
                />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <p className="font-display text-2xl font-semibold leading-[1.3] text-ink-800 sm:text-3xl lg:text-4xl">
                I enjoy turning ideas into clean, responsive and interactive digital experiences —
                combining mathematics, design and code to build things that feel good to use.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Selected projects ===== */}
      <section className="border-t border-ink-100 bg-ink-50/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              eyebrow="Selected Work"
              title="Featured Projects"
              description="A selection of projects that showcase my approach to frontend development — from interactive 3D math visualization to responsive business websites."
            />
            <Reveal>
              <Link
                to="/projects"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-ink-700 transition-colors hover:text-accent-600"
              >
                View all projects
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <Reveal stagger className="mt-12 flex flex-col gap-6">
            {featuredProjects.slice(0, 3).map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                variant={i === 0 ? 'featured' : 'default'}
              />
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== Experience preview ===== */}
      <section className="border-t border-ink-100 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              eyebrow="Experience"
              title="Where I've worked"
              description="Real internship and hands-on experience in frontend development, operations and event management."
            />
            <Reveal>
              <Link
                to="/experience"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-ink-700 transition-colors hover:text-accent-600"
              >
                Full experience
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {previewExperiences.map((exp, i) => (
              <Reveal key={exp.id} delay={i * 100}>
                <ExperienceCard experience={exp} isLast={i === previewExperiences.length - 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Tech stack preview ===== */}
      <section className="border-t border-ink-100 bg-ink-50/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Technical Stack"
            title="Technologies I work with"
            description="A focused toolkit for building modern, interactive web applications."
          />

          <Reveal stagger className="mt-10 flex flex-wrap gap-2.5">
            {topSkills.map((skill) => (
              <SkillCertificateLink
                key={skill}
                label={skill}
                className="rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-sm font-medium text-ink-700 transition-all duration-300 hover:border-accent-300 hover:text-accent-600 hover:shadow-md hover:shadow-accent-500/5"
              />
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="border-t border-ink-100 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-[1.15] text-ink-900 sm:text-4xl lg:text-5xl">
              Let's build something
              <span className="shimmer-text"> meaningful.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-500 sm:text-lg">
              I'm open to frontend development internships, opportunities, collaborations and
              interesting projects.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button to="/contact" size="lg">
                Get in touch
                <ArrowRight size={18} />
              </Button>
              <Button to="/about" variant="secondary" size="lg">
                About me
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
