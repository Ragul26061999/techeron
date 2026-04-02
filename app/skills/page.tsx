"use client";

import { motion } from "framer-motion";
import { Layers, MonitorPlay, Database, Smartphone, Code2, Cpu } from "lucide-react";

const SKILLS_LIST = [
  { name: "Frontend & Web", icon: <Layers className="w-10 h-10" />, items: ["React/Next.js", "Tailwind CSS", "SEO Optimization", "Web Performance"], accent: "cyan" },
  { name: "Mobile Ecosystem", icon: <Smartphone className="w-10 h-10" />, items: ["Flutter/Dart", "Firebase", "iOS/Android", "Mobile Strategy"], accent: "purple" },
  { name: "Backend & AI", icon: <Database className="w-10 h-10" />, items: ["Node.js", "REST APIs", "AI Agent Engineering", "Model Integration"], accent: "cyan" },
  { name: "Design & UX", icon: <MonitorPlay className="w-10 h-10" />, items: ["Product Design", "Figma", "Design Systems", "Prototypes"], accent: "purple" },
  { name: "DevOps & Cloud", icon: <Cpu className="w-10 h-10" />, items: ["CI/CD Pipelines", "System Architecture", "Security", "Infrastructure"], accent: "cyan" },
  { name: "Platforms", icon: <Code2 className="w-10 h-10" />, items: ["Desktop Apps", "Full Stack Web", "Docker", "Cross-Platform"], accent: "purple" }
];

export default function SkillsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#050505]">
       <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-32 space-y-6"
          >
             <h1 className="text-6xl md:text-8xl font-black tracking-tighter">
                The Engine<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#8A2BE2] to-[#00F0FF] animate-gradient">
                   Behind Experiences.
                </span>
             </h1>
             <p className="text-xl text-zinc-500 max-w-xl mx-auto font-medium">A specialized tech stack for building high-performance, scalable, and secure digital products.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {SKILLS_LIST.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="glass-card p-10 rounded-[2.5rem] border border-white/5 space-y-12 transition-all hover:border-[#00F0FF]/30 group"
                >
                   <div className="flex justify-between items-start">
                      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00F0FF] group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,240,255,0.05)]">
                         {skill.icon}
                      </div>
                      <span className="text-3xl font-black text-white/5 group-hover:text-[#00F0FF]/10 transition-colors">0{i+1}</span>
                   </div>
                   <div className="space-y-6">
                      <h2 className="text-4xl font-black tracking-tight">{skill.name}</h2>
                      <div className="flex flex-wrap gap-3">
                         {skill.items.map((item, index) => (
                            <span key={index} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-zinc-400">
                               {item}
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
