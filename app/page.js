"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Portfolio() {
  const [copied, setCopied] = useState(false);

  const current = {
    navBrand: "Mohamed Yousef",
    navAbout: "About",
    navProjects: "Projects",
    navContact: "Contact",
    status: "Available for Freelance & Backend Roles",
    greeting: "Hi, I am ",
    name: "Mohamed",
    title: "Full-Stack Software Engineer specializing in Django Backend & Next.js Frontend Development.",
    description: "I build robust, fast, and secure backend systems, integrating IoT hardware and Machine Learning models to deliver cutting-edge web applications.",
    browseBtn: "Browse Code",
    contactBtn: "Get In Touch",
    projectsTitle: "Latest Developed Projects",
    contactHeading: "Have a project in mind?",
    contactSub: "Let's discuss how we can transform your ideas into scalable, production-ready applications.",
    copyEmail: "Copy Email Address",
    emailCopied: "✓ Email Copied!",
    projects: [
      {
        title: "Smart Gym Management System",
        desc: "An integrated project linking a Django dashboard with IoT hardware (ESP32) for smart attendance tracking via NFC and QR codes.",
        tech: ["Django", "Python", "ESP32", "NFC/RFID", "PostgreSQL"]
      },
      {
        title: "Facial Expression Recognition AI",
        desc: "A computer vision project deploying machine learning models to classify real-time facial expressions from live camera feeds.",
        tech: ["Python", "Machine Learning", "OpenCV", "GitHub"]
      },
      {
        title: "Academic Portal & Data Management",
        desc: "A dynamic web platform for managing university courses, schedules, and automated quizzes with a robust API structure.",
        tech: ["Django REST Framework", "React", "Tailwind CSS"]
      }
    ]
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("mohamed.yoosef.official@gmail.com"); 
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      dir="ltr" 
      className="min-h-screen bg-[#020c0e] text-white font-sans overflow-x-hidden selection:bg-cyan-500/30 transition-all duration-300"
    >
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-r from-cyan-500/20 to-emerald-500/10 blur-[120px] pointer-events-none" />

      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-white/10 bg-[#020c0e]/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            {current.navBrand}
          </span>
          
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#about" className="hover:text-[#00f2fe] hover:drop-shadow-[0_0_8px_#00f2fe] transition-all">{current.navAbout}</a>
            <a href="#projects" className="hover:text-[#00f2fe] hover:drop-shadow-[0_0_8px_#00f2fe] transition-all">{current.navProjects}</a>
            <a href="#contact" className="hover:text-[#00f2fe] hover:drop-shadow-[0_0_8px_#00f2fe] transition-all">{current.navContact}</a>
          </div>
        </div>
      </nav>

      <section id="about" className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center relative z-10">
       <motion.div
  key={index}
  whileHover={{ y: -6, scale: 1.02 }}
  transition={{ type: "spring", stiffness: 300 }}
  className="p-6 rounded-2xl bg-[#03191d]/20 backdrop-blur-md border border-cyan-500/10 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(0,242,254,0.12)] transition-all group cursor-pointer flex flex-col justify-between relative overflow-hidden"
>
  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  
  <div className="relative z-10">
    <h3 className="text-xl font-bold text-gray-100 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
      {project.title}
      <span className="text-cyan-400/0 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300 text-lg">→</span>
    </h3>
    <p className="text-gray-400 group-hover:text-gray-300 mt-3 text-sm leading-relaxed transition-colors duration-300">{project.desc}</p>
  </div>
  
  <div className="flex flex-wrap gap-2 mt-6 relative z-10">
    {project.tech.map((t, i) => (
      <span key={i} className="text-xs px-2.5 py-1 bg-cyan-950/30 border border-cyan-500/10 rounded-md text-cyan-300/90 group-hover:border-cyan-500/30 transition-colors">
        {t}
      </span>
    ))}
  </div>
</motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex justify-center gap-4"
        >
          <a href="#projects" className="px-6 py-3 bg-[#00f2fe] text-black font-semibold rounded-full hover:bg-[#7fecff] transition-all shadow-[0_0_15px_rgba(0,242,254,0.4)] hover:shadow-[0_0_25px_#00f2fe]">
            {current.browseBtn}
          </a>
          <a href="#contact" className="px-6 py-3 border border-cyan-500/30 rounded-full text-cyan-400 bg-cyan-500/5 hover:bg-cyan-500/10 transition-all">
            {current.contactBtn}
          </a>
        </motion.div>
      </section>

      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          {current.projectsTitle}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {current.projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-[#03191d]/40 border border-cyan-500/10 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,242,254,0.15)] transition-all group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mt-3 text-sm leading-relaxed">{project.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs px-2.5 py-1 bg-cyan-950/40 border border-cyan-500/20 rounded-md text-cyan-300">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-20 px-6 max-w-3xl mx-auto text-center relative z-10">
        <div className="p-12 rounded-3xl bg-gradient-to-b from-cyan-950/20 to-transparent border border-cyan-500/10 shadow-[0_0_30px_rgba(0,242,254,0.05)]">
          <h2 className="text-3xl font-bold mb-4">{current.contactHeading}</h2>
          <p className="text-gray-400 mb-8">{current.contactSub}</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={copyEmail}
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold active:scale-95 transition-all rounded-xl font-medium text-sm flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,242,254,0.3)]"
            >
              {copied ? current.emailCopied : current.copyEmail}
            </button>
            <a 
              href="https://github.com/mohamedyousef-dev" 
              target="_blank" 
              className="px-6 py-3 bg-cyan-950/40 border border-cyan-500/20 hover:bg-cyan-950/80 text-cyan-400 transition-all rounded-xl font-medium text-sm flex items-center justify-center"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-cyan-500/5 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} {current.navBrand}. All rights reserved.
      </footer>
    </div>
  );
}
