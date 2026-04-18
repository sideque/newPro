import { useState, useEffect, memo } from "react";
import TypeWriter from "./TypeWriter";
import {
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaJava,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiSpring,
  SiReact,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

const MobileHome = memo(() => {
  const techStack = [
    { icon: SiReact, name: "React", color: "text-cyan-400" },
    { icon: SiNextdotjs, name: "Next.js", color: "text-white" },
    { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
    { icon: FaCode, name: "Express.js", color: "text-gray-400" },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-400" },
    { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-teal-400" },
    { icon: SiBootstrap, name: "Bootstrap", color: "text-purple-500" },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }
  };

  return (
    <main className="section-padding pt-20 pb-16 min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 via-transparent to-amber-500/5" />

      <div className="max-w-6xl mx-auto relative">
        <div className="space-y-6">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900/70 border border-neutral-800/60">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-neutral-400 text-xs font-medium">
              Open to Opportunities
            </span>
          </div>

          {/* Name */}
          <div>
            <p className="text-neutral-500 text-sm font-medium mb-2">
              Hi there, I'm —
            </p>
            <h1 className="text-4xl font-black leading-tight">
              <span className="text-neutral-50">Aboobakkar</span>
              <br />
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                Sidhique
              </span>
            </h1>
          </div>

          {/* TypeWriter */}
          <div className="text-lg text-neutral-300 font-semibold min-h-[1.75rem]">
            <TypeWriter
              texts={[
                "MERN Stack Developer",
                "Crafting Modern Web Experiences",
                "Building Real-World Applications",
                "Future Software Engineer",
              ]}
              delay={100}
              deleteDelay={50}
            />
          </div>

          {/* Description */}
          <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
            I'm a passionate{" "}
            <span className="text-amber-400 font-semibold">
              Full-Stack (MERN) Developer
            </span>{" "}
            dedicated to building modern, scalable web applications using{" "}
            <span className="text-amber-400 font-semibold">
              MongoDB, Express, React & Node.js
            </span>
            .
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-900 px-5 py-3 rounded-xl font-semibold text-sm"
            >
              View Projects
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 border border-neutral-700/60 text-neutral-300 px-5 py-3 rounded-xl font-medium text-sm"
            >
              <FaEnvelope className="text-amber-500 text-xs" />
              Contact
            </button>
          </div>

          {/* Social */}
          <div className="flex gap-3">
            <a
              href="https://github.com/sideque"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-neutral-500 hover:text-amber-400 bg-neutral-900/50 border border-neutral-800/50 rounded-xl transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sidhiee"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-neutral-500 hover:text-amber-400 bg-neutral-900/50 border border-neutral-800/50 rounded-xl transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </div>

          {/* Stats row */}
          <div className="flex gap-0 divide-x divide-neutral-800 bg-neutral-900/50 border border-neutral-800/60 rounded-xl py-2 mt-2">
            {[
              { v: "5+", l: "Projects" },
              { v: "2+", l: "Teams" },
              { v: "12+", l: "Tech" },
            ].map((s) => (
              <div key={s.l} className="flex-1 text-center px-2">
                <span className="block text-lg font-black text-amber-400">
                  {s.v}
                </span>
                <span className="block text-[10px] uppercase tracking-wider text-neutral-500 font-medium">
                  {s.l}
                </span>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="pt-4">
            <p className="text-neutral-600 text-[10px] uppercase tracking-[0.2em] mb-3 font-medium">
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 bg-neutral-900/60 border border-neutral-800/60 rounded-lg px-3 py-1.5"
                  >
                    <Icon className={`${tech.color} text-sm`} />
                    <span className="text-neutral-400 text-xs font-medium">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
});

MobileHome.displayName = "MobileHome";

export default MobileHome;
