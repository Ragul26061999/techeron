"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Smartphone, Globe, Layers, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const PROJECTS = [
  {
    title: "NEET MentorX",
    subtitle: "Mobile Learning Application",
    description: "A high-performance mobile app providing organized study materials, test series, and advanced performance analytics for NEET aspirants.",
    tags: ["Flutter", "Firebase", "REST APIs", "Figma"],
    image: "/images/neet_mentorx.png",
    accent: "cyan"
  },
  {
    title: "School Admin System",
    subtitle: "Centralized Admin Platform",
    description: "A centralized web system automating school management workflows to boost institutional efficiency. Handles student records, attendance, and reporting.",
    tags: ["Web Development", "Firebase", "APIs", "UI/UX Design"],
    image: "/images/school_admin.png",
    accent: "purple"
  },
  {
    title: "Hospital Management",
    subtitle: "Digital Healthcare Workflow",
    description: "A comprehensive digital ecosystem streamlining Outpatient (OP), Pharmacy, and Laboratory operations with real-time workflow sync.",
    tags: ["Full Stack Web", "Mobile Apps", "Firebase", "API Integration"],
    image: "/images/hospital_mgmt.png",
    accent: "cyan"
  },
  {
    title: "Scalable LMS",
    subtitle: "Scalable Education Platform",
    description: "A robust LMS engineered for seamless content delivery, dynamic assessments, and deep data tracking for large institutions.",
    tags: ["Web & Mobile", "Firebase", "UI/UX Strategy"],
    image: "/images/lms_platform.png",
    accent: "purple"
  }
];

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#050505]">
       <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-32 space-y-6"
          >
             <h1 className="text-6xl md:text-8xl font-black tracking-tighter">
                Crafting <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2]">
                   Excellence.
                </span>
             </h1>
             <p className="text-xl text-zinc-500 max-w-xl font-medium tracking-wide leading-relaxed">
                A selection of high-performance mobile and web applications designed to solve complex institutional challenges.
             </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {PROJECTS.map((project, i) => (
                <motion.div
                   key={i}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1, duration: 0.6 }}
                   className="glass-card flex flex-col p-8 rounded-[3rem] group border-white/5 hover:border-white/10 transition-all cursor-default"
                >
                   <div className="relative aspect-video rounded-[2.2rem] overflow-hidden mb-10 transform-gpu group-hover:scale-[1.02] transition-transform duration-700">
                      <div className={cn(
                        "absolute -inset-2 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-1000",
                        project.accent === "cyan" ? "bg-[#00F0FF]" : "bg-[#8A2BE2]"
                      )} />
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                   </div>

                   <div className="space-y-6 flex-grow">
                      <div className="flex justify-between items-start">
                         <div className="space-y-2">
                            <span className={cn(
                              "text-xs font-black uppercase tracking-[0.3em]",
                              project.accent === "cyan" ? "text-[#00F0FF]" : "text-[#8A2BE2]"
                            )}>{project.subtitle}</span>
                            <h2 className="text-4xl font-black tracking-tight">{project.title}</h2>
                         </div>
                         <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                            <ArrowUpRight className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />
                         </div>
                      </div>
                      <p className="text-zinc-400 font-medium text-lg leading-relaxed">{project.description}</p>
                   </div>

                   <div className="pt-10 flex flex-wrap gap-3">
                      {project.tags.map((tag, j) => (
                         <span key={j} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-zinc-500">
                            {tag}
                         </span>
                      ))}
                   </div>
                </motion.div>
             ))}
          </div>
       </div>
    </div>
  );
}
