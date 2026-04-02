"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 mb-20"
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter">
              Let&apos;s build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2]">
                something epic.
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl font-medium leading-relaxed">
              Have a big idea? I&apos;m currently available for full-time roles and freelance opportunities. 
              Let&apos;s collaborate to turn your vision into a high-performance reality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="space-y-12">
                <div className="flex gap-6">
                   <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00F0FF]">
                      <Mail className="w-7 h-7" />
                   </div>
                   <div className="space-y-1">
                      <h3 className="text-sm font-black uppercase tracking-widest text-zinc-500">Email Me</h3>
                      <p className="text-xl font-bold">hello@techeron.dev</p>
                   </div>
                </div>
                <div className="flex gap-6">
                   <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#8A2BE2]">
                      <Phone className="w-7 h-7" />
                   </div>
                   <div className="space-y-1">
                      <h3 className="text-sm font-black uppercase tracking-widest text-zinc-500">Call Me</h3>
                      <p className="text-xl font-bold">+91 98765 43210</p>
                   </div>
                </div>
                <div className="flex gap-6">
                   <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                      <MapPin className="w-7 h-7" />
                   </div>
                   <div className="space-y-1">
                      <h3 className="text-sm font-black uppercase tracking-widest text-zinc-500">Location</h3>
                      <p className="text-xl font-bold">Chennai, India</p>
                   </div>
                </div>
             </div>

             <div className="glass-card p-10 rounded-[3rem] space-y-8">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-zinc-500">Your Identity</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-[#00F0FF]/50 transition-all font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-zinc-500">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-[#00F0FF]/50 transition-all font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-zinc-500">Project Concept</label>
                    <textarea rows={4} placeholder="Describe your vision..." className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-[#00F0FF]/50 transition-all font-medium resize-none" />
                  </div>
                  <button className="w-full py-5 bg-[#00F0FF] text-black font-black text-lg rounded-2xl flex items-center justify-center gap-3 active:scale-[0.98] transition-all">
                    Initialize Contact <Send className="w-6 h-6" />
                  </button>
                </form>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
