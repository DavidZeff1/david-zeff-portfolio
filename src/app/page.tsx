"use client";

import { projects } from "@/lib/projects";
import Image from "next/image";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-24">
      {/* Hero */}
      <section id="hero" className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
            <div className="w-48 h-48 relative shrink-0">
              <Image
                src="/images/me3.png"
                alt="David portrait"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-4">David Zeff</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                Full-Stack Developer
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Computer Science graduate who loves building things with code.
                Whether it&apos;s front-end, back-end, or anywhere in between -
                if it involves problem-solving and programming, I&apos;m all in.
              </p>
              <a
                href="/David-Zeff-Resume-English.pdf"
                download
                className="inline-block px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded hover:bg-gray-800 dark:hover:bg-gray-200"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="border-t border-b border-gray-200 dark:border-gray-800 py-8"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              "React",
              "Next.js",
              "Node.js",
              "JavaScript",
              "TypeScript",
              "SQL",
              "Python",
              "C++",
              "C#",
              "Java",
              "Docker",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Projects</h2>

          <div className="space-y-16">
            {projects.map((project) => (
              <div
                key={project.title}
                className="border-b border-gray-200 dark:border-gray-800 pb-16 last:border-0"
              >
                <div className="mb-6">
                  <video
                    src={project.video}
                    className="w-full rounded border border-gray-200 dark:border-gray-800"
                    controls
                  />
                </div>

                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded hover:bg-gray-800 dark:hover:bg-gray-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-gray-200 dark:border-gray-800 pt-16"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:dpzeff@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <Mail className="w-5 h-5" />
              dpzeff@gmail.com
            </a>

            <a
              href="https://github.com/DavidZeff1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/david-zeff-computerscience141592/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
