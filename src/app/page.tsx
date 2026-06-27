"use client";

import "./globals.css";
import { projects } from "@/lib/projects";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-12 min-h-screen">
      {/* Hero */}
      <section className="text-center mb-12">
        <div className="w-full flex justify-center mb-10">
          <img
            src="/images/me.png"
            alt="David Zeff"
            className="w-40 h-40 object-cover rounded-xl"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold font-serif tracking-wide mb-2 text-[var(--heading)]">
          David Zeff
        </h1>
        <p className="text-sm font-light text-[var(--muted)] mb-8">
          Analyst
        </p>

        <div className="max-w-2xl mx-auto p-6 rounded-md mb-8 ">
          <p className="text-sm md:text-base leading-loose text-[var(--fg)]">
            Hi, I&apos;m David. I&apos;m a Computer Science graduate who loves
            building things with code. Whether it&apos;s front-end, back-end, or
            anywhere in between — if it involves problem-solving and
            programming, I&apos;m all in.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <a
              href="mailto:dpzeff@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 text-sm md:text-base border rounded-lg bg-[var(--button-bg)] border-[var(--border)] hover:rotate-2 transition-transform"
            >
              <Mail className="w-5 h-5 text-[var(--icon)]" />
              dpzeff@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/david-zeff-computerscience141592/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 text-sm md:text-base border rounded-lg bg-[var(--button-bg)] border-[var(--border)] hover:-rotate-2 transition-transform"
            >
              <Linkedin className="w-5 h-5 text-[var(--linkedin)]" />
              LinkedIn
            </a>

            <a
              href="https://github.com/DavidZeff1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 text-sm md:text-base border rounded-lg bg-[var(--button-bg)] border-[var(--border)] hover:rotate-2 transition-transform"
            >
              <Github className="w-5 h-5 text-[var(--icon)]" />
              GitHub
            </a>

            <a
              href="/David_Zeff_Resume2.docx"
              download
              className="flex items-center justify-center gap-2 px-4 py-2 text-sm md:text-base border rounded-lg bg-[var(--button-bg)] border-[var(--border)] hover:-rotate-2 transition-transform"
            >
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-12">
        <h2 className="text-3xl font-serif mb-8 text-center text-[var(--heading)]">
          Projects
        </h2>

        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="pb-12 border-b border-[var(--border)] last:border-0"
            >
              <div className="mb-4 rounded-md overflow-hidden border bg-[var(--card)] border-[var(--border)]">
                <div className="relative w-full aspect-video bg-black">
                  <video
                    src={project.video}
                    className="absolute inset-0 w-full h-full object-contain"
                    controls
                    playsInline
                  />
                </div>
              </div>

              <h3 className="text-2xl font-serif mb-2 text-[var(--heading)]">
                {project.title}
              </h3>
              <p className="text-sm md:text-base text-[var(--muted)] mb-3 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-[var(--pill-bg)] border border-[var(--border)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[var(--fg)] hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[var(--fg)] hover:underline"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
