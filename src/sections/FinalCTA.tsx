"use client";
import { motion } from "framer-motion";
import { IMAGES } from "@/constants";

export default function FinalCTA() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-dark-charcoal border-t border-white/5">
      
      {/* Alfa Romeo C42 Atmospheric Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity scale-105 pointer-events-none"
        style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
      />
      <div className="absolute inset-0 bg-matte-black/60 pointer-events-none" />

      {/* Dynamic Radar Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />

      {/* Red Core Pulse Element */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-racing-red blur-[140px] mix-blend-screen pointer-events-none"
      />

      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-5xl">
        
        {/* Ignition Button Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-10 p-2 rounded-full border border-white/10 glass-panel shadow-[0_0_50px_rgba(187,10,48,0.2)]"
        >
          <div className="w-24 h-24 rounded-full border border-racing-red/40 flex items-center justify-center animate-pulse relative">
            <div className="absolute inset-0 bg-racing-red/20 rounded-full blur-md" />
            <div className="w-16 h-16 rounded-full bg-racing-red flex items-center justify-center shadow-[0_0_20px_rgba(187,10,48,1)] z-10">
              <span className="font-display text-white text-lg uppercase tracking-wider">Start</span>
            </div>
          </div>
        </motion.div>

        <h2 className="font-display text-6xl md:text-[9rem] leading-[0.8] tracking-tighter uppercase mb-6 drop-shadow-2xl text-white mix-blend-overlay">
          The Grid <br/> Awaits
        </h2>
        
        <p className="font-sans text-sm md:text-xl text-metallic-silver font-light tracking-[0.4em] uppercase mb-16 max-w-2xl border-b border-white/10 pb-6">
          Not built for spectators. Built for drivers.
        </p>

        {/* Complex CTA Button */}
        <div className="group relative cursor-pointer w-full max-w-[300px]">
          <div className="absolute -inset-1 bg-gradient-to-r from-racing-red via-[#ff4d4d] to-racing-red rounded-none blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-300" />
          <button className="relative w-full px-10 py-5 bg-matte-black border border-white/20 text-white font-display text-xl uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-matte-black">
            Configure
          </button>
        </div>
      </div>
    </section>
  );
}
