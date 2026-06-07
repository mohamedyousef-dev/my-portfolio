"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Portfolio() {
  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  const data = {
    name: "Mohamed Yousef",
    firstName: "Mohamed",
    title: "Full-Stack Software Engineer",
    subtitle: "Django Backend & Next.js Frontend Development",
    description:
      "I build robust, fast, and secure backend systems, integrating IoT hardware and Machine Learning models to deliver cutting-edge web applications.",
    status: "Available for Freelance & Backend Roles",

    email: "mohamed.yoosef.official@gmail.com",

    github: "https://github.com/mohamedyousef-dev",

    projects: [
      {
        title: "Smart Gym Management System",
        desc: "An integrated project linking a Django dashboard with IoT hardware (ESP32) for smart attendance tracking via NFC and QR codes.",
        tech: ["Django", "Python", "ESP32", "NFC/RFID", "PostgreSQL"],
        github: "https://github.com/mohamedyousef-dev/smart-gym",  
        demo: "",  
      },
      {
        title: "Facial Expression Recognition AI",
        desc: "A computer vision project deploying machine learning models to classify real-time facial expressions from live camera feeds.",
        tech: ["Python", "Machine Learning", "OpenCV", "GitHub"],
        github: "https://github.com/mohamedyousef-dev/facial-recognition",  
        demo: "",
      },
      {
        title: "Academic Portal & Data Management",
        desc: "A dynamic web platform for managing university courses, schedules, and automated quizzes with a robust API structure.",
        tech: ["Django REST Framework", "React", "Tailwind CSS"],
        github: "https://github.com/mohamedyousef-dev/academic-portal", 
        demo: "",
      },
    ],

    skills: [
      { category: "Backend", items: ["Django", "Django REST Framework", "Python", "PostgreSQL", "Redis"] },
      { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
      { category: "AI & IoT", items: ["Machine Learning", "OpenCV", "ESP32", "NFC/RFID", "MQTT"] },
      { category: "DevOps", items: ["Docker", "Git", "Linux", "Nginx"] },
    ],
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(data.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div
      dir="ltr"
      className="min-h-screen bg-[#020c0e] text-white font-sans overflow-x-hidden selection:bg-cyan-500/30"
    >
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-r from-cyan-500/20 to-emerald-500/10 blur-[120px] pointer-events-none z-0" />

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md border-b ${
          scrolled ? "border-white/10 bg-[#020c0e]/70" : "border-transparent bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            {data.name}
          </span>

          <div className="hidden md:flex items-center gap-6 text-sm text-gray-400">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_#00f2fe] transition-all"
              >
                {l.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#020c0e]/95 border-b border-cyan-500/10 px-6 pb-4 flex flex-col gap-4"
            >
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm py-1"
                >
                  {l.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <section id="about" className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="px-3 py-1 text-xs font-medium border border-cyan-500/30 rounded-full bg-cyan-500/10 text-cyan-300 shadow-[0_0_15px_rgba(0,242,254,0.1)]">
            {data.status}
          </span>

          <div className="mx-auto mt-8 w-28 h-28 rounded-full border-2 border-cyan-500/40 shadow-[0_0_25px_rgba(0,242,254,0.2)] overflow-hidden">
  <img src="/img.jpg" alt="Mohamed" className="w-full h-full object-cover object-center" />
</div>

          <h1 className="text-4xl md:text-6xl font-extrabold mt-6 tracking-tight leading-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-[#00f2fe] to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,242,254,0.3)]">
              {data.firstName}
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mt-3 text-gray-300">{data.title}</h2>
          <p className="text-base text-gray-500 mt-1">{data.subtitle}</p>
          <p className="text-lg text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">{data.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex justify-center gap-4 flex-wrap"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-[#00f2fe] text-black font-semibold rounded-full hover:bg-[#7fecff] transition-all shadow-[0_0_15px_rgba(0,242,254,0.4)] hover:shadow-[0_0_25px_#00f2fe]"
          >
            Browse Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-cyan-500/30 rounded-full text-cyan-400 bg-cyan-500/5 hover:bg-cyan-500/10 transition-all"
          >
            Get In Touch
          </a>
        </motion.div>
      </section>

      <section id="skills" className="py-20 px-6 max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.skills.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-5 rounded-2xl bg-[#03191d]/40 border border-cyan-500/10 hover:border-cyan-400/30 transition-all"
            >
              <h3 className="text-sm font-semibold text-cyan-400 mb-4 uppercase tracking-widest">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, j) => (
                  <span key={j} className="text-xs px-2.5 py-1 bg-cyan-950/40 border border-cyan-500/20 rounded-md text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Latest Developed Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-[#03191d]/40 border border-cyan-500/10 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,242,254,0.15)] transition-all group flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mt-3 text-sm leading-relaxed">{project.desc}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 bg-cyan-950/40 border border-cyan-500/20 rounded-md text-cyan-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Project links */}
                <div className="flex gap-3 mt-5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-cyan-400 transition-colors border border-white/10 hover:border-cyan-500/40 px-3 py-1.5 rounded-lg"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.42-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23A11.51 11.51 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.293-1.23 3.293-1.23.647 1.653.242 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.697.825.578C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-emerald-400 transition-colors border border-white/10 hover:border-emerald-500/40 px-3 py-1.5 rounded-lg"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-20 px-6 max-w-3xl mx-auto text-center relative z-10">
        <div className="p-12 rounded-3xl bg-gradient-to-b from-cyan-950/20 to-transparent border border-cyan-500/10 shadow-[0_0_30px_rgba(0,242,254,0.05)]">
          <h2 className="text-3xl font-bold mb-4">Have a project in mind?</h2>
          <p className="text-gray-400 mb-8">
            Let&apos;s discuss how we can transform your ideas into scalable, production-ready applications.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={copyEmail}
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold active:scale-95 transition-all rounded-xl text-sm flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,242,254,0.3)]"
            >
              {copied ? "✓ Email Copied!" : "Copy Email Address"}
            </button>
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-cyan-950/40 border border-cyan-500/20 hover:bg-cyan-950/80 text-cyan-400 transition-all rounded-xl text-sm flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.42-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23A11.51 11.51 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.293-1.23 3.293-1.23.647 1.653.242 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.697.825.578C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub Profile
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-cyan-500/5 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} {data.name}. All rights reserved.
      </footer>
    </div>
  );
}
