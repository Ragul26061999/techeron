"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Rocket, 
  ExternalLink, 
  Cpu, 
  Smartphone, 
  Code2, 
  Layers, 
  MonitorPlay, 
  Database,
  ArrowRight,
  MapPin,
  Mail,
  Send
} from "lucide-react";
import { cn } from "@/lib/utils";

// Project Data with Generated Images
const PROJECTS = [
  {
    title: "NEET MentorX",
    subtitle: "Mobile Learning Application for NEET Aspirants",
    challenge: "Students preparing for NEET lack a structured system for practice, revision, and performance tracking.",
    solution: "A high-performance mobile app providing organized study materials, test series, and advanced performance analytics.",
    features: ["Practice Tests & PYQs", "Smart Notes & Flashcards", "Analytics Dashboard", "Seamless UX"],
    tech: ["Flutter", "Firebase", "REST APIs", "Figma"],
    image: "/images/neet_mentorx.png",
    accent: "cyan"
  },
  {
    title: "School Admin System",
    subtitle: "Centralized Web-Based Administrative Platform",
    challenge: "Manual handling of student records, attendance, and reporting creates operational bottlenecks and errors.",
    solution: "A centralized web system automating school management workflows to boost institutional efficiency.",
    features: ["Student & Staff Modules", "Automated Attendance", "Dynamic Timetables", "Data Analytics"],
    tech: ["Web Development", "Firebase", "APIs", "UI/UX Design"],
    image: "/images/school_admin.png",
    accent: "purple"
  },
  {
    title: "Hospital Management",
    subtitle: "Digital Healthcare Workflow Application",
    challenge: "Manual record management causing critical delays and inefficiencies in hospital operations.",
    solution: "A comprehensive digital ecosystem streamlining Outpatient (OP), Pharmacy, and Laboratory operations.",
    features: ["OP Patient Routing", "Pharmacy Inventory", "Lab Report Automation", "Workflow Sync"],
    tech: ["Full Stack Web", "Mobile Apps", "Firebase", "API Integration"],
    image: "/images/hospital_mgmt.png", 
    accent: "cyan"
  },
  {
    title: "Scalable LMS",
    subtitle: "Scalable Online Education Platform",
    challenge: "Institutions need a unified hub to manage diverse courses and accurately track student progress.",
    solution: "A robust LMS engineered for seamless content delivery, dynamic assessments, and deep data tracking.",
    features: ["Course Management", "Progress Tracking", "Assessment Engine", "Admin Dashboard"],
    tech: ["Web & Mobile", "Firebase", "UI/UX Strategy"],
    image: "/images/lms_platform.png", 
    accent: "purple"
  }
];

const SKILLS = [
  { category: "Web & Mobile Ecosystems", tech: ["Full Stack Web", "Mobile Strategy", "Desktop Apps", "Performance"], icon: <Smartphone className="w-6 h-6" /> },
  { category: "AI & Scalable Backend", tech: ["AI Agent Engineering", "CI/CD DevOps", "REST APIs", "Cloud Infrastructure"], icon: <Database className="w-6 h-6" /> },
  { category: "Strategy & Optimization", tech: ["SEO Optimization", "UI/UX Strategy", "Figma", "Digital Marketing"], icon: <MonitorPlay className="w-6 h-6" /> }
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#00F0FF]/30">
      
      {/* --- SECTION 1: HERO --- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {mounted && (
            <>
              {/* 1. Star Field with subtle twinkling */}
              {[...Array(80)].map((_, i) => (
                <motion.div
                  key={`star-${i}`}
                  initial={{ 
                    x: `${Math.random() * 100}%`, 
                    y: `${Math.random() * 70}%`,
                    opacity: Math.random() * 0.5,
                    scale: Math.random() * 0.5 + 0.5
                  }}
                  animate={{ 
                    opacity: [Math.random() * 0.5, 1, Math.random() * 0.5]
                  }}
                  transition={{ 
                    duration: 2 + Math.random() * 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: Math.random() * 5
                  }}
                  className="absolute w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_5px_rgba(255,255,255,0.5)]"
                />
              ))}

              {/* 2. Shooting Stars (Occasional streaks - Horizontal) */}
              {[...Array(9)].map((_, i) => (
                <motion.div
                  key={`shooting-star-${i}`}
                  initial={{ top: `${10 + Math.random() * 50}%`, left: "-20%", opacity: 0 }}
                  animate={{ 
                    left: ["-20%", "120%"],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 1.0 + Math.random() * 1.5, 
                    repeat: Infinity, 
                    repeatDelay: 3 + Math.random() * 12,
                    ease: "linear",
                    delay: i * 4
                  }}
                  className="absolute w-[250px] h-[1px] bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent"
                />
              ))}
            </>
          )}

          {/* 3. Underlying ground darkness */}
          <div className="absolute bottom-0 w-full h-[40%] bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent z-10" />

          {/* 4. Heavy slow-rolling base banks */}
          <motion.div
            animate={{ x: ["-5%", "5%"], y: [10, -10] }}
            transition={{ duration: 35, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
            className="absolute -bottom-[15%] left-0 w-[120%] h-[60%] bg-slate-800/10 blur-[90px] rounded-[100%] z-10"
          />

          {/* 5. Detailed "Hilly" Fog Structure */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: `${(i * 15) - 20}%`, y: "20%" }}
              animate={{ 
                x: [`${(i * 15) - 20}%`, `${(i * 15) - 10}%`, `${(i * 15) - 20}%`],
                y: [20, 10, 20],
                opacity: [0.1, 0.2, 0.1],
                scale: [1, 1.15, 1]
              }}
              transition={{ 
                duration: 20 + (i * 2), 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * -3
              }}
              className="absolute bottom-[-10%] w-[40%] h-[45%] bg-slate-400/15 blur-[60px] rounded-[100%] z-20"
            />
          ))}

          {/* 6. Fine Surface Wisps */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`wisp-${i}`}
              initial={{ x: `${(i * 20)}%`, y: "30%" }}
              animate={{ 
                x: [`${(i * 20)}%`, `${(i * 20) + 15}%`, `${(i * 20)}%`],
                opacity: [0.05, 0.15, 0.05],
              }}
              transition={{ 
                duration: 12 + (i * 3), 
                repeat: Infinity, 
                ease: "linear",
                delay: i * -2
              }}
              className="absolute bottom-[5%] w-[30%] h-[20%] bg-white/10 blur-[40px] rounded-[100%] z-30"
            />
          ))}

          {/* 7. Sharp Foreground Details */}
          <motion.div
            animate={{ x: ["-10%", "10%"] }}
            transition={{ duration: 18, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            className="absolute -bottom-[5%] left-0 w-[60%] h-[25%] bg-slate-200/5 blur-[25px] rounded-[100%] z-40"
          />
          <motion.div
            animate={{ x: ["10%", "-10%"] }}
            transition={{ duration: 22, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            className="absolute -bottom-[8%] right-0 w-[55%] h-[30%] bg-white/5 blur-[35px] rounded-[100%] z-40"
          />

          {/* 8. Atmospheric Glow topping the fog */}
          <div className="absolute bottom-[25%] w-full h-[15%] bg-gradient-to-t from-zinc-500/10 to-transparent blur-[30px] z-10" />
        </div>

        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 text-[#00F0FF] shadow-[0_0_15px_rgba(0,240,255,0.1)]">
              <Code2 className="w-4 h-4" />
              <span className="text-xs font-bold tracking-widest uppercase">Full Stack Developer & UI/UX Strategist</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
              Building Intelligent,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#8A2BE2] to-[#00F0FF] animate-gradient">
                Scalable Solutions.
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-xl text-zinc-400 mb-12 font-medium leading-relaxed">
              I specialize in developing high-performance web and mobile applications—from EdTech platforms to complex Management Systems.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="group relative px-8 py-4 bg-white text-black font-bold rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all hover:scale-105 active:scale-95">
                <span className="relative z-10 flex items-center gap-2">
                  View My Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="px-8 py-4 bg-white/5 text-white font-bold rounded-2xl border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-all hover:border-[#8A2BE2]/50">
                Hire Me on Upwork
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 2: PORTFOLIO SHOWCASE --- */}
      <section className="py-32 container mx-auto px-6">
        <div className="mb-24 flex items-end justify-between">
          <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">Crafting Reality</h2>
            <p className="text-zinc-500 font-medium tracking-wide">SELECTED WORKS • 2024-2026</p>
          </div>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent mx-12 hidden md:block" />
        </div>

        <div className="space-y-48">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={cn(
                "flex flex-col gap-12 items-center",
                idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              )}
            >
              <div className="flex-1 w-full relative group">
                <div className={cn(
                  "absolute -inset-4 rounded-[2rem] blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-1000",
                  project.accent === "cyan" ? "bg-[#00F0FF]" : "bg-[#8A2BE2]"
                )} />
                <div className="relative glass-card rounded-[2rem] overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-700 hover:rotate-2 h-[350px] md:h-[400px] lg:h-[450px] w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={idx === 0}
                  />
                </div>
              </div>

              <div className="flex-1 space-y-8">
                <div className="space-y-4">
                  <span className={cn(
                    "text-xs font-black uppercase tracking-[0.3em]",
                    project.accent === "cyan" ? "text-[#00F0FF]" : "text-[#8A2BE2]"
                  )}>
                    Project {idx + 1} | {project.title}
                  </span>
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tight">{project.subtitle}</h3>
                </div>

                <div className="glass-card p-8 rounded-3xl space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-2">The Challenge</h4>
                    <p className="text-zinc-300 leading-relaxed">{project.challenge}</p>
                  </div>
                  <div className="h-[1px] bg-white/5" />
                  <div>
                    <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-2">The Solution</h4>
                    <p className="text-zinc-300 leading-relaxed font-medium">{project.solution}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-zinc-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECTION 3: SKILLS --- */}
      <section className="relative py-32 overflow-hidden bg-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">The Engine</h2>
            <p className="text-zinc-400 max-w-xl mx-auto font-medium">Powering digital experiences with a modern, high-performance tech stack.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SKILLS.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card p-10 rounded-[2.5rem] relative group border-white/5 hover:border-[#00F0FF]/30 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#00F0FF]/10 flex items-center justify-center text-[#00F0FF] mb-8 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-bold mb-6">{skill.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skill.tech.map((t, j) => (
                    <span key={j} className="text-zinc-500 font-medium">{t} •</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4 & FOOTER MERGED: THE FINALE --- */}
      <section className="relative pt-48 pb-12 overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-purple-600/5 rounded-full blur-[160px] animate-pulse pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-48">
            <motion.div
               initial={{ scale: 0.95, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
                Ready to build<br />something extraordinary?
              </h2>
              <p className="max-w-xl mx-auto text-zinc-400 mb-12 text-lg font-medium leading-relaxed">
                Let&apos;s collaborate to turn your next big idea into a scalable reality.
                Currently available for freelance opportunities.
              </p>
              
              <div className="flex flex-col items-center gap-12">
                <button className="group relative px-12 py-6 bg-[#00F0FF] text-black font-black text-xl rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.2)] transition-all hover:scale-105 active:scale-95">
                  <span className="relative z-10 flex items-center gap-3">
                    Let&apos;s Talk on Upwork 🚀
                  </span>
                </button>

                <div className="flex justify-center gap-12">
                  <Link href="#" className="text-sm font-black tracking-[0.2em] uppercase text-zinc-500 hover:text-[#00F0FF] transition-colors">LinkedIn</Link>
                  <Link href="#" className="text-sm font-black tracking-[0.2em] uppercase text-zinc-500 hover:text-white transition-colors">GitHub</Link>
                  <Link href="#" className="text-sm font-black tracking-[0.2em] uppercase text-zinc-500 hover:text-[#8A2BE2] transition-colors">Upwork Profile</Link>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start pb-24 border-b border-white/5">
            <div className="space-y-12">
              <div className="space-y-6 text-left">
                <Link href="/" className="text-3xl font-black tracking-tighter text-white block">
                  TECHERON
                </Link>
                <p className="max-w-md text-zinc-500 leading-relaxed font-medium">
                  Designing and developing premium digital experiences for forward-thinking brands and institutions.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00F0FF]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="space-y-1 text-left">
                    <h4 className="text-sm font-black uppercase tracking-widest text-zinc-300">Office Location</h4>
                    <p className="text-lg text-zinc-500 font-medium">123 Tech Avenue, Chennai, India 600001</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#8A2BE2]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="space-y-1 text-left">
                    <h4 className="text-sm font-black uppercase tracking-widest text-zinc-300">Email Address</h4>
                    <p className="text-lg text-zinc-500 font-medium">hello@techeron.dev</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-10 rounded-[3rem] border border-white/5 space-y-10">
              <div className="space-y-4 text-left">
                <h3 className="text-4xl font-black tracking-tight">Let&apos;s build<br />something epic.</h3>
                <p className="text-zinc-500 font-medium tracking-wide leading-relaxed">Ready to transform your vision? We&apos;re available for new projects.</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 text-left">
                    <label className="text-xs font-black uppercase tracking-widest text-zinc-400">FullName</label>
                    <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-[#00F0FF]/50 focus:bg-white/10 transition-all outline-none" />
                  </div>
                  <div className="space-y-2 text-left">
                    <label className="text-xs font-black uppercase tracking-widest text-zinc-400">Email</label>
                    <input type="email" placeholder="example@email.com" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-[#00F0FF]/50 focus:bg-white/10 transition-all outline-none" />
                  </div>
                </div>
                <div className="space-y-2 text-left">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-400">Your Message</label>
                  <textarea rows={4} placeholder="What are you thinking?" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-[#00F0FF]/50 focus:bg-white/10 transition-all outline-none resize-none" />
                </div>
                <button className="w-full py-5 bg-[#00F0FF] text-black font-black text-lg rounded-2xl shadow-[0_0_30px_rgba(0,240,255,0.2)] flex items-center justify-center gap-3 active:scale-[0.98] transition-all hover:brightness-110">
                  Send Message <Send className="w-6 h-6" />
                </button>
              </form>
            </div>
          </div>

          <div className="pt-12 text-center">
            <p className="text-zinc-600 text-xs font-black tracking-[0.2em] uppercase">© 2026 TECHERON BY RAGUL • CRAFTED WITH REACT & NEXT.JS</p>
          </div>
        </div>
      </section>
    </div>
  );
}
