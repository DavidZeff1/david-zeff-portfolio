import Link from "next/link";
import {
  Mail,
  Github,
  Linkedin,
  ArrowUpRight,
  FileText,
  Terminal as TerminalIcon,
} from "lucide-react";
import {
  caseStudies,
  principles,
  skillGroups,
  experience,
  education,
  softwareProjects,
} from "@/lib/projects";
import Footer from "@/components/Footer";

const STATS = [
  { value: "1.8M+", label: "transaction rows analysed" },
  { value: "4", label: "end-to-end analyses, all live" },
  { value: "8-figure", label: "shekel budgets analysed daily" },
];

function SectionHeading({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="flex items-baseline gap-4 mb-10">
      <span className="text-xs tabular-nums tracking-[0.2em] text-[var(--muted)]">{n}</span>
      <h2 className="font-display text-2xl md:text-3xl text-[var(--heading)]">{children}</h2>
      <span className="flex-1 h-px bg-[var(--border)]" />
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="w-full">
      {/* ---------------------------------------------------------------- hero */}
      <section className="pt-6 pb-24 md:pt-16 md:pb-32">
        <div className="fade-up">
          <p className="text-xs tracking-[0.25em] uppercase text-[var(--muted)] mb-6">
            Data Analyst · Alon Shvut, Israel
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-[var(--heading)] mb-8">
            David Zeff
          </h1>
          <p className="font-display text-2xl md:text-4xl leading-snug max-w-3xl text-[var(--fg)] mb-8">
            I find the number behind the number.
          </p>
          <p className="max-w-2xl text-base md:text-lg leading-relaxed text-[var(--muted)]">
            A headline figure is usually hiding something — growth that&apos;s
            really one lever, a margin decline that&apos;s entirely mix, a
            campaign result that shrinks once you adjust for trend. I&apos;m a
            Computer Science graduate working as a Financial Analyst at Gush
            Etzion Regional Council, and the four analyses below are me going
            looking for exactly that.
          </p>
        </div>

        <div className="fade-up fade-up-1">
          <div className="flex flex-wrap gap-3 mt-10">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium bg-[var(--heading)] text-[var(--bg)] hover:opacity-90 transition-opacity"
            >
              See the work
            </a>
            <a
              href="/resume/David-Zeff-Data-Analyst-EN.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm border border-[var(--border)] bg-[var(--button-bg)] hover:border-[var(--accent)] transition-colors"
            >
              <FileText className="w-4 h-4 text-[var(--icon)]" />
              Resume
            </a>
            <a
              href="mailto:dpzeff@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm border border-[var(--border)] bg-[var(--button-bg)] hover:border-[var(--accent)] transition-colors"
            >
              <Mail className="w-4 h-4 text-[var(--icon)]" />
              dpzeff@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/david-zeff-computerscience141592/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm border border-[var(--border)] bg-[var(--button-bg)] hover:border-[var(--accent)] transition-colors"
            >
              <Linkedin className="w-4 h-4 text-[var(--linkedin)]" />
              LinkedIn
            </a>
            <a
              href="https://github.com/DavidZeff1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm border border-[var(--border)] bg-[var(--button-bg)] hover:border-[var(--accent)] transition-colors"
            >
              <Github className="w-4 h-4 text-[var(--icon)]" />
              GitHub
            </a>
          </div>
        </div>

        <div className="fade-up fade-up-2">
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-px mt-16 bg-[var(--border)] border border-[var(--border)] rounded-xl overflow-hidden">
            {STATS.map((s) => (
              <div key={s.label} className="bg-[var(--card)] px-6 py-7">
                <dt className="font-display text-3xl md:text-4xl text-[var(--heading)] tabular-nums">
                  {s.value}
                </dt>
                <dd className="text-xs uppercase tracking-wider text-[var(--muted)] mt-2">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* -------------------------------------------------------- selected work */}
      <section id="work" className="scroll-mt-8 pb-24">
        <SectionHeading n="01">Selected work</SectionHeading>

        <div className="space-y-28 md:space-y-40">
          {caseStudies.map((cs, i) => (
            <article key={cs.slug}>
              <div>
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="font-display text-sm tabular-nums text-[var(--accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-xs uppercase tracking-wider text-[var(--muted)]">
                    {cs.scale}
                  </p>
                </div>

                <h3 className="font-display text-3xl md:text-4xl text-[var(--heading)]">
                  {cs.title}
                </h3>
                <p className="text-sm text-[var(--muted)] mb-6">{cs.subtitle}</p>

                <p className="font-display text-xl md:text-2xl leading-snug max-w-3xl text-[var(--fg)] pl-5 border-l-2 border-[var(--accent)] mb-6">
                  {cs.finding}
                </p>

                <p className="max-w-2xl text-sm md:text-base leading-relaxed text-[var(--muted)] mb-10">
                  {cs.body}
                </p>
              </div>

              <div className="space-y-8">
                {/* No captions: these charts carry their own titles and
                    explanatory subtitles, and a paraphrase underneath just
                    reads as duplication. `alt` does the accessibility work. */}
                {cs.charts.map((c, ci) => (
                  <div key={c.src}>
                    <div className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--card)]">
                      <img src={c.src} alt={c.alt} className="w-full block" loading="lazy" />
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mt-8">
                  {cs.methods.map((m) => (
                    <span
                      key={m}
                      className="px-3 py-1 text-xs rounded-full bg-[var(--pill-bg)] border border-[var(--border)] text-[var(--muted)]"
                    >
                      {m}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-5 mt-6">
                  <a
                    href={cs.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--heading)] hover:text-[var(--accent)] transition-colors"
                  >
                    Explore the dashboard
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <a
                    href={cs.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--heading)] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Notebook &amp; source
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------------- how I work */}
      <section className="pb-24">
        <SectionHeading n="02">How I work</SectionHeading>
        <p className="max-w-2xl text-sm md:text-base text-[var(--muted)] mb-10 leading-relaxed">
          Four habits that show up in every analysis above — each one is here
          because it changed a result, not because it sounds good.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border)] border border-[var(--border)] rounded-xl overflow-hidden">
          {principles.map((p, i) => (
            <div key={p.title}>
              <div className="bg-[var(--card)] p-7 h-full">
                <h3 className="font-display text-lg md:text-xl text-[var(--heading)] mb-3">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">{p.evidence}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------- toolkit / background */}
      <section className="pb-24">
        <SectionHeading n="03">Toolkit &amp; background</SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div>
            <div className="space-y-3">
              {skillGroups.map(([label, items]) => (
                <div key={label} className="flex flex-col sm:flex-row sm:gap-5">
                  <span className="w-44 shrink-0 text-xs uppercase tracking-wider text-[var(--muted)] pt-1">
                    {label}
                  </span>
                  <span className="text-sm md:text-base text-[var(--fg)]">{items}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="space-y-8">
              {experience.map((e) => (
                <div key={e.role + e.org}>
                  <div className="flex items-baseline gap-4">
                    <h3 className="font-display text-lg text-[var(--heading)] min-w-0 flex-1">
                      {e.role}
                      <span className="text-[var(--muted)] font-normal">, {e.org}</span>
                    </h3>
                    <span className="text-xs tabular-nums text-[var(--muted)] shrink-0 whitespace-nowrap">
                      {e.dates}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--muted)] leading-relaxed mt-1.5">{e.note}</p>
                </div>
              ))}

              <div className="pt-6 border-t border-[var(--border)] space-y-2">
                {education.map((ed) => (
                  <div key={ed.main} className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <span className="text-sm text-[var(--fg)]">
                      {ed.main}
                      <span className="text-[var(--muted)]"> · {ed.org}</span>
                    </span>
                    <span className="text-xs tabular-nums text-[var(--muted)]">{ed.dates}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- engineering */}
      <section className="pb-24">
        <SectionHeading n="04">Engineering</SectionHeading>
        <p className="max-w-2xl text-sm md:text-base text-[var(--muted)] mb-10 leading-relaxed">
          Software from my Computer Science degree and side projects. It&apos;s
          not the headline, but it&apos;s why the dashboards above are built and
          deployed rather than sitting in a notebook.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {softwareProjects.map((p, i) => (
            <div key={p.title}>
              <div className="h-full rounded-xl border border-[var(--border)] bg-[var(--card)] overflow-hidden flex flex-col">
                <div className="relative w-full aspect-video bg-black">
                  <video
                    src={p.video}
                    className="absolute inset-0 w-full h-full object-contain"
                    controls
                    preload="metadata"
                    playsInline
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-xl text-[var(--heading)] mb-2">{p.title}</h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[11px] rounded-full bg-[var(--pill-bg)] border border-[var(--border)] text-[var(--muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-5 mt-auto">
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-[var(--heading)] hover:text-[var(--accent)] transition-colors"
                    >
                      Live
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--heading)] transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --------------------------------------------------------------- close */}
      <section className="pb-20">
        <div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-10 md:p-14 text-center">
            <h2 className="font-display text-3xl md:text-4xl text-[var(--heading)] mb-4">
              Looking for an analyst who asks the second question
            </h2>
            <p className="max-w-xl mx-auto text-sm md:text-base text-[var(--muted)] leading-relaxed mb-8">
              I&apos;m open to data and BI analyst roles. The fastest way to
              judge the work is to open one of the dashboards and try to break
              the conclusion.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="mailto:dpzeff@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium bg-[var(--heading)] text-[var(--bg)] hover:opacity-90 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                dpzeff@gmail.com
              </a>
              <a
                href="/resume/David-Zeff-Data-Analyst-EN.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
              >
                <FileText className="w-4 h-4 text-[var(--icon)]" />
                Resume (EN)
              </a>
              <a
                href="/resume/David-Zeff-Data-Analyst-HE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
              >
                <FileText className="w-4 h-4 text-[var(--icon)]" />
                קורות חיים
              </a>
            </div>

            <Link
              href="/terminal"
              className="inline-flex items-center gap-2 mt-10 text-xs text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
            >
              <TerminalIcon className="w-3.5 h-3.5" />
              or poke around in the terminal version
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
