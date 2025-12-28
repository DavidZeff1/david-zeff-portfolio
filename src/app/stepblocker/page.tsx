"use client";

import { useState, useEffect } from "react";

const CONFIG = {
  TARGET_STEPS: 2000,
  SECRET: "hostblocker2024",
};

export default function StepBlockerPage() {
  const [steps, setSteps] = useState(0);
  const [isTracking, setIsTracking] = useState(false);
  const [status, setStatus] = useState<{
    message: string;
    type: string;
  } | null>(null);

  useEffect(() => {
    // Load saved state
    try {
      const saved = localStorage.getItem("stepChallenge");
      if (saved) {
        const state = JSON.parse(saved);
        if (Date.now() - state.startTime < 24 * 60 * 60 * 1000) {
          setSteps(state.steps || 0);
        }
      }
    } catch (e) {
      console.error("Failed to load state", e);
    }
  }, []);

  function saveState(newSteps: number) {
    try {
      localStorage.setItem(
        "stepChallenge",
        JSON.stringify({ steps: newSteps, startTime: Date.now() })
      );
    } catch (e) {
      console.error("Failed to save state", e);
    }
  }

  function generateUnlockCode() {
    const now = new Date();
    const hourBlock = Math.floor(now.getTime() / 3600000);
    const dateStr = now.toISOString().split("T")[0];
    const input = `${CONFIG.SECRET}-${dateStr}-${hourBlock}`;

    let hash = 0;
    for (let i = 0; i < input.length; i++) {
      hash = (hash << 5) - hash + input.charCodeAt(i);
      hash = hash & hash;
    }

    return Math.abs(hash % 1000000)
      .toString()
      .padStart(6, "0");
  }

  function getMinutesLeft() {
    const now = new Date();
    const hourBlock = Math.floor(now.getTime() / 3600000);
    return Math.ceil(((hourBlock + 1) * 3600000 - now.getTime()) / 60000);
  }

  function showStatus(message: string, type: string) {
    setStatus({ message, type });
    if (type !== "tracking") {
      setTimeout(() => setStatus(null), 3000);
    }
  }

  function startTracking() {
    if (!window.DeviceMotionEvent) {
      showStatus("Motion not supported. Enter steps manually.", "error");
      return;
    }

    if (typeof (DeviceMotionEvent as any).requestPermission === "function") {
      (DeviceMotionEvent as any)
        .requestPermission()
        .then((r: string) => {
          if (r === "granted") enableTracking();
          else showStatus("Permission denied. Enter steps manually.", "error");
        })
        .catch(() => showStatus("Could not request permission.", "error"));
    } else {
      enableTracking();
    }
  }

  function enableTracking() {
    setIsTracking(true);
    showStatus("📍 Tracking... Walk with your phone!", "tracking");

    let lastAccel = { x: 0, y: 0, z: 0 };
    let lastStepTime = 0;

    const handleMotion = (e: DeviceMotionEvent) => {
      const a = e.accelerationIncludingGravity;
      if (!a || a.x === null) return;

      const now = Date.now();
      const mag = Math.sqrt(
        Math.pow(Math.abs((a.x || 0) - lastAccel.x), 2) +
          Math.pow(Math.abs((a.y || 0) - lastAccel.y), 2) +
          Math.pow(Math.abs((a.z || 0) - lastAccel.z), 2)
      );

      if (mag > 12 && now - lastStepTime > 300) {
        setSteps((prev) => {
          const newSteps = prev + 1;
          saveState(newSteps);
          return newSteps;
        });
        lastStepTime = now;
      }

      lastAccel = { x: a.x || 0, y: a.y || 0, z: a.z || 0 };
    };

    window.addEventListener("devicemotion", handleMotion);
  }

  function stopTracking() {
    setIsTracking(false);
    setStatus(null);
  }

  function handleManualSteps(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.namedItem("manualSteps") as HTMLInputElement;
    const value = parseInt(input.value, 10);

    if (isNaN(value) || value < 0) {
      showStatus("Enter a valid number", "error");
      return;
    }

    setSteps(value);
    saveState(value);
    input.value = "";
    showStatus("Steps updated!", "success");
  }

  function copyCode() {
    navigator.clipboard.writeText(generateUnlockCode()).then(() => {
      showStatus("Code copied!", "success");
    });
  }

  const percent = Math.min(100, (steps / CONFIG.TARGET_STEPS) * 100);
  const remaining = Math.max(0, CONFIG.TARGET_STEPS - steps);
  const circumference = 2 * Math.PI * 88;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div className="max-w-lg mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[var(--heading)] mb-2">
          🚶 StepBlocker
        </h1>
        <p className="text-[var(--muted)]">
          Walk 2,000 steps to unlock blocked websites
        </p>
      </div>

      {/* Progress Card */}
      <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 mb-6">
        {/* Progress Ring */}
        <div className="flex justify-center mb-6">
          <div className="relative w-52 h-52">
            <svg className="w-full h-full -rotate-90">
              <defs>
                <linearGradient
                  id="progressGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#4ade80" />
                  <stop offset="100%" stopColor="#22c55e" />
                </linearGradient>
              </defs>
              <circle
                cx="104"
                cy="104"
                r="88"
                fill="none"
                stroke="var(--border)"
                strokeWidth="12"
              />
              <circle
                cx="104"
                cy="104"
                r="88"
                fill="none"
                stroke="url(#progressGradient)"
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-500"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-bold text-[var(--heading)]">
                {steps.toLocaleString()}
              </span>
              <span className="text-[var(--muted)] text-sm">steps</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-around text-center mb-6">
          <div>
            <div className="text-2xl font-bold text-green-400">
              {remaining.toLocaleString()}
            </div>
            <div className="text-xs text-[var(--muted)]">remaining</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-400">
              {Math.round(percent)}%
            </div>
            <div className="text-xs text-[var(--muted)]">complete</div>
          </div>
        </div>

        {/* Unlock Code */}
        {steps >= CONFIG.TARGET_STEPS && (
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-black rounded-xl p-6 text-center">
            <div className="text-sm font-medium opacity-80 mb-1">
              🎉 CHALLENGE COMPLETE!
            </div>
            <div className="text-4xl font-mono font-bold tracking-widest mb-2">
              {generateUnlockCode()}
            </div>
            <div className="text-xs opacity-70 mb-3">
              Valid for {getMinutesLeft()} minutes
            </div>
            <button
              onClick={copyCode}
              className="bg-black/20 hover:bg-black/30 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              📋 Copy Code
            </button>
          </div>
        )}
      </div>

      {/* Status */}
      {status && (
        <div
          className={`text-center p-3 rounded-lg mb-6 text-sm ${
            status.type === "tracking"
              ? "bg-blue-500/20 text-blue-400"
              : status.type === "error"
              ? "bg-red-500/20 text-red-400"
              : "bg-green-500/20 text-green-400"
          }`}
        >
          {status.message}
        </div>
      )}

      {/* Controls Card */}
      <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 mb-6">
        {!isTracking ? (
          <button
            onClick={startTracking}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-4 rounded-xl hover:opacity-90 transition-opacity"
          >
            Start Step Tracking
          </button>
        ) : (
          <button
            onClick={stopTracking}
            className="w-full bg-[var(--border)] text-[var(--text)] font-semibold py-4 rounded-xl hover:opacity-90 transition-opacity"
          >
            Stop Tracking
          </button>
        )}

        <div className="border-t border-[var(--border)] mt-6 pt-6">
          <label className="block text-sm text-[var(--muted)] mb-2">
            Or enter steps manually from your Health app:
          </label>
          <form onSubmit={handleManualSteps} className="flex gap-3">
            <input
              type="number"
              name="manualSteps"
              placeholder="e.g., 2500"
              className="flex-1 bg-[var(--background)] border border-[var(--border)] rounded-lg px-4 py-3 text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)]"
            />
            <button
              type="submit"
              className="bg-[var(--border)] text-[var(--text)] font-medium px-6 py-3 rounded-lg hover:opacity-80 transition-opacity"
            >
              Update
            </button>
          </form>
        </div>
      </div>

      {/* Instructions Card */}
      <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 mb-6">
        <h3 className="font-semibold text-[var(--heading)] mb-4">
          How it works
        </h3>
        <ol className="text-sm text-[var(--muted)] space-y-3 list-decimal list-inside">
          <li>Download the StepBlocker desktop app (see below)</li>
          <li>Block distracting websites on your computer</li>
          <li>When you want to unblock, come here on your phone</li>
          <li>Walk 2,000 steps to get the unlock code</li>
          <li>Enter the code in the desktop app to unblock</li>
        </ol>
      </div>

      {/* Download Card */}
      {/* Download Card */}
      {/* Download Card */}
      <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-6 mb-6">
        <h3 className="font-semibold text-[var(--heading)] mb-2">
          📥 Get the Desktop App
        </h3>
        <p className="text-sm text-[var(--muted)] mb-4">
          You need the desktop app to block websites. The step tracker (this
          page) generates unlock codes.
        </p>

        {/* Mac */}
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-4 mb-3">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-[var(--text)]">🍎 Mac</span>
            <a
              href="https://github.com/DavidZeff1/stepblocker/releases/download/v1.0.0/stepblocker-mac.zip"
              className="bg-[var(--accent)] text-white text-sm font-medium py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              Download
            </a>
          </div>
          <p className="text-xs text-[var(--muted)]">
            Unzip → Right-click StepBlocker.app → Open → Open
          </p>
          <p className="text-xs text-[var(--muted)] mt-1 opacity-70">
            First time only: Mac will ask to confirm since it's not from the App
            Store
          </p>
        </div>

        {/* Windows */}
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-[var(--text)]">🪟 Windows</span>
            <a
              href="https://github.com/DavidZeff1/stepblocker-windows/releases/download/v1.0.0/stepblocker-windows.zip"
              className="bg-[var(--border)] text-[var(--text)] text-sm font-medium py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              Download
            </a>
          </div>
          <p className="text-xs text-[var(--muted)]">
            Requires{" "}
            <a
              href="https://python.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline"
            >
              Python 3
            </a>
            . Unzip → Double-click run.bat
          </p>
        </div>
      </div>

      {/* Support */}
      <div className="text-center pt-4 border-t border-[var(--border)]">
        <a
          href="https://buymeacoffee.com/davidzeff"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#ffdd00] text-black font-semibold py-3 px-6 rounded-xl hover:opacity-90 transition-opacity"
        >
          ☕ Buy me a coffee
        </a>
        <p className="text-xs text-[var(--muted)] mt-3">
          Free & open source. Support the project if you find it useful!
        </p>
      </div>
    </div>
  );
}
