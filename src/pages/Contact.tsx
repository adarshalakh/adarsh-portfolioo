import { Reveal } from '@/components/common/Reveal';
import { SocialIcons } from '@/components/common/SocialIcons';
import { profile } from '@/data/profile';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Download,
  ArrowUpRight,
} from 'lucide-react';

export function Contact() {
  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, '')}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: profile.location,
      href: undefined,
    },
  ];

  return (
    <>
      {/* ===== Header ===== */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-20">
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-50" />
        <div className="pointer-events-none absolute top-10 right-0 h-80 w-80 rounded-full bg-accent-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
              Contact
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tightest text-ink-900 sm:text-5xl lg:text-6xl">
              Let's build something
              <span className="shimmer-text"> meaningful.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-500">
              I'm open to frontend development internships, opportunities, collaborations and
              interesting projects.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== Contact content ===== */}
      <section className="border-t border-ink-100 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
            {/* Left: contact info */}
            <div className="flex flex-col gap-6">
              <Reveal>
                <div className="rounded-2xl border border-ink-100 bg-white p-6 lg:p-7">
                  <h2 className="font-display text-lg font-bold text-ink-900">Get in touch</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    Reach out through any of these channels — I usually respond within a day or two.
                  </p>

                  <div className="mt-6 flex flex-col gap-4">
                    {contactItems.map((item) => (
                      <div key={item.label} className="flex items-center gap-3.5">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                          <item.icon size={18} />
                        </span>
                        <div className="min-w-0">
                          <p className="text-xs font-medium uppercase tracking-wider text-ink-400">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="block truncate text-sm font-semibold text-ink-800 transition-colors hover:text-accent-600"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-sm font-semibold text-ink-800">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-ink-100 pt-5">
                    <p className="text-xs font-medium uppercase tracking-wider text-ink-400">
                      Find me online
                    </p>
                    <SocialIcons className="mt-3" />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <a
                  href={profile.resumeUrl}
                  download
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-ink-100 bg-ink-900 p-5 text-white transition-all duration-300 hover:bg-ink-800 hover:shadow-xl hover:shadow-ink-900/10"
                >
                  <div className="flex items-center gap-3">
                    <Download size={20} className="text-accent-400" />
                    <div>
                      <p className="text-sm font-bold">Download Resume</p>
                      <p className="text-xs text-ink-400">PDF — add your file to replace this</p>
                    </div>
                  </div>
                  <ArrowUpRight size={18} className="text-ink-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Reveal>
            </div>

            {/* Right: form */}
            <Reveal delay={150}>
              <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm lg:p-8">
                <h2 className="font-display text-lg font-bold text-ink-900">Send a message</h2>
                <p className="mt-1.5 text-sm text-ink-500">
                  Fill out the form and your message will be sent to my inbox.
                </p>

                <form
                  action="https://formsubmit.co/adarshmehta2403358@dei.ac.in"
                  method="POST"
                  className="mt-6 flex flex-col gap-5"
                >
                    <input
                      type="hidden"
                      name="_subject"
                      value="Portfolio contact form message"
                    />
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-ink-700">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        autoComplete="name"
                        className="mt-2 w-full rounded-xl border border-ink-200 bg-ink-50/40 px-4 py-3 text-sm text-ink-900 placeholder-ink-400 transition-colors focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-500/30"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-ink-700">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        autoComplete="email"
                        className="mt-2 w-full rounded-xl border border-ink-200 bg-ink-50/40 px-4 py-3 text-sm text-ink-900 placeholder-ink-400 transition-colors focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-500/30"
                        placeholder="you@example.com"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-ink-700">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="mt-2 w-full resize-none rounded-xl border border-ink-200 bg-ink-50/40 px-4 py-3 text-sm text-ink-900 placeholder-ink-400 transition-colors focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-500/30"
                        placeholder="Tell me about the opportunity or project..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-ink-900 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-ink-800 hover:shadow-xl hover:shadow-ink-900/10 active:scale-[0.98]"
                    >
                      <Send size={16} />
                      Send Message
                    </button>

                    <p className="text-xs text-ink-400">
                      This form is securely handled by FormSubmit and delivered to {profile.email}.
                    </p>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
