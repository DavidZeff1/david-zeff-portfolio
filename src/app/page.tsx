import {
  caseStudies,
  principles,
  skillGroups,
  experience,
  education,
  softwareProjects,
} from "@/lib/projects";
import Footer from "@/components/Footer";

function Rule() {
  return <hr className="border-0 border-t border-[var(--border)] my-20 md:my-28" />;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-[0.18em] text-[var(--faint)] mb-8">
      {children}
    </p>
  );
}

export default function HomePage() {
  return (
    <div className="max-w-3xl mx-auto">
      {/* ------------------------------------------------------------- intro */}
      <section>
        <h1 className="font-display text-4xl md:text-5xl text-[var(--heading)] mb-3">
          Data analyst.
        </h1>
        <p className="font-display text-2xl md:text-3xl leading-snug text-[var(--fg)] max-w-2xl mb-10">
          I find the number behind the number.
        </p>

        <p className="max-w-xl text-base leading-relaxed text-[var(--muted)] mb-3">
          Currently a Financial Analyst at Gush Etzion Regional Council, working
          on budgets in the tens of millions of shekels. Python, SQL, Tableau.
        </p>
        <p className="max-w-xl text-base leading-relaxed text-[var(--muted)]">
          A headline figure is usually hiding something — growth that&apos;s
          really one lever, a margin decline that&apos;s entirely mix, a campaign
          result that shrinks once you adjust for trend. Four analyses below, all
          live.
        </p>

        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10">
          <a
            href="mailto:dpzeff@gmail.com"
            className="text-sm text-[var(--accent)] hover:text-[var(--heading)] underline underline-offset-4 decoration-[var(--border)] hover:decoration-[var(--heading)] transition-colors"
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
            CV (PDF)
          </a>
        </div>
      </section>

      <Rule />

      {/* -------------------------------------------------------------- work */}
      <section id="work" className="scroll-mt-10">
        <Eyebrow>Selected work</Eyebrow>

        <div className="space-y-24 md:space-y-32">
          {caseStudies.map((cs, i) => (
            <article key={cs.slug}>
              <div className="flex items-baseline gap-4 mb-2">
                <span className="nums text-sm text-[var(--faint)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-2xl md:text-3xl text-[var(--heading)]">
                  {cs.title}
                </h2>
              </div>

              <p className="font-display text-lg md:text-xl leading-snug text-[var(--fg)] max-w-2xl mb-5 pl-10">
                {cs.finding}
              </p>

              <div className="pl-10">
                <p className="nums text-xs uppercase tracking-wider text-[var(--faint)] mb-8">
                  {cs.scale}
                </p>

                <div className="space-y-5 mb-8">
                  {cs.charts.map((c) => (
                    <div
                      key={c.src}
                      className="rounded-lg overflow-hidden border border-[var(--border)]"
                    >
                      <img
                        src={c.src}
                        alt={c.alt}
                        className="w-full block"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>

                <p className="max-w-xl text-sm leading-relaxed text-[var(--muted)] mb-6">
                  {cs.body}
                </p>

                <p className="text-xs text-[var(--faint)] mb-4">
                  {cs.methods.join(" · ")}
                </p>

                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  <a
                    href={cs.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--accent)] hover:text-[var(--heading)] underline underline-offset-4 decoration-[var(--border)] hover:decoration-[var(--heading)] transition-colors"
                  >
                    Open the dashboard ↗
                  </a>
                  <a
                    href={cs.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--muted)] hover:text-[var(--heading)] transition-colors"
                  >
                    Source ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Rule />

      {/* ------------------------------------------------------------- about */}
      <section id="about" className="scroll-mt-10">
        <Eyebrow>How I work</Eyebrow>

        <div className="max-w-2xl space-y-8">
          {principles.map((p) => (
            <div key={p.title}>
              <h3 className="font-display text-lg text-[var(--heading)] mb-1.5">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--muted)]">{p.evidence}</p>
            </div>
          ))}
        </div>
      </section>

      <Rule />

      <section>
        <Eyebrow>Toolkit</Eyebrow>
        <dl className="max-w-3xl space-y-3">
          {skillGroups.map(([label, items]) => (
            <div key={label} className="flex flex-col sm:flex-row sm:gap-8">
              <dt className="w-44 shrink-0 text-xs uppercase tracking-wider text-[var(--faint)] pt-1">
                {label}
              </dt>
              <dd className="text-sm text-[var(--fg)]">{items}</dd>
            </div>
          ))}
        </dl>
      </section>

      <Rule />

      <section>
        <Eyebrow>Experience</Eyebrow>
        <div className="max-w-2xl space-y-10">
          {experience.map((e) => (
            <div key={e.role + e.org}>
              <div className="flex items-baseline gap-4 mb-1.5">
                <h3 className="font-display text-lg text-[var(--heading)] min-w-0 flex-1">
                  {e.role}
                  <span className="text-[var(--muted)]">, {e.org}</span>
                </h3>
                <span className="nums text-xs text-[var(--faint)] shrink-0 whitespace-nowrap">
                  {e.dates}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-[var(--muted)]">{e.note}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mt-12 pt-8 border-t border-[var(--border)] space-y-2.5">
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

      <Rule />

      {/* ------------------------------------------------------- engineering */}
      <section>
        <Eyebrow>Engineering</Eyebrow>
        <p className="max-w-xl text-sm leading-relaxed text-[var(--muted)] mb-8">
          Software from my Computer Science degree and side projects. Not the
          headline, but it&apos;s why the dashboards above are built and deployed
          rather than sitting in a notebook.
        </p>

        <ul className="max-w-3xl divide-y divide-[var(--border)] border-t border-b border-[var(--border)]">
          {softwareProjects.map((p) => (
            <li key={p.title} className="py-5 flex flex-wrap items-baseline gap-x-5 gap-y-1">
              <span className="text-sm text-[var(--heading)] w-52 shrink-0">{p.title}</span>
              <span className="text-xs text-[var(--faint)] flex-1 min-w-40">
                {p.tech.slice(0, 4).join(" · ")}
              </span>
              <span className="flex gap-4 shrink-0">
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--accent)] hover:text-[var(--heading)] transition-colors"
                >
                  Live ↗
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--muted)] hover:text-[var(--heading)] transition-colors"
                >
                  Source ↗
                </a>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <Rule />

      {/* ----------------------------------------------------------- contact */}
      <section>
        <h2 className="font-display text-2xl md:text-3xl text-[var(--heading)] mb-4">
          Open to data and BI analyst roles.
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-[var(--muted)] mb-8">
          The fastest way to judge the work is to open one of the dashboards and
          try to break the conclusion.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a
            href="mailto:dpzeff@gmail.com"
            className="text-sm text-[var(--accent)] hover:text-[var(--heading)] underline underline-offset-4 decoration-[var(--border)] hover:decoration-[var(--heading)] transition-colors"
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
            קורות חיים — עברית
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
