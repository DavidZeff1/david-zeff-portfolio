"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Props = { color: string; dim: string; accent: string; onExit: () => void };

const W = 24;
const H = 12;
type Cell = { x: number; y: number };

const start = (): Cell[] => [
  { x: 6, y: 6 },
  { x: 5, y: 6 },
  { x: 4, y: 6 },
];

export default function Snake({ color, dim, accent, onExit }: Props) {
  const [snake, setSnake] = useState<Cell[]>(start);
  const [food, setFood] = useState<Cell>({ x: 16, y: 6 });
  const [dir, setDir] = useState<Cell>({ x: 1, y: 0 });
  const [score, setScore] = useState(0);
  const [dead, setDead] = useState(false);
  const dirRef = useRef(dir);
  dirRef.current = dir;

  const reset = useCallback(() => {
    setSnake(start());
    setFood({ x: 16, y: 6 });
    setDir({ x: 1, y: 0 });
    setScore(0);
    setDead(false);
  }, []);

  // input
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      if (k === "q" || k === "escape") {
        onExit();
        return;
      }
      if (dead && k === "r") {
        reset();
        return;
      }
      const d = dirRef.current;
      if ((k === "arrowup" || k === "w") && d.y === 0) setDir({ x: 0, y: -1 });
      else if ((k === "arrowdown" || k === "s") && d.y === 0) setDir({ x: 0, y: 1 });
      else if ((k === "arrowleft" || k === "a") && d.x === 0) setDir({ x: -1, y: 0 });
      else if ((k === "arrowright" || k === "d") && d.x === 0) setDir({ x: 1, y: 0 });
      if (["arrowup", "arrowdown", "arrowleft", "arrowright"].includes(k)) e.preventDefault();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [dead, onExit, reset]);

  // game loop
  useEffect(() => {
    if (dead) return;
    const id = setInterval(() => {
      setSnake((prev) => {
        const head = prev[0];
        const nx = head.x + dirRef.current.x;
        const ny = head.y + dirRef.current.y;
        if (nx < 0 || ny < 0 || nx >= W || ny >= H || prev.some((c) => c.x === nx && c.y === ny)) {
          setDead(true);
          return prev;
        }
        const newHead = { x: nx, y: ny };
        const ate = nx === food.x && ny === food.y;
        const body = ate ? prev : prev.slice(0, -1);
        if (ate) {
          setScore((s) => s + 1);
          let nf: Cell;
          do {
            nf = { x: Math.floor(Math.random() * W), y: Math.floor(Math.random() * H) };
          } while ([newHead, ...body].some((c) => c.x === nf.x && c.y === nf.y));
          setFood(nf);
        }
        return [newHead, ...body];
      });
    }, 110);
    return () => clearInterval(id);
  }, [dead, food]);

  const rows = [];
  for (let y = 0; y < H; y++) {
    let line = "";
    for (let x = 0; x < W; x++) {
      if (snake[0].x === x && snake[0].y === y) line += "█";
      else if (snake.some((c) => c.x === x && c.y === y)) line += "▓";
      else if (food.x === x && food.y === y) line += "◆";
      else line += "·";
    }
    rows.push(line);
  }

  return (
    <div className="my-1 line-in">
      <div className="flex justify-between text-[11px] mb-1" style={{ color: dim }}>
        <span>SNAKE — arrows/wasd · q to quit</span>
        <span style={{ color: accent }}>score: {String(score).padStart(3, "0")}</span>
      </div>
      <pre className="leading-tight text-xs sm:text-sm crt-glow" style={{ color }}>
        {rows.join("\n")}
      </pre>
      {dead && (
        <div className="text-sm mt-1" style={{ color: accent }}>
          GAME OVER · score {score} · press R to restart, Q to quit
        </div>
      )}
    </div>
  );
}
