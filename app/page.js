"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Portfolio() {
  const [lang, setLang] = useState("en"); 
  const [copied, setCopied] = useState(false);

  const data = {
    ar: {
      dir: "rtl",
      navBrand: "محمد.يوسف",
      navAbout: "عني",
      navProjects: "مشاريعي",
      navContact: "تواصل معي",
      status: "متاح للمشاريع وتطوير الـ Full-Stack",
      greeting: "أهلاً، أنا ",
      name: "محمد",
      title: "مهندس برمجيات ومتخصص في تطوير الـ Backend باستخدام Django.",
      description: "أقوم ببناء أنظمة خلفية قوية، سريعة، وآمنة، مع دمج تقنيات الـ IoT والذكاء الاصطناعي لتطوير تطبيقات ويب متكاملة وتفاعلية.",
      browseBtn: "تصفح أعمالي",
      contactBtn: "تواصل معي",
      projectsTitle: "آخر المشاريع التي قمت بتطويرها",
      contactHeading: "هل لديك مشروع قادم؟",
      contactSub: "دعنا نتحدث عن كيفية تحويل أفكارك البرمجية والـ Backend إلى واقع رقمي ملموس.",
      copyEmail: "نسخ البريد الإلكتروني",
      emailCopied: "✓ تم نسخ الإيميل!",
      projects: [
        {
          title: "نظام إدارة الصالات الرياضية الذكي (Smart Gym)",
          desc: "مشروع متكامل يربط لوحة تحكم Django مع أجهزة IoT (ESP32) لتسجيل الحضور والمتابعة الذكية عبر تقنيات الـ NFC وكود الـ QR.",
          tech: ["Django", "Python", "ESP32", "NFC/RFID", "PostgreSQL"]
        },
        {
          title: "نظام التعرف على تعبيرات الوجه (Facial Expression Recognition)",
          desc: "تطبيق ذكاء اصطناعي يقوم بتحليل الصور والفيديو في الوقت الفعلي لتحديد تعبيرات الوجه بدقة واستخراج تقارير إحصائية.",
          tech: ["Python", "Machine Learning", "OpenCV", "GitHub"]
        },
        {
          title: "منصة إدارة البيانات الأكاديمية",
          desc: "موقع ويب متكامل لإدارة الكورسات، الجداول، والاختبارات تم تطويره لخدمة قطاع عريض من الطلاب بشكل تفاعلي سريع.",
          tech: ["Django REST Framework", "React", "Tailwind CSS"]
        }
      ]
    },
    en: {
      dir: "ltr",
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
    }
  };

  const current = data[lang];

  const copyEmail = () => {
    navigator.clipboard.writeText("yoosef.dev@example.com"); 
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      dir={current.dir} 
      className="min-h-screen bg-[#030014] text-white font-sans overflow-x-hidden selection:bg-purple-500/30 transition-all duration-300"
    >
      
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-[120px] pointer-events-none" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-white/10 bg-[#030014]/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            {current.navBrand}
          </span>
          
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">{current.navAbout}</a>
            <a href="#projects" className="hover:text-white transition-colors">{current.navProjects}</a>
            <a href="#contact" className="hover:text-white transition-colors">{current.navContact}</a>
            
            {/* زر تغيير اللغة المتطور */}
            <button 
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              className="ml-2 px-3 py-1 text-xs border border-white/20 rounded-md text-white bg-white/5 hover:bg-white/15 transition-all font-semibold"
            >
              {lang === "ar" ? "English" : "العربية"}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          key={lang} 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="px-3 py-1 text-xs font-medium border border-purple-500/30 rounded-full bg-purple-500/10 text-purple-300">
            {current.status}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-6 tracking-tight leading-tight">
            {current.greeting} 
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              {current.name}
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-200">
            {current.title}
          </h2>
          <p className="text-lg text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
            {current.description}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex justify-center gap-4"
        >
          <a href="#projects" className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-all shadow-lg shadow-white/5">
            {current.browseBtn}
          </a>
          <a href="#contact" className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/5 transition-all">
            {current.contactBtn}
          </a>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          {current.projectsTitle}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {current.projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/[0.02] transition-all group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold group-hover:text-purple-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mt-3 text-sm leading-relaxed">{project.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-3xl mx-auto text-center relative z-10">
        <div className="p-12 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10">
          <h2 className="text-3xl font-bold mb-4">{current.contactHeading}</h2>
          <p className="text-gray-400 mb-8">{current.contactSub}</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={copyEmail}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 active:scale-95 transition-all rounded-xl font-medium text-sm flex items-center justify-center gap-2"
            >
              {copied ? current.emailCopied : current.copyEmail}
            </button>
            <a 
              href="https://github.com/mohamedyousef-dev" 
              target="_blank" 
              className="px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 transition-all rounded-xl font-medium text-sm flex items-center justify-center"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} {current.navBrand}. All rights reserved.
      </footer>
    </div>
  );
}
