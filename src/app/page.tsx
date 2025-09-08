"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import Image from "next/image";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export default function HomePage() {
  return (
    <div className="space-y-32">
      {/* Hero */}
      <section
        id="hero"
        className="flex flex-col items-center text-center py-24 space-y-10"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-6"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
              },
            }}
            className="flex justify-center"
          >
            <Image
              src="/images/me.png"
              alt="David portrait"
              width={160}
              height={160}
              className="rounded-full shadow-lg border-4 border-white"
              priority
            />
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
              },
            }}
            className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent"
          >
            {`Hi, I'm David`}
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
              },
            }}
            className="text-xl text-gray-600 max-w-2xl leading-relaxed"
          >
            Full-Stack Developer crafting exceptional digital experiences with{" "}
            <span className="font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
              Next.js, React, Node.js, SQL
            </span>
          </motion.p>
        </motion.div>
      </section>

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
        <h2 className="text-3xl font-semibold mb-6 text-gray-900">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          {`I'm a Computer Science student with a passion for building impactful
          web applications that solve real problems. I thrive on working across
          the entire stack—from crafting intuitive user interfaces to
          architecting robust backends and deploying to the cloud.`}
        </p>
      </motion.section>

      {/* Projects */}
      <section id="projects" className="space-y-20">
        <motion.h2
          className="text-4xl lg:text-5xl font-bold text-center text-gray-900"
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
              {/* Project Image with Enhanced Styling */}
              <div className="relative w-full lg:w-3/5 group">
                {/* Animated background gradient */}
                <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 blur-3xl transition-all duration-700 animate-pulse"></div>

                {/* Shadow layer */}
                <div className="absolute -inset-2 rounded-2xl bg-black/5 group-hover:bg-black/10 transition-all duration-500"></div>

                <div className="relative rounded-2xl shadow-2xl border border-gray-200 bg-white overflow-hidden group-hover:shadow-3xl transition-all duration-500">
                  {/* Enhanced Browser Bar */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                    <div className="flex gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-400 shadow-sm"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-400 shadow-sm"></span>
                      <span className="w-3 h-3 rounded-full bg-green-400 shadow-sm"></span>
                    </div>
                    <div className="flex-1 text-center">
                      <div className="bg-white rounded-md px-4 py-1 text-xs text-gray-600 max-w-xs mx-auto border">
                        {project.demo}
                      </div>
                    </div>
                  </div>

                  {/* Screenshot */}
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
                  className="text-3xl font-bold text-gray-900"
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
                  className="text-lg text-gray-600 leading-relaxed"
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
                      className="px-3 py-2 rounded-full bg-gray-100 border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
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
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:border-gray-400 hover:bg-gray-50 transform hover:scale-105 transition-all duration-200"
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
        <h2 className="text-3xl font-bold text-gray-900">Resume</h2>
        <a
          href="/David-Zeff-Resume-English.pdf"
          download
          className="inline-block px-8 py-4 rounded-lg bg-gray-900 text-white font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Download Resume (PDF)
        </a>
      </motion.section>

      {/* Contact */}
      <motion.section
        className="text-center space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-3xl font-bold text-gray-900"
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

        <div className="flex justify-center gap-4 flex-wrap" id="contact">
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
            Email Me
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/your-github"
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Github className="w-5 h-5" />
            GitHub
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://linkedin.com/in/your-linkedin"
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
}
