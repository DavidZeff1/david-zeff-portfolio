"use client";

import "./globals.css";
import {
  useEffect,
  useRef,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { projects } from "@/lib/projects";
import Footer from "@/components/Footer";
import Dashboard from "@/components/terminal/Dashboard";
import Snake from "@/components/terminal/Snake";
import MatrixRain from "@/components/terminal/MatrixRain";

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
const BUILD = "2026-06-27";
const GITHUB_USER = "DavidZeff1";

/* known commands for tab-completion / ghost text */
const COMMANDS = [
  "help", "about", "whoami", "projects", "ls", "analyst", "data", "skills",
  "contact", "social", "resume", "github", "secrets", "snake", "matrix",
  "theme", "date", "clear", "coffee", "sudo",
];

/* discoverable easter eggs */
const SECRETS = ["coffee", "sudo", "matrix", "snake", "theme", "konami"] as const;

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

/** Types a string out character-by-character. */
function TypeLine({
  text,
  color,
  speed = 14,
  onTick,
}: {
  text: string;
  color: string;
  speed?: number;
  onTick?: () => void;
}) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (n >= text.length) return;
    const id = setTimeout(() => {
      setN((x) => x + 1);
      onTick?.();
    }, speed);
    return () => clearTimeout(id);
  }, [n, text, speed, onTick]);
  return (
    <span style={{ color }}>
      {text.slice(0, n)}
      {n < text.length && <span className="cursor-blink">▋</span>}
    </span>
  );
}

/** Live "market feed" sparkline + clock for the title bar. */
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
  return (
    <div className="hidden sm:flex items-center gap-3 text-xs tabular-nums" style={{ color: dim }} aria-hidden>
      <span>MKT</span>
      <span className="crt-glow tracking-tighter">{sparkline(series)}</span>
      <span>{delta >= 0 ? "▲" : "▼"} {Math.abs(delta).toFixed(1)}%</span>
      <span>{clock}</span>
    </div>
  );
}

/** Animated horizontal bar chart. */
function BarChart({
  rows, color, dim,
}: {
  rows: { label: string; value: number; note?: string }[];
  color: string;
  dim: string;
}) {
  return (
    <div className="my-1 space-y-1">
      {rows.map((r) => (
        <div key={r.label} className="flex items-center gap-2 text-xs sm:text-sm">
          <span className="w-28 shrink-0 text-right" style={{ color: dim }}>{r.label}</span>
          <span className="flex-1 h-3 rounded-sm" style={{ background: "rgba(255,255,255,0.06)" }}>
            <span className="block h-3 rounded-sm bar-grow crt-glow" style={{ width: `${r.value}%`, background: color }} />
          </span>
          <span className="w-14 shrink-0 tabular-nums" style={{ color }}>{r.note ?? `${r.value}%`}</span>
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
  const [soundOn, setSoundOn] = useState(false);
  const [found, setFound] = useState<Set<string>>(new Set());
  const [showSnake, setShowSnake] = useState(false);
  const [showMatrix, setShowMatrix] = useState(false);
  const [visits, setVisits] = useState<number | null>(null);

  const idRef = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<AudioContext | null>(null);
  const t = THEMES[theme];

  const scrollToBottom = useCallback(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, []);

  const push = useCallback((node: ReactNode) => {
    setLines((prev) => [...prev, { id: idRef.current++, node }]);
  }, []);

  const pushText = useCallback(
    (text: string, color: string) => {
      setLines((prev) => [
        ...prev,
        { id: idRef.current++, node: <TypeLine text={text} color={color} onTick={scrollToBottom} /> },
      ]);
    },
    [scrollToBottom]
  );

  const addSecret = useCallback((name: string) => {
    setFound((prev) => {
      if (prev.has(name)) return prev;
      const next = new Set(prev);
      next.add(name);
      try {
        localStorage.setItem("dz_secrets", JSON.stringify([...next]));
      } catch {}
      return next;
    });
  }, []);

  const Prompt = ({ cmd }: { cmd: string }) => (
    <div className="flex gap-2 line-in">
      <span style={{ color: t.dim }}>david@portfolio:~$</span>
      <span style={{ color: t.accent }}>{cmd}</span>
    </div>
  );

  const Link = ({ href, children }: { href: string; children: ReactNode }) => (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className="underline underline-offset-2 hover:opacity-80 crt-glow" style={{ color: t.accent }}>
      {children}
    </a>
  );

  /* --------------------------- live github data --------------------------- */
  const fetchGithub = useCallback(async () => {
    push(<span className="line-in" style={{ color: t.dim }}>fetching github.com/{GITHUB_USER} ...</span>);
    try {
      const res = await fetch(`https://api.github.com/users/${GITHUB_USER}`);
      if (!res.ok) throw new Error();
      const d = await res.json();
      push(
        <div className="line-in space-y-0.5">
          <div><span style={{ color: t.dim }}>repos     </span><span style={{ color: t.accent }}>{d.public_repos}</span></div>
          <div><span style={{ color: t.dim }}>followers </span><span style={{ color: t.accent }}>{d.followers}</span></div>
          <div><span style={{ color: t.dim }}>following </span><span style={{ color: t.accent }}>{d.following}</span></div>
          <div><span style={{ color: t.dim }}>visitors  </span><span style={{ color: t.accent }}>{(visits ?? 1).toString().padStart(6, "0").split("").join("·")}</span></div>
          <div><span style={{ color: t.dim }}>build     </span><span style={{ color: t.color }}>{BUILD} · v2.6.27</span></div>
        </div>
      );
    } catch {
      push(<span className="line-in" style={{ color: t.dim }}>could not reach github api (rate-limited or offline).</span>);
    }
  }, [push, t, visits]);

  /* ------------------------------ commands -------------------------------- */
  const runCommand = useCallback(
    (raw: string) => {
      const cmd = raw.trim().toLowerCase();
      const [base, ...args] = cmd.split(/\s+/);

      switch (base) {
        case "help":
          push(
            <div className="space-y-0.5 line-in">
              <div style={{ color: t.dim }}>available commands:</div>
              {[
                ["about", "who I am"],
                ["projects", "things I've built"],
                ["analyst", "data analysis work + charts"],
                ["skills", "skill levels (animated)"],
                ["github", "live github + visitor stats"],
                ["contact", "how to reach me"],
                ["resume", "download my resume"],
                ["snake", "play a game 🐍"],
                ["matrix", "enter the matrix"],
                ["secrets", "easter-egg progress"],
                ["theme", "amber | green | blue"],
                ["clear", "wipe the screen"],
              ].map(([c, d]) => (
                <div key={c}>
                  <span style={{ color: t.accent }}>{c.padEnd(10)}</span>
                  <span style={{ color: t.dim }}>{d}</span>
                </div>
              ))}
              <div style={{ color: t.dim }} className="pt-1">tip: press Tab to autocomplete · ↑/↓ for history</div>
            </div>
          );
          break;

        case "about":
        case "whoami":
          push(
            <div className="space-y-2 max-w-2xl line-in">
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
            <div className="space-y-1 line-in">
              <div style={{ color: t.dim }}>{projects.length} projects on disk:</div>
              {projects.map((p, i) => (
                <div key={p.title} className="flex flex-wrap gap-2">
                  <span style={{ color: t.dim }}>{String(i + 1).padStart(2, "0")}</span>
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
            <div className="space-y-3 max-w-2xl line-in">
              <div style={{ color: t.dim }}>// analyst workspace</div>
              <div className="text-xs sm:text-sm space-y-1">
                <div className="flex gap-3">
                  <span className="w-20" style={{ color: t.dim }}>REVENUE</span>
                  <span className="crt-glow" style={{ color: t.color }}>{sparkline(revenue)}</span>
                  <span style={{ color: t.accent }}>▲ 12.4%</span>
                </div>
                <div className="flex gap-3">
                  <span className="w-20" style={{ color: t.dim }}>CHURN</span>
                  <span className="crt-glow" style={{ color: t.color }}>{sparkline(churn)}</span>
                  <span style={{ color: t.accent }}>▼ 3.1%</span>
                </div>
              </div>
              <BarChart color={t.color} dim={t.dim} rows={[
                { label: "data accuracy", value: 99, note: "99.2%" },
                { label: "reports automated", value: 84 },
                { label: "budget tracked", value: 100, note: "100%" },
              ]} />
              <div className="flex flex-wrap gap-2">
                <span style={{ color: t.accent }}>Bank Churn Analysis</span>
                <Link href="https://bank-churn-ashy.vercel.app/#overview">[launch]</Link>
              </div>
            </div>
          );
          break;
        }

        case "skills":
          push(
            <div className="line-in">
              <BarChart color={t.color} dim={t.dim} rows={[
                { label: "data analysis", value: 95 },
                { label: "python / pandas", value: 90 },
                { label: "sql", value: 88 },
                { label: "excel / sheets", value: 96 },
                { label: "typescript / react", value: 85 },
                { label: "problem solving", value: 98 },
              ]} />
            </div>
          );
          break;

        case "github":
          fetchGithub();
          break;

        case "contact":
        case "social":
          push(
            <div className="space-y-1 line-in">
              <div><span style={{ color: t.dim }}>email   </span><Link href="mailto:dpzeff@gmail.com">dpzeff@gmail.com</Link></div>
              <div><span style={{ color: t.dim }}>linkedin</span>{" "}<Link href="https://www.linkedin.com/in/david-zeff-computerscience141592/">/in/david-zeff</Link></div>
              <div><span style={{ color: t.dim }}>github  </span>{" "}<Link href="https://github.com/DavidZeff1">@DavidZeff1</Link></div>
            </div>
          );
          break;

        case "resume":
          push(
            <div className="line-in">
              <span style={{ color: t.color }}>downloading resume... </span>
              <Link href="/David_Zeff_Resume2.docx">[David_Zeff_Resume2.docx]</Link>
            </div>
          );
          break;

        case "secrets": {
          push(
            <div className="space-y-0.5 line-in">
              <div style={{ color: t.accent }}>secrets found: {found.size}/{SECRETS.length}</div>
              {SECRETS.map((s) => (
                <div key={s}>
                  <span style={{ color: found.has(s) ? t.color : t.dim }}>
                    {found.has(s) ? "✔" : "✗"} {found.has(s) ? s : "??????"}
                  </span>
                </div>
              ))}
              <div style={{ color: t.dim }} className="pt-1">hints: caffeine · root access · falling code · a classic game · change the glow · a famous cheat code</div>
            </div>
          );
          break;
        }

        case "snake":
          addSecret("snake");
          setShowSnake(true);
          push(<span className="line-in" style={{ color: t.dim }}>launching snake... (click the board, then use arrows)</span>);
          break;

        case "matrix":
          addSecret("matrix");
          setShowMatrix(true);
          break;

        case "theme": {
          const next = args[0] as ThemeName;
          if (next && next in THEMES) {
            setTheme(next);
            addSecret("theme");
            pushText(`phosphor set to ${next}.`, t.color);
          } else {
            pushText("usage: theme amber | green | blue", t.dim);
          }
          break;
        }

        case "date":
          pushText(new Date().toString(), t.color);
          break;

        case "clear":
          setLines([]);
          return;

        case "sudo":
          addSecret("sudo");
          pushText("nice try. permission denied (you are a guest, not root 🙂).", t.accent);
          break;

        case "coffee":
          addSecret("coffee");
          pushText("☕ brewing... analysis fuel restored to 100%.", t.color);
          break;

        case "":
          break;

        default:
          pushText(`command not found: ${base}. type 'help'.`, t.dim);
      }
    },
    [push, pushText, t, found, addSecret, fetchGithub]
  );

  /* ------------------------------ boot seq -------------------------------- */
  useEffect(() => {
    const a = THEMES.amber;
    const seq = [
      "david_os v2.6.27 — analytics terminal",
      "[ OK ] mounting /datasets",
      "[ OK ] loading financial models",
      "[ OK ] initializing analytics engine",
      "[ OK ] connection established · authenticated as david_zeff",
    ];
    const timers: ReturnType<typeof setTimeout>[] = [];
    let acc = 600; // let the power-on flash play first
    seq.forEach((s) => {
      acc += 260;
      timers.push(setTimeout(() => {
        setLines((prev) => [...prev, { id: idRef.current++, node: <TypeLine text={s} color={a.dim} speed={8} onTick={scrollToBottom} /> }]);
      }, acc));
    });
    acc += 500;
    timers.push(setTimeout(() => {
      setLines((prev) => [...prev, {
        id: idRef.current++,
        node: (
          <span style={{ color: a.color }}>
            Welcome. Type <span style={{ color: a.accent }}>help</span> to start, or try{" "}
            <span style={{ color: a.accent }}>about</span>, <span style={{ color: a.accent }}>analyst</span>,{" "}
            <span style={{ color: a.accent }}>github</span>.
          </span>
        ),
      }]);
      setBooted(true);
    }, acc));
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ------------------- visitor counter + saved secrets -------------------- */
  useEffect(() => {
    try {
      const v = parseInt(localStorage.getItem("dz_visits") || "0", 10) + 1;
      localStorage.setItem("dz_visits", String(v));
      setVisits(v);
      const saved = localStorage.getItem("dz_secrets");
      if (saved) setFound(new Set(JSON.parse(saved)));
    } catch {}
  }, []);

  /* ----------------------------- konami code ------------------------------ */
  useEffect(() => {
    const seq = ["arrowup", "arrowup", "arrowdown", "arrowdown", "arrowleft", "arrowright", "arrowleft", "arrowright", "b", "a"];
    let pos = 0;
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === seq[pos]) {
        pos++;
        if (pos === seq.length) {
          pos = 0;
          addSecret("konami");
          setShowMatrix(true);
        }
      } else {
        pos = e.key.toLowerCase() === seq[0] ? 1 : 0;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [addSecret]);

  /* auto-scroll */
  useEffect(() => { scrollToBottom(); }, [lines, scrollToBottom]);

  /* ----------------------------- input handlers --------------------------- */
  const click = () => {
    if (!soundOn) return;
    try {
      const ctx = audioRef.current ?? (audioRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)());
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.frequency.value = 320 + Math.random() * 80;
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.05);
      osc.connect(gain).connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch {}
  };

  const ghost = (() => {
    const v = input.toLowerCase();
    if (!v || v.includes(" ")) return "";
    const m = COMMANDS.find((c) => c.startsWith(v) && c !== v);
    return m ? m.slice(input.length) : "";
  })();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = input;
    push(<Prompt cmd={value} />);
    if (value.trim()) setCmdHistory((h) => [...h, value]);
    setHistIdx(null);
    runCommand(value);
    setInput("");
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    click();
    if (e.key === "Tab") {
      e.preventDefault();
      if (ghost) setInput(input + ghost);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const idx = histIdx === null ? cmdHistory.length - 1 : Math.max(0, histIdx - 1);
      setHistIdx(idx);
      setInput(cmdHistory[idx]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIdx === null) return;
      const idx = histIdx + 1;
      if (idx >= cmdHistory.length) { setHistIdx(null); setInput(""); }
      else { setHistIdx(idx); setInput(cmdHistory[idx]); }
    }
  };

  /* -------------------------------- render -------------------------------- */
  return (
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 py-6">
      {showMatrix && <MatrixRain color={t.color} onExit={() => setShowMatrix(false)} />}

      <div
        className="crt crt-flicker power-on rounded-lg border shadow-2xl"
        style={{
          background: t.bg,
          borderColor: t.dim,
          boxShadow: `0 0 40px -8px ${t.color}55, inset 0 0 80px -40px ${t.color}`,
          fontFamily: "var(--font-mono), ui-monospace, monospace",
        }}
        onClick={() => inputRef.current?.focus()}
      >
        {/* title bar */}
        <div className="flex items-center justify-between px-3 py-2 border-b" style={{ borderColor: t.dim }}>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f56" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "#ffbd2e" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "#27c93f" }} />
            <span className="ml-2 text-xs" style={{ color: t.dim }}>david@portfolio — analytics terminal</span>
          </div>
          <LiveFeed dim={t.dim} />
        </div>

        {/* banner */}
        <div className="px-4 pt-4">
          <h1 className="crt-glow leading-none tracking-[0.15em] text-5xl sm:text-7xl"
            style={{ color: t.color, fontFamily: "var(--font-pixel), monospace" }}>
            DAVID ZEFF
          </h1>
          <div className="text-base sm:text-xl mt-1 mb-3 tracking-wide"
            style={{ color: t.accent, fontFamily: "var(--font-pixel), monospace" }}>
            &gt; FINANCIAL ANALYST &amp; ADMINISTRATOR · DATA-DRIVEN BUILDER
          </div>
        </div>

        {/* output stream */}
        <div ref={scrollRef} className="px-4 pb-3 text-sm sm:text-base leading-relaxed overflow-y-auto"
          style={{ color: t.color, maxHeight: "52vh", minHeight: "220px" }}>
          {lines.map((l) => (
            <div key={l.id} className="whitespace-pre-wrap break-words">{l.node}</div>
          ))}

          {showSnake && (
            <Snake color={t.color} dim={t.dim} accent={t.accent} onExit={() => { setShowSnake(false); inputRef.current?.focus(); }} />
          )}

          {booted && !showSnake && (
            <form onSubmit={submit} className="flex items-center gap-2 mt-1">
              <span style={{ color: t.dim }}>david@portfolio:~$</span>
              <div className="relative flex-1">
                <span className="absolute inset-0 pointer-events-none whitespace-pre" style={{ color: t.dim }}>
                  <span style={{ color: "transparent" }}>{input}</span>{ghost}
                </span>
                <input
                  ref={inputRef}
                  value={input}
                  autoFocus
                  spellCheck={false}
                  autoComplete="off"
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  className="relative w-full bg-transparent outline-none crt-glow"
                  style={{ color: t.accent, caretColor: t.color }}
                  aria-label="terminal input"
                />
              </div>
            </form>
          )}
          {!booted && (
            <span className="cursor-blink inline-block w-2.5 h-4 align-middle" style={{ background: t.color }} />
          )}
        </div>

        {/* live dashboard */}
        <Dashboard color={t.color} dim={t.dim} accent={t.accent} />

        {/* footer hint bar */}
        <div className="px-4 py-2 border-t text-[11px] flex flex-wrap items-center gap-x-4 gap-y-1"
          style={{ borderColor: t.dim, color: t.dim }}>
          <span>Tab: autocomplete</span>
          <span>↑/↓ history</span>
          <span>secrets {found.size}/{SECRETS.length}</span>
          <button type="button" onClick={(e) => { e.stopPropagation(); setSoundOn((s) => !s); }}
            className="hover:opacity-80" style={{ color: soundOn ? t.accent : t.dim }}>
            ♪ sound: {soundOn ? "on" : "off"}
          </button>
          <button type="button"
            onClick={(e) => { e.stopPropagation(); const order: ThemeName[] = ["amber", "green", "blue"]; setTheme(order[(order.indexOf(theme) + 1) % order.length]); addSecret("theme"); }}
            className="ml-auto hover:opacity-80" style={{ color: t.accent }}>
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
