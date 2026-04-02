"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Senior Full Stack Developer",
    company: "TECHERON",
    period: "2024 - Present",
    location: "Chennai, India",
    description: "Leading the development of high-performance EdTech and Management systems. Implementing scalable architectures and premium UI/UX designs.",
    tags: ["Next.js", "Flutter", "Firebase", "System Design"],
    accent: "cyan"
  },
  {
    role: "UI/UX Strategist",
    company: "Design Labs",
    period: "2022 - 2024",
    location: "Remote",
    description: "Architected user-centric digital products with a focus on conversion and accessibility. Created comprehensive design systems for 10+ startups.",
    tags: ["Figma", "Interaction Design", "User Testing"],
    accent: "purple"
  },
  {
    role: "Full Stack Developer",
    company: "Innovate AI",
    period: "2021 - 2022",
    location: "Bangalore, India",
    description: "Developed and maintained full stack applications using React and Node.js. Optimized database performance and API response times.",
    tags: ["React", "Express", "PostgreSQL", "Cloud"],
    accent: "cyan"
  }
];

export default function ExperiencePage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#050505]">
       <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-32 space-y-6"
          >
             <h1 className="text-6xl md:text-8xl font-black tracking-tighter">
                Professional <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2]">
                   Journey.
                </span>
             </h1>
             <p className="text-xl text-zinc-500 max-w-xl font-medium">A timeline of scaling systems and designing experiences for global industries.</p>
          </motion.div>

          <div className="space-y-12 relative before:absolute before:left-[1.5rem] before:top-4 before:bottom-4 before:w-[2px] before:bg-white/5">
             {EXPERIENCES.map((exp, i) => (
                <motion.div
                   key={i}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="relative pl-16 group"
                >
                   {/* Marker */}
                   <div className="absolute left-0 top-3 w-12 h-12 rounded-2xl bg-[#050505] border-2 border-white/10 flex items-center justify-center group-hover:border-[#00F0FF]/50 transition-colors z-10 transition-all group-hover:scale-110">
                      <Briefcase className="w-5 h-5 text-zinc-500 group-hover:text-[#00F0FF]" />
                   </div>

                   <div className="glass-card p-10 rounded-[3rem] border border-white/5 space-y-6 group-hover:border-white/10 transition-all">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                         <div className="space-y-2">
                            <span className="text-sm font-black uppercase tracking-[0.25em] text-[#00F0FF]">{exp.period}</span>
                            <h2 className="text-3xl font-black tracking-tight">{exp.role}</h2>
                            <p className="text-xl text-zinc-400 font-bold flex items-center gap-2">
                               {exp.company} <ExternalLink className="w-4 h-4 opacity-30" />
                            </p>
                         </div>
                         <div className="flex items-center gap-2 text-zinc-500 font-bold uppercase tracking-widest text-xs py-2 px-4 bg-white/5 rounded-full border border-white/5 h-fit">
                            <MapPin className="w-3 h-3" /> {exp.location}
                         </div>
                      </div>

                      <p className="text-zinc-400 text-lg leading-relaxed font-medium">{exp.description}</p>

                      <div className="flex flex-wrap gap-3">
                         {exp.tags.map((tag, j) => (
                            <span key={j} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-zinc-500">
                               {tag}
                            </span>
                         ))}
                      </div>
                   </div>
                </motion.div>
             ))}
          </div>
       </div>
    </div>
  );
}
