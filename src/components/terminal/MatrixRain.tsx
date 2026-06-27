"use client";

import { useEffect, useRef } from "react";

type Props = { color: string; onExit: () => void };

export default function MatrixRain({ color, onExit }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const fontSize = 16;
    const cols = Math.floor(canvas.width / fontSize);
    const drops = Array(cols).fill(1);
    const chars = "01ｱｲｳｴｵｶｷｸ0101ﾊﾋﾌﾍﾎ$£¥€01ABCDEF".split("");

    let last = 0;
    const draw = (t: number) => {
      if (t - last > 50) {
        last = t;
        ctx.fillStyle = "rgba(0,0,0,0.08)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = color;
        ctx.font = `${fontSize}px monospace`;
        for (let i = 0; i < drops.length; i++) {
          const ch = chars[Math.floor(Math.random() * chars.length)];
          ctx.fillText(ch, i * fontSize, drops[i] * fontSize);
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
          drops[i]++;
        }
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    const stop = () => onExit();
    window.addEventListener("keydown", stop);
    window.addEventListener("click", stop);
    const auto = setTimeout(onExit, 9000);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(auto);
      window.removeEventListener("resize", resize);
      window.removeEventListener("keydown", stop);
      window.removeEventListener("click", stop);
    };
  }, [color, onExit]);

  return (
    <div className="fixed inset-0 z-[99999] bg-black/90 cursor-pointer">
      <canvas ref={canvasRef} className="w-full h-full" />
      <div
        className="absolute bottom-4 left-0 right-0 text-center text-sm"
        style={{ color }}
      >
        press any key or click to exit
      </div>
    </div>
  );
}
