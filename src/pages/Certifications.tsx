import { Reveal } from '@/components/common/Reveal';
import { SectionHeader } from '@/components/common/SectionHeader';
import { CertificateCard } from '@/components/cards/CertificateCard';
import { Button } from '@/components/common/Button';
import { certifications } from '@/data/certifications';
import { ArrowRight } from 'lucide-react';

export function Certifications() {
  return (
    <>
      {/* ===== Header ===== */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-20">
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-50" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
              Achievements
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tightest text-ink-900 sm:text-5xl lg:text-6xl">
              Certifications
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-500">
              Workshops, participation certificates and internship credentials that document my
              ongoing learning journey.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== Certificates grid ===== */}
      <section className="border-t border-ink-100 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <CertificateCard key={cert.id} certification={cert} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="border-t border-ink-100 py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
              Want to see what I've built with these skills?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button to="/projects" size="lg">
                View projects
                <ArrowRight size={18} />
              </Button>
              <Button to="/contact" variant="secondary" size="lg">
                Get in touch
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
