import { caseStudies, principles, skillGroups, experience, education } from "@/lib/projects";
import WorkCarousel from "@/components/WorkCarousel";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="max-w-3xl mx-auto">
      <section>
        <h1 className="font-display text-4xl md:text-5xl text-[var(--heading)] mb-6">
          David Zeff
        </h1>
        <p className="max-w-xl text-base md:text-lg leading-relaxed text-[var(--fg)] mb-4">
          Data analyst. Currently a Financial Analyst at Gush Etzion Regional
          Council, working on budgets in the tens of millions of shekels.
        </p>
        <p className="max-w-xl text-base leading-relaxed text-[var(--muted)]">
          A headline figure is usually hiding something — growth that&apos;s
          really one lever, a margin decline that&apos;s entirely mix, a campaign
          result that shrinks once you adjust for trend.
        </p>

        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8">
          <a
            href="mailto:dpzeff@gmail.com"
            className="text-sm text-[var(--accent)] underline underline-offset-4 decoration-[var(--border)] hover:decoration-[var(--accent)] transition-colors"
          >
            dpzeff@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/david-zeff-computerscience141592/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--muted)] hover:text-[var(--heading)] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/DavidZeff1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--muted)] hover:text-[var(--heading)] transition-colors"
          >
            GitHub
          </a>
          <a
            href="/resume/David-Zeff-Data-Analyst-EN.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--muted)] hover:text-[var(--heading)] transition-colors"
          >
            CV
          </a>
        </div>
      </section>

      <section id="work" className="scroll-mt-10 mt-24 md:mt-32">
        {/* Only the fields the carousel renders — passing the whole case-study
            object would serialise the long `body` copy into the client bundle
            for nothing. */}
        <WorkCarousel
          items={caseStudies.map((c) => ({
            slug: c.slug,
            title: c.title,
            scale: c.scale,
            finding: c.finding,
            demo: c.demo,
            github: c.github,
            chart: c.charts[0],
          }))}
        />
      </section>

      <section id="about" className="scroll-mt-10 mt-24 md:mt-32">
        <div className="max-w-2xl space-y-7">
          {principles.map((p) => (
            <div key={p.title}>
              <h2 className="font-display text-lg text-[var(--heading)] mb-1.5">
                {p.title}
              </h2>
              <p className="text-sm leading-relaxed text-[var(--muted)]">{p.evidence}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 md:mt-32">
        <dl className="space-y-3">
          {skillGroups.map(([label, items]) => (
            <div key={label} className="flex flex-col sm:flex-row sm:gap-8">
              <dt className="w-40 shrink-0 text-sm text-[var(--faint)]">{label}</dt>
              <dd className="text-sm text-[var(--fg)]">{items}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-24 md:mt-32">
        <div className="max-w-2xl space-y-9">
          {experience.map((e) => (
            <div key={e.role + e.org}>
              <div className="flex items-baseline gap-4 mb-1.5">
                <h2 className="font-display text-lg text-[var(--heading)] min-w-0 flex-1">
                  {e.role}
                  <span className="text-[var(--muted)]">, {e.org}</span>
                </h2>
                <span className="nums text-xs text-[var(--faint)] shrink-0 whitespace-nowrap">
                  {e.dates}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-[var(--muted)]">{e.note}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mt-9 space-y-2.5">
          {education.map((ed) => (
            <div key={ed.main} className="flex items-baseline gap-4">
              <span className="text-sm text-[var(--fg)] min-w-0 flex-1">
                {ed.main}
                <span className="text-[var(--muted)]"> · {ed.org}</span>
              </span>
              <span className="nums text-xs text-[var(--faint)] shrink-0 whitespace-nowrap">
                {ed.dates}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 md:mt-32">
        <p className="max-w-xl text-base leading-relaxed text-[var(--fg)] mb-6">
          Open to data and BI analyst roles. The fastest way to judge the work is
          to open one of the dashboards and try to break the conclusion.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a
            href="mailto:dpzeff@gmail.com"
            className="text-sm text-[var(--accent)] underline underline-offset-4 decoration-[var(--border)] hover:decoration-[var(--accent)] transition-colors"
          >
            dpzeff@gmail.com
          </a>
          <a
            href="/resume/David-Zeff-Data-Analyst-EN.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--muted)] hover:text-[var(--heading)] transition-colors"
          >
            CV — English
          </a>
          <a
            href="/resume/David-Zeff-Data-Analyst-HE.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--muted)] hover:text-[var(--heading)] transition-colors"
          >
            עברית
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
