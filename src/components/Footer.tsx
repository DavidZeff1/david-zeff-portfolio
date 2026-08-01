import Link from "next/link";

/** Everything the top nav no longer carries lives here. */
const ELSEWHERE = [
  { href: "/terminal", label: "Terminal", internal: true },
  { href: "/leetcode", label: "LeetCode roadmap", internal: true },
  { href: "/stepblocker", label: "StepBlocker", internal: true },
  { href: "https://job-app-generator-two.vercel.app/", label: "Resume generator" },
  { href: "https://job-tracker-eta-liard.vercel.app/", label: "Job tracker" },
  { href: "https://data-analysis-teaching.vercel.app/", label: "Data science teaching" },
  { href: "https://istqb-jade.vercel.app/", label: "ISTQB prep" },
  { href: "https://p-exam.vercel.app/", label: "Probability" },
  { href: "https://german-tutor-one.vercel.app/", label: "German tutor" },
];

export default function Footer() {
  return (
    <footer className="mt-32 pt-10 border-t border-[var(--border)]">
      <p className="text-xs uppercase tracking-[0.18em] text-[var(--faint)] mb-4">
        Elsewhere
      </p>
      <ul className="flex flex-wrap gap-x-6 gap-y-2 mb-12">
        {ELSEWHERE.map((l) => (
          <li key={l.href}>
            {l.internal ? (
              <Link
                href={l.href}
                className="text-sm text-[var(--muted)] hover:text-[var(--heading)] transition-colors"
              >
                {l.label}
              </Link>
            ) : (
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--muted)] hover:text-[var(--heading)] transition-colors"
              >
                {l.label}
              </a>
            )}
          </li>
        ))}
      </ul>

      <p className="text-sm text-[var(--faint)] pb-12">
        © {new Date().getFullYear()} David Zeff · Alon Shvut, Israel
      </p>
    </footer>
  );
}
