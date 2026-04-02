"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone, Layers, Cpu, Globe } from "lucide-react";

const SOCIALS = [
  { icon: <Layers className="w-5 h-5" />, href: "#", color: "hover:text-[#00F0FF]" },
  { icon: <Cpu className="w-5 h-5" />, href: "#", color: "hover:text-white" },
  { icon: <Globe className="w-5 h-5" />, href: "#", color: "hover:text-[#8A2BE2]" },
];

export function Footer() {
  return (
    <footer className="relative pt-32 pb-12 overflow-hidden border-t border-white/5 bg-[#050505]">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#8A2BE2]/5 rounded-full blur-[160px] -z-10 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#00F0FF]/5 rounded-full blur-[140px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-24">
          
          {/* Left Side: Address & Brand */}
          <div className="space-y-12">
            <div className="space-y-6">
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
                <div className="space-y-1">
                  <h4 className="text-sm font-black uppercase tracking-widest text-zinc-300">Office Location</h4>
                  <p className="text-lg text-zinc-500 font-medium">123 Tech Avenue, Chennai, India 600001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#8A2BE2]">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-black uppercase tracking-widest text-zinc-300">Email Address</h4>
                  <p className="text-lg text-zinc-500 font-medium">hello@techeron.dev</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {SOCIALS.map((social, i) => (
                  <Link key={i} href={social.href} className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500 ${social.color} transition-all hover:bg-white/10 hover:-translate-y-1`}>
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="glass-card p-10 rounded-[3rem] border border-white/5 space-y-10">
            <div className="space-y-4">
              <h3 className="text-4xl font-black tracking-tight">Let's build<br />something epic.</h3>
              <p className="text-zinc-500 font-medium tracking-wide leading-relaxed">Ready to transform your vision? We're available for new projects.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-400">FullName</label>
                  <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-[#00F0FF]/50 focus:bg-white/10 transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-400">Email</label>
                  <input type="email" placeholder="example@email.com" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-[#00F0FF]/50 focus:bg-white/10 transition-all outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-zinc-400">Your Message</label>
                <textarea rows={4} placeholder="What are you thinking?" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-[#00F0FF]/50 focus:bg-white/10 transition-all outline-none resize-none" />
              </div>
              <button 
                className="w-full py-5 bg-[#00F0FF] text-black font-black text-lg rounded-2xl shadow-[0_0_30px_rgba(0,240,255,0.2)] flex items-center justify-center gap-3 active:scale-[0.98] transition-all hover:brightness-110"
              >
                Send Message <Send className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-xs font-black tracking-[0.2em] uppercase">© 2026 TECHERON LTD</p>
          <div className="flex gap-8">
            <Link href="#" className="text-xs font-black tracking-[0.2em] uppercase text-zinc-600 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs font-black tracking-[0.2em] uppercase text-zinc-600 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
