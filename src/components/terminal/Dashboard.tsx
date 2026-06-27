"use client";

import { useEffect, useRef, useState } from "react";

type Props = { color: string; dim: string; accent: string };

const STAGES = ["EXTRACT", "CLEAN", "ANALYZE", "VISUALIZE"];

/** Animated SVG line chart with a self-updating random-walk series. */
function LineChart({ color, dim }: { color: string; dim: string }) {
  const [pts, setPts] = useState<number[]>(() =>
    Array.from({ length: 40 }, (_, i) => 50 + Math.sin(i / 3) * 18)
  );

  useEffect(() => {
    const id = setInterval(() => {
      setPts((prev) => {
        const last = prev[prev.length - 1] ?? 50;
        const next = Math.max(8, Math.min(92, last + (Math.random() - 0.48) * 16));
        return [...prev.slice(1), next];
      });
    }, 700);
    return () => clearInterval(id);
  }, []);

  const W = 300;
  const H = 90;
  const step = W / (pts.length - 1);
  const path = pts.map((p, i) => `${i * step},${H - (p / 100) * H}`).join(" ");
  const area = `0,${H} ${path} ${W},${H}`;
  const last = pts[pts.length - 1];
  const delta = last - pts[pts.length - 2];

  return (
    <div>
      <div className="flex items-center justify-between text-[11px] mb-1" style={{ color: dim }}>
        <span>REVENUE INDEX</span>
        <span style={{ color }}>
          {last.toFixed(1)} {delta >= 0 ? "▲" : "▼"} {Math.abs(delta).toFixed(1)}
        </span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-20" preserveAspectRatio="none">
        <defs>
          <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.35" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points={area} fill="url(#fill)" />
        <polyline
          points={path}
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
          style={{ filter: `drop-shadow(0 0 3px ${color})` }}
        />
      </svg>
    </div>
  );
}

/** Circular gauge that drifts slightly over time. */
function Gauge({ label, base, color, dim }: { label: string; base: number; color: string; dim: string }) {
  const [v, setV] = useState(base);
  useEffect(() => {
    const id = setInterval(() => {
      setV((p) => Math.max(0, Math.min(100, p + (Math.random() - 0.5) * 6)));
    }, 1100);
    return () => clearInterval(id);
  }, []);
  const r = 18;
  const c = 2 * Math.PI * r;
  return (
    <div className="flex flex-col items-center gap-1">
      <svg viewBox="0 0 48 48" className="w-14 h-14 -rotate-90">
        <circle cx="24" cy="24" r={r} fill="none" stroke={dim} strokeOpacity="0.3" strokeWidth="4" />
        <circle
          cx="24"
          cy="24"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - (v / 100) * c}
          style={{ transition: "stroke-dashoffset 1s ease", filter: `drop-shadow(0 0 2px ${color})` }}
        />
      </svg>
      <span className="text-[11px] tabular-nums" style={{ color }}>
        {Math.round(v)}%
      </span>
      <span className="text-[10px]" style={{ color: dim }}>
        {label}
      </span>
    </div>
  );
}

export default function Dashboard({ color, dim, accent }: Props) {
  const [stage, setStage] = useState(0);
  const tick = useRef(0);

  useEffect(() => {
    const id = setInterval(() => {
      tick.current += 1;
      setStage(tick.current % STAGES.length);
    }, 900);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="border-t px-4 py-4 grid gap-4 md:grid-cols-3" style={{ borderColor: dim }}>
      {/* line chart */}
      <div className="md:col-span-2">
        <LineChart color={color} dim={dim} />
        {/* pipeline */}
        <div className="mt-3 flex flex-wrap items-center gap-1 text-[11px]">
          <span style={{ color: dim }}>pipeline:</span>
          {STAGES.map((s, i) => (
            <span key={s} className="flex items-center gap-1">
              <span
                className="px-1.5 py-0.5 rounded-sm transition-all"
                style={{
                  color: i === stage ? accent : dim,
                  background: i === stage ? `${color}22` : "transparent",
                  textShadow: i === stage ? `0 0 4px ${color}` : "none",
                }}
              >
                {s}
              </span>
              {i < STAGES.length - 1 && <span style={{ color: dim }}>→</span>}
            </span>
          ))}
        </div>
      </div>
      {/* gauges */}
      <div className="flex items-start justify-around gap-2">
        <Gauge label="MODELS" base={78} color={color} dim={dim} />
        <Gauge label="ACCURACY" base={92} color={color} dim={dim} />
        <Gauge label="LOAD" base={31} color={color} dim={dim} />
      </div>
    </div>
  );
}
