"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import Image from "next/image";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { CSSProperties } from "react";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export default function HomePage() {
  return (
    <div className="space-y-32">
      {/* Hero */}
      <section id="hero" className="py-24">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-6">
          {/* LEFT: code-looking text */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="order-2 lg:order-1"
          >
            <CodeHeroCard />
          </motion.div>

          {/* RIGHT: profile image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="order-1 lg:order-2 flex justify-center relative"
          >
            <div
              aria-hidden
              className="absolute -z-10 w-[22rem] h-[22rem] lg:w-[28rem] lg:h-[28rem] rounded-full blur-3xl bg-gradient-to-br from-blue-300/40 via-indigo-200/40 to-fuchsia-200/30 translate-x-4 -translate-y-6"
            />
            <Image
              src="/images/me2.png"
              alt="David portrait"
              width={350}
              height={350}
              className="rounded-2xl shadow-2xl ring-4 ring-white dark:ring-slate-800"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Resume */}
      <motion.section
        id="resume"
        className="text-center space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
          },
        }}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Resume
        </h2>
        <a
          href="/David-Zeff-Resume-English.pdf"
          download
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Download Resume (PDF)
        </a>
      </motion.section>

      {/* About */}
      <motion.section
        id="about"
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
          },
        }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
          About Me
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
          {`I'm a Computer Science student with a passion for building impactful web applications that solve real problems. I thrive on working across the entire stack—from crafting intuitive user interfaces to architecting robust backends and deploying to the cloud.`}
        </p>
      </motion.section>

      <SkillsCarousel />

      {/* Projects */}
      <section id="projects" className="space-y-20">
        <motion.h2
          className="text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-gray-100"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
            },
          }}
        >
          Featured Projects
        </motion.h2>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Project Image Card */}
              <div className="relative w-full lg:w-3/5 group">
                {/* Animated bg glow */}
                <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 blur-3xl transition-all duration-700 animate-pulse" />
                {/* Subtle surface */}
                <div className="absolute -inset-2 rounded-2xl bg-black/5 dark:bg-white/5 transition-all duration-500" />
                <div className="relative rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 overflow-hidden transition-all duration-500">
                  {/* Browser bar */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-700 border-b border-gray-200 dark:border-slate-700">
                    <div className="flex gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-400 shadow-sm" />
                      <span className="w-3 h-3 rounded-full bg-yellow-400 shadow-sm" />
                      <span className="w-3 h-3 rounded-full bg-green-400 shadow-sm" />
                    </div>
                    <div className="flex-1 text-center">
                      <div className="rounded-md px-4 py-1 text-xs text-gray-600 dark:text-gray-200 max-w-xs mx-auto border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800">
                        {project.demo}
                      </div>
                    </div>
                  </div>

                  {/* Video */}
                  <div className="relative aspect-video overflow-hidden bg-black rounded-2xl">
                    <motion.video
                      src={project.video}
                      className="w-full h-full object-contain"
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster={project.image}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false, amount: 0.5 }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <motion.div
                className="w-full lg:w-2/5 flex flex-col justify-center space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.h3
                  className="text-3xl font-bold text-gray-900 dark:text-gray-100"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: (i: number) => ({
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: i * 0.1,
                        duration: 0.5,
                        ease: "easeOut",
                      },
                    }),
                  }}
                  custom={0}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: (i: number) => ({
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: i * 0.1,
                        duration: 0.5,
                        ease: "easeOut",
                      },
                    }),
                  }}
                  custom={1}
                >
                  {project.description}
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: (i: number) => ({
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: i * 0.1,
                        duration: 0.5,
                        ease: "easeOut",
                      },
                    }),
                  }}
                  custom={2}
                >
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-2 rounded-full bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  className="flex gap-4 pt-2"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: (i: number) => ({
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: i * 0.1,
                        duration: 0.5,
                        ease: "easeOut",
                      },
                    }),
                  }}
                  custom={3}
                >
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-200 font-semibold hover:border-gray-400 dark:hover:border-slate-500 hover:bg-gray-50 dark:hover:bg-slate-800 transform hover:scale-105 transition-all duration-200"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <motion.section
        id="contact"
        className="text-center space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-3xl font-bold text-gray-900 dark:text-gray-100"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
            },
          }}
        >
          {`Let's Connect`}
        </motion.h2>

        <div className="flex justify-center gap-4 flex-wrap">
          {/* Email */}
          <motion.a
            href="mailto:dpzeff@gmail.com"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
              },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Mail className="w-5 h-5" />
            dpzeff@gmail.com
          </motion.a>

          <motion.a
            href="https://github.com/DavidZeff1"
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
              },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Linkedin className="w-5 h-5" />
            GitHub
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/david-zeff-computerscience141592/"
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
              },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
}

/* ---------- CodeHeroCard (keeps dark code window look in both themes) ---------- */
function CodeHeroCard() {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="relative"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-12 bg-gradient-to-tr from-blue-500/30 via-cyan-400/20 to-fuchsia-500/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 bg-gradient-to-br from-violet-500/20 via-transparent to-emerald-500/20 blur-xl"
      />

      <div className="relative overflow-hidden rounded-2xl bg-slate-900/95 ring-1 ring-slate-700/50 shadow-2xl backdrop-blur-sm">
        <div className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-slate-800/80 to-slate-800/60 border-b border-slate-700/50">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500 shadow-sm" />
            <span className="h-3 w-3 rounded-full bg-yellow-500 shadow-sm" />
            <span className="h-3 w-3 rounded-full bg-green-500 shadow-sm" />
          </div>
          <span className="ml-3 text-xs text-slate-400 font-medium">
            Hero.tsx
          </span>
        </div>

        <div className="relative p-6">
          <pre className="text-slate-300 font-mono text-xl leading-7">
            <span className="text-slate-500">{"  <div>"}</span>
            {"\n"}
            <span className="text-slate-500">{"       <p>"}</span>
            {"\n \n"}
          </pre>

          <motion.div
            className="relative -mt-2 mb-4 pl-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
          >
            <div className="relative">
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent blur-sm opacity-60"
              >
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">{`Hello, I'm David`}</h1>
              </div>
              <h1 className="relative text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent leading-tight">
                {`Hello, I'm David`}
              </h1>
            </div>
          </motion.div>

          <pre className="text-slate-300 font-mono text-xl leading-7 pl-8">
            <span className="text-emerald-400">{`      Full-Stack Developer`}</span>
            {"\n\n"}
            <span className="text-slate-500">{"     </p>"}</span>
            {"\n"}
            <span className="text-slate-500">{"</div>"}</span>
          </pre>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------- SkillsCarousel (already dark-ready; paths match your /public/skills) ---------- */
function SkillsCarousel({ speed = 28 }: { speed?: number }) {
  const skills = [
    "React",
    "Next.js",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "SQL",
    "Python",
    "CPlus",
    "CSharp",
    "Java",
    "Docker",
  ];
  const loop = [...skills, ...skills];

  return (
    <div className="relative w-full py-6 border-y border-slate-300/20 dark:border-slate-700/50 bg-transparent">
      <div className="mask-edge relative overflow-hidden px-4">
        <div
          className="scroller flex items-center gap-12"
          style={{ "--duration": `${speed}s` } as CSSProperties}
        >
          {loop.map((skill, i) => (
            <div
              key={`${skill}-${i}`}
              className="shrink-0 flex flex-col items-center min-w-[120px]"
            >
              <div className="w-16 h-16 rounded-xl border border-slate-300/20 dark:border-slate-700/50 flex items-center justify-center mb-2 bg-white/5 dark:bg-white/5 backdrop-blur-sm">
                <Image
                  src={`/skills/${skill}.png`}
                  alt={`${skill} logo`}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-slate-700 dark:text-slate-300 text-sm text-center">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scroller {
          animation: scroll var(--duration) linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
        }
        .scroller:hover {
          animation-play-state: paused;
        }
        @keyframes scroll {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .mask-edge {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
          mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }
        @media (prefers-reduced-motion: reduce) {
          .scroller {
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}
