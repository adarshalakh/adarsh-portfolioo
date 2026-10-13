import { Reveal } from '@/components/common/Reveal';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Button } from '@/components/common/Button';
import { ProfileVisual } from '@/components/common/ProfileVisual';
import { SocialIcons } from '@/components/common/SocialIcons';
import { profile } from '@/data/profile';
import { education } from '@/data/experience';
import {
  Code2,
  GraduationCap,
  Heart,
  Lightbulb,
  Users,
  MapPin,
  Mail,
  ArrowRight,
  BookOpen,
  Calculator,
  Award,
  Music2,
  Plane,
} from 'lucide-react';

const aboutImagePlaceholders = {
  travel: {
    src: '/images/travel.jpg',  
    alt: 'auli',},
  music: {
    src: '/images/music.jpg',
    alt: 'Temporary live music image placeholder ',
  },
  basketball: {
    src: '/images/basketball.jpg',
    alt: 'Temporary basketball image placeholder',
  },
  badminton: {
    src: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1000&q=80',
    alt: 'Temporary badminton image placeholder',
  },
  photography: [
    {
      src: '/images/cam1.jpg',
      alt: 'Temporary stock image of a camera, not a photograph taken by Adarsh',
    },
    {
      src: '/images/cam2.jpg',
      alt: 'Temporary event photography example, not a photograph taken by Adarsh',
    },
    {
      src: '/images/cam3.jpg',
      alt: 'Temporary gathering photography example, not a photograph taken by Adarsh',
    },
  ],
};

export function About() {
  const journeyPoints = [
    {
      icon: Code2,
      title: 'Getting started',
      text: 'My interest in web development began with curiosity about how websites work. I started with HTML, CSS and JavaScript, building small projects to understand the fundamentals. My first portfolio project is available on GitHub.',
      link: 'https://github.com/adarshalakh/adarsh-portfolio',
    },
    {
      icon: BookOpen,
      title: 'Deepening the craft',
      text: 'I moved to React.js and TypeScript, learning component-based architecture, state management and modern build tools like Vite. My coursework in mathematics and computer science reinforced my analytical thinking.',
    },
    {
      icon: Calculator,
      title: 'Math meets code',
      text: 'I built 3D Calculus Studio to combine my mathematics background with frontend development — using Three.js and React Three Fiber to visualize mathematical surfaces interactively.',
      link: 'https://3d-calculus-studio.vercel.app/',
      repoLink: 'https://github.com/adarshalakh/interactive-calculus-studio',
    },
    {
      icon: Lightbulb,
      title: 'Real-world experience',
      text: 'During my internship at P5 Digital Solution, I worked on production-quality React.js projects including the VR Tiffins promotional website and a private CMS, learning from mentor feedback and real deployment workflows.',
    },
  ];

  const whatIEnjoy = [
    'Responsive, mobile-first interfaces',
    'Interactive 3D and data visualization',
    'Clean component architecture',
    'Smooth micro-interactions and animations',
    'Accessible, semantic HTML',
    'Turning mathematical concepts into visual tools',
  ];

  const mindsets = [
    'I learn by building — every project teaches me something new.',
    'I value clean code, reusability and attention to detail.',
    'I take mentor feedback seriously and iterate on it.',
    'I am comfortable communicating and working in teams.',
  ];

  return (
    <>
      {/* ===== Header ===== */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-20">
        <div className="pointer-events-none absolute inset-0 dot-pattern opacity-50" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <Reveal>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
                  About Me
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tightest text-ink-900 sm:text-5xl lg:text-6xl">
                  Who I am
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-500">
                  I'm Adarsh Mehta, a frontend developer pursuing a B.Sc. in Mathematics and
                  Computer Science at Dayalbagh Educational Institute in Agra (2024–2028). I enjoy
                  building responsive, interactive experiences with HTML, CSS, JavaScript, React
                  and TypeScript, and exploring how 3D can make the web more engaging.
                </p>
              </Reveal>
              <Reveal delay={250}>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-500">
                  I completed a three-month Frontend Developer internship at P5 Digital Solution
                  in 2026, where I worked with responsive interfaces, reusable React components
                  and frontend workflows. Projects like{' '}
                  <a className="font-medium text-ink-700 underline decoration-ink-300 underline-offset-4 hover:text-accent-600" href="https://3d-calculus-studio.vercel.app/" target="_blank" rel="noopener noreferrer">3D Calculus Studio</a>,{' '}
                  <a className="font-medium text-ink-700 underline decoration-ink-300 underline-offset-4 hover:text-accent-600" href="https://vegella.vercel.app/" target="_blank" rel="noopener noreferrer">Vegella</a> and{' '}
                  <a className="font-medium text-ink-700 underline decoration-ink-300 underline-offset-4 hover:text-accent-600" href="https://vrtiffins.vercel.app/" target="_blank" rel="noopener noreferrer">VR Tiffins</a>{' '}
                  have let me put that learning into practice. Outside programming, I enjoy
                  travelling, music, basketball, badminton and taking photographs with my Nikon.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                  <a className="text-ink-600 transition-colors hover:text-accent-600" href="https://github.com/adarshalakh" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a className="text-ink-600 transition-colors hover:text-accent-600" href="https://linkedin.com/in/adarsh-mehta-dei" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={300} className="hidden lg:block">
              <div className="flex items-end gap-2">
                <ProfileVisual size="xl" />
                <img
                  src="/images/ss.jpg"
                  alt=""
                  className="mb-3 h-16 w-16 rounded-xl border border-white/80 object-cover shadow-[0_10px_25px_rgba(15,23,42,0.12)]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Quick facts ===== */}
      <section className="border-t border-ink-100 py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal stagger className="grid gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-xl border border-ink-100 bg-white p-4">
              <MapPin size={20} className="text-accent-600" />
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-ink-400">Location</p>
                <p className="text-sm font-semibold text-ink-800">{profile.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-ink-100 bg-white p-4">
              <GraduationCap size={20} className="text-accent-600" />
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-ink-400">Education</p>
                <p className="text-sm font-semibold text-ink-800">B.Sc. Math &amp; CS, 2024–2028</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-ink-100 bg-white p-4">
              <Mail size={20} className="text-accent-600" />
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-ink-400">Email</p>
                <p className="text-sm font-semibold text-ink-800">{profile.email}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Frontend journey ===== */}
      <section className="border-t border-ink-100 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Journey"
            title="My frontend development journey"
            description="From basic HTML to interactive 3D visualization — here's how I got here."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {journeyPoints.map((point, i) => (
              <Reveal key={point.title} delay={i * 100}>
                <div className="group h-full rounded-2xl border border-ink-100 bg-white p-7 transition-all duration-500 hover:border-ink-200 hover:shadow-xl hover:shadow-ink-900/[0.05]">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-600 transition-colors duration-300 group-hover:bg-accent-600 group-hover:text-white">
                      <point.icon size={20} />
                    </div>
                    {point.title === 'Math meets code' && point.link && (
                      <>
                        <a
                          href={point.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-medium text-ink-600 underline decoration-ink-300 underline-offset-4 hover:text-accent-600"
                        >
                          Visit website
                        </a>
                        {point.repoLink && (
                          <a
                            href={point.repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-medium text-ink-600 underline decoration-ink-300 underline-offset-4 hover:text-accent-600"
                          >
                            GitHub repo
                          </a>
                        )}
                      </>
                    )}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-900">{point.title}</h3>
                  {point.title === 'Getting started' && point.link ? (
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">
                      {point.text}{' '}
                      <a
                        href={point.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-ink-700 underline decoration-ink-300 underline-offset-4 hover:text-accent-600"
                      >
                        GitHub repo
                      </a>
                    </p>
                  ) : (
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">{point.text}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== What I enjoy + Learning mindset ===== */}
      <section className="border-t border-ink-100 bg-ink-50/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* What I enjoy building */}
            <div>
              <Reveal>
                <div className="flex items-center gap-2.5">
                  <Heart size={20} className="text-accent-600" />
                  <h2 className="font-display text-2xl font-bold text-ink-900">What I enjoy building</h2>
                </div>
              </Reveal>
              <Reveal stagger className="mt-6 flex flex-col gap-3">
                {whatIEnjoy.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-ink-100 bg-white px-4 py-3.5 transition-colors hover:border-accent-200"
                  >
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                    <span className="text-sm text-ink-600">
                      {item}
                      {item === 'Accessible, semantic HTML' && (
                        <>
                          {' '}
                          <a
                            href="/dsa-visualizer.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-ink-700 underline decoration-ink-300 underline-offset-4 hover:text-accent-600"
                          >
                            Live demo
                          </a>
                        </>
                      )}
                    </span>
                  </div>
                ))}
              </Reveal>
            </div>

            {/* Learning mindset */}
            <div>
              <Reveal>
                <div className="flex items-center gap-2.5">
                  <Lightbulb size={20} className="text-accent-600" />
                  <h2 className="font-display text-2xl font-bold text-ink-900">Learning mindset</h2>
                </div>
              </Reveal>
              <Reveal stagger className="mt-6 flex flex-col gap-3">
                {mindsets.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-ink-100 bg-white px-4 py-3.5 transition-colors hover:border-accent-200"
                  >
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                    <span className="text-sm text-ink-600">
                      {item}
                      {index === 0 && (
                        <>
                          {' '}
                          <a
                            href="https://github.com/adarshalakh/Pathfinding_visualizer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-ink-700 underline decoration-ink-300 underline-offset-4 hover:text-accent-600"
                          >
                            Pathfinding Visualizer repo
                          </a>
                        </>
                      )}
                    </span>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Education ===== */}
      <section className="border-t border-ink-100 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Education"
            title="Academic background"
            description="My education in mathematics and computer science."
          />
          <div className="mt-12 flex flex-col gap-4">
            {education.map((edu, i) => (
              <Reveal key={edu.id} delay={i * 100}>
                <div className="group flex flex-col gap-2 rounded-2xl border border-ink-100 bg-white p-6 transition-all duration-500 hover:border-ink-200 hover:shadow-lg hover:shadow-ink-900/[0.04] sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink-50 text-accent-600">
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-ink-900">
                        {edu.id === 'dei' ? (
                          <>
                            {edu.institution}{' '}
                            <a
                              href="https://search.brave.com/search?q=dayalbagh+educational+institute&source=desktop&view=full&map_src=c&bbox=75.736%2C26.308%2C79.416%2C28.146&loc_id=loc457D63F2PHI5UANDOEAJ57ACTID6BIJUBAAAAAAA%3D"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-1 inline-block text-xs font-medium text-accent-600 underline decoration-accent-300 underline-offset-4 hover:text-accent-700"
                            >
                              About college
                            </a>
                          </>
                        ) : edu.id === 'heritage' ? (
                          <>
                            {edu.institution}{' '}
                            <a
                              href="https://heritageinternationalschooldaltonganj.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-1 inline-block text-xs font-medium text-accent-600 underline decoration-accent-300 underline-offset-4 hover:text-accent-700"
                            >
                              About school
                            </a>
                          </>
                        ) : edu.id === 'bright-land' ? (
                          <>
                            {edu.institution}{' '}
                            <a
                              href="https://brightlandschool.org/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-1 inline-block text-xs font-medium text-accent-600 underline decoration-accent-300 underline-offset-4 hover:text-accent-700"
                            >
                              About school
                            </a>
                          </>
                        ) : (
                          edu.institution
                        )}
                      </h3>
                      <p className="text-sm text-ink-500">{edu.degree}</p>
                      {edu.additional && (
                        <p className="mt-1 inline-flex items-center gap-1.5 text-xs font-medium text-accent-600">
                          <Users size={12} />
                          {edu.additional}
                        </p>
                      )}
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full bg-ink-50 px-3 py-1.5 text-xs font-semibold text-ink-600">
                    {edu.period}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Communication & teamwork ===== */}
      <section className="border-t border-ink-100 bg-ink-50/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Beyond Code"
            title="Communication & teamwork"
            description="Experience that shaped how I collaborate and lead."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Users,
                title: 'Class Representative',
                text: 'Serving as Class Representative at Dayalbagh Educational Institute, acting as a bridge between students and faculty.',
              },
              {
                icon: Heart,
                title: 'Event volunteering',
                text: 'Organized events and activities in school and coaching institutes, participating in and leading presentations and group discussions.',
              },
              {
                icon: Lightbulb,
                title: 'Public communication',
                text: 'Developed leadership, teamwork and public communication skills through seminars, presentations and collaborative activities.',
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-ink-100 bg-white p-6 transition-all duration-500 hover:shadow-lg hover:shadow-ink-900/[0.04]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                    <item.icon size={20} />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-ink-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Travelling ===== */}
      <section className="border-t border-ink-100 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Away from the Screen"
            title="A change of scenery"
          />
          <div className="mt-10 grid items-center gap-8 md:grid-cols-2">
            <Reveal>
              <img
                src={aboutImagePlaceholders.travel.src}
                alt={aboutImagePlaceholders.travel.alt}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg shadow-ink-900/[0.05]"
              />
              <p className="mt-2 text-xs text-ink-400">AULI</p>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex items-center gap-2.5">
                <Plane size={20} className="text-accent-600" />
                <h3 className="font-display text-2xl font-bold text-ink-900">Travelling</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
                I love travelling and exploring new places. Discovering new surroundings and
                experiencing different places gives me a welcome break from everyday routines.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Music ===== */}
      <section className="border-t border-ink-100 bg-ink-50/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="On Repeat"
            title="Music I enjoy"
          />
          <div className="mt-10 grid min-w-0 gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="flex items-center gap-2.5">
                <Music2 size={20} className="text-accent-600" />
                <h3 className="font-display text-xl font-bold text-ink-900">A playlist for the moment</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">
                Music is part of my everyday life. Whether I'm working on something, travelling,
                or taking a break, there's usually a playlist that matches the moment. Here's one
                I enjoy listening to.
              </p>
              <img
                src={aboutImagePlaceholders.music.src}
                alt={aboutImagePlaceholders.music.alt}
                loading="lazy"
                className="mt-6 aspect-[16/9] w-full rounded-2xl object-cover"
              />
              <p className="mt-2 text-xs text-ink-400"></p>
            </Reveal>
            <Reveal delay={100} className="min-w-0">
              <iframe
                title="Adarsh Mehta's Spotify playlist"
                src="https://open.spotify.com/embed/playlist/7Jcq2Zq9D12XIycp8CzqV2"
                className="h-[352px] w-full rounded-xl border-0"
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Sports ===== */}
      <section className="border-t border-ink-100 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Outside the Screen"
            title="Basketball & badminton"
            description="I enjoy playing basketball and badminton — a chance to stay active, enjoy a little competition and take a break from screen time."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              { title: 'Basketball', image: aboutImagePlaceholders.basketball },
              { title: 'Badminton', image: aboutImagePlaceholders.badminton },
            ].map((sport, i) => (
              <Reveal key={sport.title} delay={i * 100}>
                <article className="group h-full overflow-hidden rounded-2xl border border-ink-100 bg-white transition-all duration-500 hover:border-ink-200 hover:shadow-xl hover:shadow-ink-900/[0.05]">
                  <img
                    src={sport.image.src}
                    alt={sport.image.alt}
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-ink-900">{sport.title}</h3>
                    <p className="mt-2 text-xs text-ink-400"> </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-12">
            <h3 className="font-display text-xl font-bold text-ink-900">Sports certificates</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-500">
              Add your actual certificate images or PDFs here when you're ready. These are empty
              placeholders, not certificates or claims of achievement.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {['Basketball', 'Badminton'].map((sport) => (
                <div key={sport} className="flex items-center gap-3 rounded-xl border border-ink-100 bg-white p-4">
                  <Award size={20} className="shrink-0 text-accent-600" />
                  <div>
                    <p className="text-sm font-semibold text-ink-800">{sport} certificate</p>
                    <p className="text-xs text-ink-400">Placeholder — add your actual certificate here</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Photography ===== */}
      <section className="border-t border-ink-100 bg-ink-50/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Another Creative Outlet"
            title="Behind the Lens"
          />
          <Reveal delay={100}>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-ink-500 sm:text-base">
              Beyond coding, I enjoy getting behind my Nikon camera and capturing people, candid
              moments and memories at functions and events. Photography gives me another creative
              outlet and lets me preserve moments that matter.
            </p>
          </Reveal>
          <Reveal stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aboutImagePlaceholders.photography.map((image) => (
              <figure key={image.src} className="overflow-hidden rounded-2xl border border-ink-100 bg-white">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <figcaption className="px-4 py-3 text-xs text-ink-400">
                </figcaption>
              </figure>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== Personal interests ===== */}
      <section className="border-t border-ink-100 py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-xl font-bold text-ink-900">A Little More About Me</h2>
          </Reveal>
          <Reveal stagger className="mt-5 flex flex-wrap gap-3">
            {['Travelling', 'Music', 'Basketball', 'Badminton', 'Photography', 'Creative web projects'].map((interest) => (
              <span key={interest} className="rounded-xl border border-ink-100 bg-white px-4 py-2.5 text-sm font-medium text-ink-600">
                {interest}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="border-t border-ink-100 py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
              Want to know what I've built?
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
          <Reveal delay={200}>
            <div className="mt-8 flex items-center justify-center">
              <SocialIcons />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
