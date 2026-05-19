"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { IMAGES } from "@/constants";
import { staggerContainer, fadeInUp, textReveal } from "@/animations/variants";

export default function Hero() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacityText = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative w-full h-screen flex justify-center items-center overflow-hidden bg-matte-black text-white">
      
      {/* Immersive Parallax Background */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 w-full h-[120%] -top-[10%] z-0"
      >
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.heroCar})` }}
        />
      </motion.div>

      {/* Cinematic Gradient Overlays for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/40 to-matte-black/80 z-10" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay z-10 pointer-events-none" />

      {/* Elegant Typography Layer */}
      <motion.div 
        style={{ opacity: opacityText }}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-20 flex flex-col items-center text-center px-6 max-w-6xl mt-12"
      >
        <motion.div variants={fadeInUp} className="mb-8 flex items-center gap-4">
          <div className="w-12 h-[1px] bg-racing-red" />
          <span className="font-sans text-xs md:text-sm uppercase tracking-[0.5em] text-racing-red font-semibold">
            Scuderia Ferrari
          </span>
          <div className="w-12 h-[1px] bg-racing-red" />
        </motion.div>

        <div className="overflow-hidden mb-8">
          <motion.h1 
            variants={textReveal}
            className="font-display text-7xl md:text-[8rem] lg:text-[11rem] leading-[0.8] tracking-tighter uppercase text-white drop-shadow-2xl"
          >
            SF-25 <br/> <span className="text-transparent" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.9)" }}>Dominance</span>
          </motion.h1>
        </div>

        <motion.p 
          variants={fadeInUp}
          className="font-sans text-lg md:text-2xl text-metallic-silver max-w-2xl font-light tracking-wide mb-14"
        >
          A machine sculpted for precision, velocity, and absolute track supremacy. Born for the last lap.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6">
           <button className="px-12 py-5 bg-racing-red text-white font-display text-xl uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-matte-black shadow-[0_0_30px_rgba(187,10,48,0.5)] hover:shadow-none">
             Enter The Grid
           </button>
           <button className="px-12 py-5 glass-panel border border-white/20 text-white font-display text-xl uppercase tracking-widest transition-all duration-300 hover:bg-white/10">
             Telemetry
           </button>
        </motion.div>
      </motion.div>

      {/* Modern Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 z-20 flex flex-col items-center gap-4"
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-metallic-silver">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-racing-red to-transparent" />
      </motion.div>
      
    </section>
  );
}
