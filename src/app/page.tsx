"use client";

import "./globals.css";
import { useEffect, useRef, useState, useCallback, type ReactNode } from "react";
import { projects } from "@/lib/projects";
import Footer from "@/components/Footer";

/* ----------------------------- phosphor themes ----------------------------- */
type ThemeName = "amber" | "green" | "blue";
const THEMES: Record<
  ThemeName,
  { color: string; dim: string; bg: string; accent: string }
> = {
  amber: { color: "#f5b942", dim: "#9a7733", bg: "#160f04", accent: "#ffd479" },
  green: { color: "#3bf07a", dim: "#1f7a45", bg: "#03130a", accent: "#7dffae" },
  blue: { color: "#5bc8ff", dim: "#2f7aa0", bg: "#04121f", accent: "#9ee0ff" },
};

const BLOCKS = ["▁", "▂", "▃", "▄", "▅", "▆", "▇", "█"];

/* ----------------------------- helper widgets ------------------------------ */
function sparkline(values: number[]) {
  if (values.length === 0) return "";
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  return values
    .map((v) => BLOCKS[Math.round(((v - min) / span) * (BLOCKS.length - 1))])
    .join("");
}

/** Live "market feed" sparkline + clock that ticks on its own. */
function LiveFeed({ dim }: { dim: string }) {
  const [series, setSeries] = useState<number[]>(() =>
    Array.from({ length: 28 }, (_, i) => 50 + Math.sin(i / 2) * 10)
  );
  const [clock, setClock] = useState("--:--:--");

  useEffect(() => {
    const tick = () => {
      setSeries((prev) => {
        const last = prev[prev.length - 1] ?? 50;
        const next = Math.max(5, Math.min(95, last + (Math.random() - 0.5) * 14));
        return [...prev.slice(1), next];
      });
      setClock(new Date().toLocaleTimeString("en-GB"));
    };
    tick();
    const id = setInterval(tick, 900);
    return () => clearInterval(id);
  }, []);

  const delta = series[series.length - 1] - series[series.length - 2];
  const arrow = delta >= 0 ? "▲" : "▼";

  return (
    <div
      className="hidden sm:flex items-center gap-3 text-xs tabular-nums"
      style={{ color: dim }}
      aria-hidden
    >
      <span>MKT</span>
      <span className="crt-glow tracking-tighter">{sparkline(series)}</span>
      <span>
        {arrow} {Math.abs(delta).toFixed(1)}%
      </span>
      <span>{clock}</span>
    </div>
  );
}

/** Animated horizontal bar chart (skills / metrics). */
function BarChart({
  rows,
  color,
  dim,
}: {
  rows: { label: string; value: number; note?: string }[];
  color: string;
  dim: string;
}) {
  return (
    <div className="my-1 space-y-1">
      {rows.map((r) => (
        <div key={r.label} className="flex items-center gap-2 text-xs sm:text-sm">
          <span className="w-28 shrink-0 text-right" style={{ color: dim }}>
            {r.label}
          </span>
          <span className="flex-1 h-3 rounded-sm" style={{ background: "rgba(255,255,255,0.06)" }}>
            <span
              className="block h-3 rounded-sm bar-grow crt-glow"
              style={{ width: `${r.value}%`, background: color }}
            />
          </span>
          <span className="w-14 shrink-0 tabular-nums" style={{ color }}>
            {r.note ?? `${r.value}%`}
          </span>
        </div>
      ))}
    </div>
  );
}

/* --------------------------------- page ----------------------------------- */
type Line = { id: number; node: ReactNode };

export default function HomePage() {
  const [theme, setTheme] = useState<ThemeName>("amber");
  const [lines, setLines] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [booted, setBooted] = useState(false);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState<number | null>(null);

  const idRef = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const t = THEMES[theme];

  const nextId = () => ++idRef.current;
  const push = useCallback((node: ReactNode) => {
    setLines((prev) => [...prev, { id: idRef.current++, node }]);
  }, []);

  const Prompt = ({ cmd }: { cmd: string }) => (
    <div className="flex gap-2">
      <span style={{ color: t.dim }}>david@portfolio:~$</span>
      <span style={{ color: t.accent }}>{cmd}</span>
    </div>
  );

  const Link = ({ href, children }: { href: string; children: ReactNode }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-2 hover:opacity-80 crt-glow"
      style={{ color: t.accent }}
    >
      {children}
    </a>
  );

  /* ------------------------------ commands -------------------------------- */
  const runCommand = useCallback(
    (raw: string) => {
      const cmd = raw.trim().toLowerCase();
      const [base, ...args] = cmd.split(/\s+/);

      switch (base) {
        case "help":
          push(
            <div className="space-y-0.5">
              <div style={{ color: t.dim }}>available commands:</div>
              {[
                ["about", "who I am"],
                ["projects", "things I've built"],
                ["analyst", "data analysis work + charts"],
                ["skills", "skill levels (animated)"],
                ["contact", "how to reach me"],
                ["resume", "download my resume"],
                ["theme", "amber | green | blue"],
                ["date", "current date/time"],
                ["clear", "wipe the screen"],
              ].map(([c, d]) => (
                <div key={c}>
                  <span style={{ color: t.accent }}>{c.padEnd(10)}</span>
                  <span style={{ color: t.dim }}>{d}</span>
                </div>
              ))}
              <div style={{ color: t.dim }} className="pt-1">
                tip: try &apos;sudo make me a sandwich&apos; or &apos;coffee&apos;
              </div>
            </div>
          );
          break;

        case "about":
        case "whoami":
          push(
            <div className="space-y-2 max-w-2xl">
              <div>
                <span style={{ color: t.accent }}>David Zeff</span>
                <span style={{ color: t.dim }}> — Financial Analyst &amp; Administrator</span>
              </div>
              <p style={{ color: t.color }}>
                Financial analyst and administrator with a computer science
                background. I collect and analyze large datasets to help my
                department make data-driven decisions, and I build the tools,
                software, and reports that keep a complex budget running. I love
                creating things — at this point I&apos;ve built more projects
                than I can count. Always looking for fellow geeks to geek out
                over the newest tech.
              </p>
            </div>
          );
          break;

        case "projects":
        case "ls":
          push(
            <div className="space-y-1">
              <div style={{ color: t.dim }}>
                {projects.length} projects on disk:
              </div>
              {projects.map((p, i) => (
                <div key={p.title} className="flex flex-wrap gap-2">
                  <span style={{ color: t.dim }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ color: t.accent }}>{p.title}</span>
                  <Link href={p.demo}>[open]</Link>
                  <Link href={p.github}>[code]</Link>
                </div>
              ))}
            </div>
          );
          break;

        case "analyst":
        case "data": {
          const revenue = [40, 42, 45, 43, 50, 56, 61, 67, 72, 78];
          const churn = [88, 80, 72, 60, 55, 44, 38, 30, 26, 22];
          push(
            <div className="space-y-3 max-w-2xl">
              <div style={{ color: t.dim }}>// analyst workspace</div>
              <div className="text-xs sm:text-sm space-y-1">
                <div className="flex gap-3">
                  <span className="w-20" style={{ color: t.dim }}>
                    REVENUE
                  </span>
                  <span className="crt-glow" style={{ color: t.color }}>
                    {sparkline(revenue)}
                  </span>
                  <span style={{ color: t.accent }}>▲ 12.4%</span>
                </div>
                <div className="flex gap-3">
                  <span className="w-20" style={{ color: t.dim }}>
                    CHURN
                  </span>
                  <span className="crt-glow" style={{ color: t.color }}>
                    {sparkline(churn)}
                  </span>
                  <span style={{ color: t.accent }}>▼ 3.1%</span>
                </div>
              </div>
              <BarChart
                color={t.color}
                dim={t.dim}
                rows={[
                  { label: "data accuracy", value: 99, note: "99.2%" },
                  { label: "reports automated", value: 84 },
                  { label: "budget tracked", value: 100, note: "100%" },
                ]}
              />
              <div className="flex flex-wrap gap-2">
                <span style={{ color: t.accent }}>Bank Churn Analysis</span>
                <Link href="https://bank-churn-ashy.vercel.app/#overview">
                  [launch]
                </Link>
              </div>
            </div>
          );
          break;
        }

        case "skills":
          push(
            <BarChart
              color={t.color}
              dim={t.dim}
              rows={[
                { label: "data analysis", value: 95 },
                { label: "python / pandas", value: 90 },
                { label: "sql", value: 88 },
                { label: "excel / sheets", value: 96 },
                { label: "typescript / react", value: 85 },
                { label: "problem solving", value: 98 },
              ]}
            />
          );
          break;

        case "contact":
        case "social":
          push(
            <div className="space-y-1">
              <div>
                <span style={{ color: t.dim }}>email   </span>
                <Link href="mailto:dpzeff@gmail.com">dpzeff@gmail.com</Link>
              </div>
              <div>
                <span style={{ color: t.dim }}>linkedin</span>{" "}
                <Link href="https://www.linkedin.com/in/david-zeff-computerscience141592/">
                  /in/david-zeff
                </Link>
              </div>
              <div>
                <span style={{ color: t.dim }}>github  </span>{" "}
                <Link href="https://github.com/DavidZeff1">@DavidZeff1</Link>
              </div>
            </div>
          );
          break;

        case "resume":
          push(
            <div>
              <span style={{ color: t.color }}>downloading resume... </span>
              <Link href="/David_Zeff_Resume2.docx">[David_Zeff_Resume2.docx]</Link>
            </div>
          );
          break;

        case "theme": {
          const next = args[0] as ThemeName;
          if (next && next in THEMES) {
            setTheme(next);
            push(<span style={{ color: t.color }}>phosphor set to {next}.</span>);
          } else {
            push(
              <span style={{ color: t.dim }}>usage: theme amber | green | blue</span>
            );
          }
          break;
        }

        case "date":
          push(<span style={{ color: t.color }}>{new Date().toString()}</span>);
          break;

        case "clear":
          setLines([]);
          return;

        case "sudo":
          push(
            <span style={{ color: t.accent }}>
              nice try. permission denied (you are not root, you are a guest 🙂).
            </span>
          );
          break;

        case "coffee":
          push(<span style={{ color: t.color }}>☕ brewing... analysis fuel restored to 100%.</span>);
          break;

        case "":
          break;

        default:
          push(
            <span style={{ color: t.dim }}>
              command not found: {base}. type &apos;help&apos;.
            </span>
          );
      }
    },
    [push, t]
  );

  /* ------------------------------ boot seq -------------------------------- */
  useEffect(() => {
    const seq: { node: ReactNode; delay: number }[] = [
      { node: <span style={{ color: THEMES.amber.dim }}>david_os v2.6.27 — analytics terminal</span>, delay: 120 },
      { node: <span style={{ color: THEMES.amber.dim }}>[ OK ] mounting /datasets</span>, delay: 240 },
      { node: <span style={{ color: THEMES.amber.dim }}>[ OK ] loading financial models</span>, delay: 220 },
      { node: <span style={{ color: THEMES.amber.dim }}>[ OK ] initializing analytics engine</span>, delay: 220 },
      { node: <span style={{ color: THEMES.amber.dim }}>[ OK ] connection established · authenticated as david_zeff</span>, delay: 260 },
      { node: <span> </span>, delay: 120 },
      {
        node: (
          <span style={{ color: THEMES.amber.color }}>
            Welcome. Type{" "}
            <span style={{ color: THEMES.amber.accent }}>help</span> to get
            started, or try{" "}
            <span style={{ color: THEMES.amber.accent }}>about</span>,{" "}
            <span style={{ color: THEMES.amber.accent }}>analyst</span>,{" "}
            <span style={{ color: THEMES.amber.accent }}>projects</span>.
          </span>
        ),
        delay: 200,
      },
    ];

    let acc = 0;
    const timers: ReturnType<typeof setTimeout>[] = [];
    seq.forEach((s) => {
      acc += s.delay;
      timers.push(
        setTimeout(() => {
          setLines((prev) => [...prev, { id: idRef.current++, node: s.node }]);
        }, acc)
      );
    });
    timers.push(setTimeout(() => setBooted(true), acc + 150));
    return () => timers.forEach(clearTimeout);
    // run once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* auto-scroll to bottom on new output */
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = input;
    push(<Prompt cmd={value} />);
    if (value.trim()) {
      setCmdHistory((h) => [...h, value]);
    }
    setHistIdx(null);
    runCommand(value);
    setInput("");
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const idx = histIdx === null ? cmdHistory.length - 1 : Math.max(0, histIdx - 1);
      setHistIdx(idx);
      setInput(cmdHistory[idx]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIdx === null) return;
      const idx = histIdx + 1;
      if (idx >= cmdHistory.length) {
        setHistIdx(null);
        setInput("");
      } else {
        setHistIdx(idx);
        setInput(cmdHistory[idx]);
      }
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 py-6">
      <div
        className="crt crt-flicker rounded-lg border shadow-2xl"
        style={{
          background: t.bg,
          borderColor: t.dim,
          boxShadow: `0 0 40px -8px ${t.color}55, inset 0 0 80px -40px ${t.color}`,
          fontFamily: "var(--font-mono), ui-monospace, monospace",
        }}
        onClick={() => inputRef.current?.focus()}
      >
        {/* window title bar */}
        <div
          className="flex items-center justify-between px-3 py-2 border-b"
          style={{ borderColor: t.dim }}
        >
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f56" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "#ffbd2e" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "#27c93f" }} />
            <span className="ml-2 text-xs" style={{ color: t.dim }}>
              david@portfolio — analytics terminal
            </span>
          </div>
          <LiveFeed dim={t.dim} />
        </div>

        {/* big retro banner */}
        <div className="px-4 pt-4">
          <h1
            className="crt-glow leading-none tracking-[0.15em] text-5xl sm:text-7xl"
            style={{ color: t.color, fontFamily: "var(--font-pixel), monospace" }}
          >
            DAVID ZEFF
          </h1>
          <div
            className="text-base sm:text-xl mt-1 mb-3 tracking-wide"
            style={{ color: t.accent, fontFamily: "var(--font-pixel), monospace" }}
          >
            &gt; FINANCIAL ANALYST &amp; ADMINISTRATOR · DATA-DRIVEN BUILDER
          </div>
        </div>

        {/* output stream */}
        <div
          ref={scrollRef}
          className="px-4 pb-3 text-sm sm:text-base leading-relaxed overflow-y-auto"
          style={{ color: t.color, maxHeight: "52vh", minHeight: "220px" }}
        >
          {lines.map((l) => (
            <div key={l.id} className="whitespace-pre-wrap break-words">
              {l.node}
            </div>
          ))}

          {/* live input prompt */}
          {booted && (
            <form onSubmit={submit} className="flex items-center gap-2 mt-1">
              <span style={{ color: t.dim }}>david@portfolio:~$</span>
              <input
                ref={inputRef}
                value={input}
                autoFocus
                spellCheck={false}
                autoComplete="off"
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                className="flex-1 bg-transparent outline-none crt-glow"
                style={{ color: t.accent, caretColor: t.color }}
                aria-label="terminal input"
              />
            </form>
          )}
          {!booted && (
            <span
              className="cursor-blink inline-block w-2.5 h-4 align-middle"
              style={{ background: t.color }}
            />
          )}
        </div>

        {/* footer hint bar */}
        <div
          className="px-4 py-2 border-t text-[11px] flex flex-wrap gap-x-4 gap-y-1"
          style={{ borderColor: t.dim, color: t.dim }}
        >
          <span>↑/↓ history</span>
          <span>type &apos;help&apos; for commands</span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              const order: ThemeName[] = ["amber", "green", "blue"];
              setTheme(order[(order.indexOf(theme) + 1) % order.length]);
            }}
            className="ml-auto hover:opacity-80"
            style={{ color: t.accent }}
          >
            ◐ phosphor: {theme}
          </button>
        </div>
      </div>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
