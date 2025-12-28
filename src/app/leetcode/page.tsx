"use client";

import { useEffect, useState } from "react";
import topics from "@/lib/topics";

export default function LeetCodeRoadmap() {
  const [modalTopic, setModalTopic] = useState<string | null>(null);
  const [answered, setAnswered] = useState<Record<string, boolean>>({});

  const STORAGE_KEY = "lc_answered_urls_v1";

  useEffect(() => {
    // load answered set from localStorage
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setAnswered(JSON.parse(raw));
    } catch (e) {
      console.error("Failed to load answered set", e);
    }
  }, []);

  useEffect(() => {
    // redraw lines after mount and on resize
    drawLines();
    window.addEventListener("resize", drawLines);
    return () => window.removeEventListener("resize", drawLines);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function saveAnswered(next: Record<string, boolean>) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      setAnswered(next);
    } catch (e) {
      console.error("Failed to save answered set", e);
    }
  }

  function toggleAnswered(url: string) {
    const next = { ...(answered || {}) };
    next[url] = !next[url];
    saveAnswered(next);
  }

  function isAnswered(url: string) {
    return !!(answered && answered[url]);
  }

  /*
  =====================================================
  ADD YOUR LINKS HERE! Example:
  
  topics.arrays.easy.push({ name: "Two Sum", url: "https://leetcode.com/problems/two-sum/" });
  topics.arrays.medium.push({ name: "Group Anagrams", url: "https://leetcode.com/problems/group-anagrams/" });
  topics.trees.hard.push({ name: "Serialize Tree", url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" });
  =====================================================
  */

  const connections = [
    ["arrays", "twopointers"],
    ["arrays", "linkedlist"],
    ["twopointers", "slidingwindow"],
    ["twopointers", "binarysearch"],
    ["linkedlist", "trees"],
    ["trees", "tries"],
    ["trees", "backtracking"],
    ["trees", "graphs"],
    ["backtracking", "dp1d"],
    ["dp1d", "dp2d"],
    ["graphs", "advgraphs"],
    ["heap", "advgraphs"],
    ["greedy", "intervals"],
  ];

  function drawLines() {
    const svg = document.getElementById("lines");
    const container = document.querySelector(".roadmap-container");
    if (!svg || !container) return;

    svg.innerHTML = "";
    const containerRect = container.getBoundingClientRect();

    connections.forEach(([fromId, toId]) => {
      const from = document.getElementById(fromId);
      const to = document.getElementById(toId);
      if (!from || !to) return;

      const fromRect = from.getBoundingClientRect();
      const toRect = to.getBoundingClientRect();

      const x1 = fromRect.left + fromRect.width / 2 - containerRect.left;
      const y1 = fromRect.bottom - containerRect.top;
      const x2 = toRect.left + toRect.width / 2 - containerRect.left;
      const y2 = toRect.top - containerRect.top;

      const line = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line"
      );
      line.setAttribute("x1", String(x1));
      line.setAttribute("y1", String(y1));
      line.setAttribute("x2", String(x2));
      line.setAttribute("y2", String(y2));
      svg.appendChild(line);
    });
  }

  // small helper to render each link with a toggle
  function LinkRow({ l }: { l: { name: string; url: string } }) {
    const answeredState = isAnswered(l.url);
    return (
      <div className={`link-row ${answeredState ? "answered" : ""}`}>
        <a href={l.url} target="_blank" rel="noopener noreferrer">
          {l.name}
        </a>
        <button
          className="toggle-btn"
          aria-label={answeredState ? "Mark as not solved" : "Mark as solved"}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleAnswered(l.url);
          }}
        >
          {answeredState ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 6L9 17l-5-5"
                stroke="#065f46"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="9" stroke="#9ca3af" strokeWidth="2" />
            </svg>
          )}
        </button>
        <style jsx>{`
          .link-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 6px 8px;
            border-radius: 6px;
            margin: 3px 0;
          }
          .link-row a {
            color: inherit;
            text-decoration: none;
          }
          .link-row.answered {
            background: #0f5132;
            border: 1px solid #065f46;
          }
          .toggle-btn {
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 4px;
            display: flex;
            align-items: center;
          }
          .toggle-btn:focus {
            outline: 2px solid rgba(77, 179, 230, 0.25);
            border-radius: 4px;
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      <style jsx global>{`
        .roadmap-wrapper {
          font-family: Arial;
          background: #1a2633;
          color: #e0d6c8;
          margin: 0;
          padding: 20px;
          border-radius: 12px;
        }
        .roadmap-wrapper h1 {
          text-align: center;
          margin-bottom: 10px;
          color: #f0c866;
        }
        .roadmap-subtitle {
          text-align: center;
          color: #8a9bab;
          margin-bottom: 30px;
          font-size: 14px;
        }
        .roadmap-container {
          position: relative;
          width: 1000px;
          margin: 0 auto;
          height: 580px;
        }
        .roadmap-container svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        .roadmap-container svg line {
          stroke: #3d5468;
          stroke-width: 2;
        }
        .roadmap-node {
          position: absolute;
          background: #243241;
          border: 2px solid #3d5468;
          border-radius: 8px;
          padding: 10px 14px;
          cursor: pointer;
          text-align: center;
          white-space: nowrap;
          transition: 0.2s;
          font-size: 14px;
          color: #e0d6c8;
        }
        .roadmap-node:hover {
          background: #2c3d4f;
          transform: scale(1.08);
          border-color: #4db3e6;
        }
        .roadmap-node.independent {
          border-color: #f0c866;
          background: #2f4050;
        }
        .section-label {
          position: absolute;
          color: #8a9bab;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .roadmap-modal {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .roadmap-modal.open {
          display: flex;
        }
        .roadmap-modal-content {
          background: #243241;
          padding: 30px;
          border-radius: 12px;
          width: 500px;
          max-height: 80vh;
          overflow-y: auto;
          border: 1px solid #3d5468;
        }
        .roadmap-modal-content h2 {
          margin-top: 0;
          color: #f0c866;
        }
        .roadmap-close {
          float: right;
          cursor: pointer;
          font-size: 24px;
          color: #8a9bab;
        }
        .roadmap-close:hover {
          color: #e0d6c8;
        }
        .difficulty {
          margin: 15px 0;
        }
        .difficulty h3 {
          margin: 5px 0;
        }
        .easy {
          color: #4ade80;
        }
        .medium {
          color: #f0c866;
        }
        .hard {
          color: #f87171;
        }
        .links {
          margin-left: 15px;
          color: #8a9bab;
        }
        .links a {
          color: #4db3e6;
          display: block;
          margin: 3px 0;
        }
        .links a:hover {
          color: #6bc5eb;
        }
        .roadmap-legend {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-top: 20px;
          font-size: 13px;
          color: #8a9bab;
        }
        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .legend-box {
          width: 16px;
          height: 16px;
          border-radius: 4px;
          border: 2px solid;
        }
        .legend-box.core {
          border-color: #3d5468;
          background: #243241;
        }
        .legend-box.ind {
          border-color: #f0c866;
          background: #2f4050;
        }
      `}</style>

      <div className="roadmap-wrapper">
        <div className="roadmap-container">
          <svg id="lines"></svg>

          {/* Row 1: Foundation */}
          <div
            className="roadmap-node"
            id="arrays"
            style={{ left: 300, top: 0 }}
            onClick={() => setModalTopic("arrays")}
          >
            Arrays & Hashing
          </div>

          {/* Row 2 */}
          <div
            className="roadmap-node"
            id="twopointers"
            style={{ left: 100, top: 90 }}
            onClick={() => setModalTopic("twopointers")}
          >
            Two Pointers
          </div>
          <div
            className="roadmap-node"
            id="linkedlist"
            style={{ left: 300, top: 90 }}
            onClick={() => setModalTopic("linkedlist")}
          >
            Linked List
          </div>

          {/* Row 3 */}
          <div
            className="roadmap-node"
            id="slidingwindow"
            style={{ left: 30, top: 180 }}
            onClick={() => setModalTopic("slidingwindow")}
          >
            Sliding Window
          </div>
          <div
            className="roadmap-node"
            id="binarysearch"
            style={{ left: 180, top: 180 }}
            onClick={() => setModalTopic("binarysearch")}
          >
            Binary Search
          </div>
          <div
            className="roadmap-node"
            id="trees"
            style={{ left: 330, top: 180 }}
            onClick={() => setModalTopic("trees")}
          >
            Trees
          </div>

          {/* Row 4 */}
          <div
            className="roadmap-node"
            id="tries"
            style={{ left: 220, top: 270 }}
            onClick={() => setModalTopic("tries")}
          >
            Tries
          </div>
          <div
            className="roadmap-node"
            id="backtracking"
            style={{ left: 330, top: 270 }}
            onClick={() => setModalTopic("backtracking")}
          >
            Backtracking
          </div>
          <div
            className="roadmap-node"
            id="graphs"
            style={{ left: 480, top: 270 }}
            onClick={() => setModalTopic("graphs")}
          >
            Graphs
          </div>

          {/* Row 5 */}
          <div
            className="roadmap-node"
            id="dp1d"
            style={{ left: 330, top: 360 }}
            onClick={() => setModalTopic("dp1d")}
          >
            1D DP
          </div>
          <div
            className="roadmap-node"
            id="advgraphs"
            style={{ left: 530, top: 360 }}
            onClick={() => setModalTopic("advgraphs")}
          >
            Advanced Graphs
          </div>

          {/* Row 6 */}
          <div
            className="roadmap-node"
            id="dp2d"
            style={{ left: 330, top: 450 }}
            onClick={() => setModalTopic("dp2d")}
          >
            2D DP
          </div>

          {/* Independent */}
          <div
            className="roadmap-node"
            id="stack"
            style={{ left: 800, top: 40 }}
            onClick={() => setModalTopic("stack")}
          >
            Stack
          </div>
          <div
            className="roadmap-node"
            id="bit"
            style={{ left: 800, top: 120 }}
            onClick={() => setModalTopic("bit")}
          >
            Bit Manipulation
          </div>
          <div
            className="roadmap-node"
            id="heap"
            style={{ left: 680, top: 270 }}
            onClick={() => setModalTopic("heap")}
          >
            Heap
          </div>
          <div
            className="roadmap-node"
            id="greedy"
            style={{ left: 800, top: 270 }}
            onClick={() => setModalTopic("greedy")}
          >
            Greedy
          </div>
          <div
            className="roadmap-node"
            id="intervals"
            style={{ left: 800, top: 360 }}
            onClick={() => setModalTopic("intervals")}
          >
            Intervals
          </div>
        </div>

        <div className="support-link">
          <a
            href="https://buymeacoffee.com/davidzeff"
            target="_blank"
            rel="noopener noreferrer"
            className="coffee-btn"
          >
            ☕ Buy me a coffee
          </a>
        </div>

        {/* Modal */}
        <div
          className={`roadmap-modal ${modalTopic ? "open" : ""}`}
          onClick={() => setModalTopic(null)}
        >
          <div
            className="roadmap-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="roadmap-close" onClick={() => setModalTopic(null)}>
              &times;
            </span>
            <h2>{modalTopic ? topics[modalTopic].name : ""}</h2>
            <div className="difficulty">
              <h3 className="easy">Easy</h3>
              <div className="links">
                {modalTopic && topics[modalTopic].easy.length > 0
                  ? topics[modalTopic].easy.map(
                      (l: { name: string; url: string }) => (
                        <LinkRow key={l.url} l={l} />
                      )
                    )
                  : "No problems added yet"}
              </div>
            </div>
            <div className="difficulty">
              <h3 className="medium">Medium</h3>
              <div className="links">
                {modalTopic && topics[modalTopic].medium.length > 0
                  ? topics[modalTopic].medium.map(
                      (l: { name: string; url: string }) => (
                        <LinkRow key={l.url} l={l} />
                      )
                    )
                  : "No problems added yet"}
              </div>
            </div>
            <div className="difficulty">
              <h3 className="hard">Hard</h3>
              <div className="links">
                {modalTopic && topics[modalTopic].hard.length > 0
                  ? topics[modalTopic].hard.map(
                      (l: { name: string; url: string }) => (
                        <LinkRow key={l.url} l={l} />
                      )
                    )
                  : "No problems added yet"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
