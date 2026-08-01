"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Item = {
  slug: string;
  title: string;
  scale: string;
  finding: string;
  demo: string;
  github: string;
  chart: { src: string; alt: string; bg?: string };
};

/**
 * A native scroll-snap track, not a JS-driven slider. The slides are real
 * scrollable content: swipe works on touch, the scrollbar works with a mouse,
 * and every slide is present and readable if the JS never runs. The arrows and
 * the counter are progressive enhancement on top of that.
 */
export default function WorkCarousel({ items }: { items: Item[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const goTo = useCallback((i: number) => {
    const el = track.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(items.length - 1, i));
    el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" });
  }, [items.length]);

  // Derive the active slide from scroll position rather than tracking it
  // separately, so dragging the scrollbar keeps the counter honest.
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!el.clientWidth) return;
        setIndex(Math.round(el.scrollLeft / el.clientWidth));
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label="Selected analytics work"
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") { e.preventDefault(); goTo(index + 1); }
        if (e.key === "ArrowLeft") { e.preventDefault(); goTo(index - 1); }
      }}
    >
      <div
        ref={track}
        className="no-scrollbar flex overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-1"
        tabIndex={0}
      >
        {items.map((it, i) => (
          <article
            key={it.slug}
            className="snap-start shrink-0 w-full px-1"
            aria-label={`${i + 1} of ${items.length}: ${it.title}`}
          >
            {/* Fixed ratio so every slide is the same height — otherwise the
                track sizes to the tallest chart and short ones trail dead
                space. The frame is filled with the chart's own background
                colour, which makes the letterboxing invisible. */}
            <div
              className="border border-[var(--border)] rounded-md overflow-hidden aspect-[3/2] flex items-center justify-center"
              style={{ background: it.chart.bg ?? "var(--card)" }}
            >
              <img
                src={it.chart.src}
                alt={it.chart.alt}
                className="max-w-full max-h-full object-contain"
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>

            <p className="font-display text-xl md:text-2xl leading-snug text-[var(--heading)] mt-7 max-w-2xl">
              {it.finding}
            </p>

            <p className="text-sm text-[var(--muted)] mt-3">
              {it.title} — {it.scale}
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-5">
              <a
                href={it.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--accent)] underline underline-offset-4 decoration-[var(--border)] hover:decoration-[var(--accent)] transition-colors"
              >
                Open the dashboard
              </a>
              <a
                href={it.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--muted)] hover:text-[var(--heading)] transition-colors"
              >
                Source
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="flex items-center gap-5 mt-8">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          disabled={index === 0}
          aria-label="Previous project"
          className="text-[var(--muted)] hover:text-[var(--heading)] disabled:opacity-25 disabled:hover:text-[var(--muted)] transition-colors"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          disabled={index === items.length - 1}
          aria-label="Next project"
          className="text-[var(--muted)] hover:text-[var(--heading)] disabled:opacity-25 disabled:hover:text-[var(--muted)] transition-colors"
        >
          →
        </button>

        <div className="flex-1 flex items-center gap-2">
          {items.map((it, i) => (
            <button
              key={it.slug}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to ${it.title}`}
              aria-current={i === index}
              className="h-px flex-1 transition-colors"
              style={{
                background: i === index ? "var(--heading)" : "var(--border)",
                height: i === index ? 2 : 1,
              }}
            />
          ))}
        </div>

        <span className="nums text-xs text-[var(--faint)] tabular-nums">
          {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
