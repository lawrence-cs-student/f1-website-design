"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IMAGES, aeroFeatures } from "@/constants";

export default function Aerodynamics() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);

  return (
    <section ref={containerRef} className="relative w-full h-[200vh] bg-matte-black text-white">
      <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Side: Massive Sticky Image of Alfa Romeo C43 */}
        <div className="w-full md:w-1/2 h-full relative overflow-hidden hidden md:block">
          <motion.div 
            style={{ scale: imgScale, backgroundImage: `url(${IMAGES.aeroMain})` }}
            className="w-full h-full bg-cover bg-center"
          />
          {/* Gradients to blend image into the dark UI */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-matte-black via-matte-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-matte-black via-transparent to-transparent opacity-80" />
          
          {/* Tech grid overlay */}
          <div className="absolute inset-0 border-[rgba(255,255,255,0.05)] border-[1px] m-10 pointer-events-none" />
          
          {/* Viewfinder crosshairs */}
          <div className="absolute top-10 left-10 w-8 h-8 border-t-[2px] border-l-[2px] border-white pointer-events-none opacity-30" />
          <div className="absolute bottom-10 right-10 w-8 h-8 border-b-[2px] border-r-[2px] border-white pointer-events-none opacity-30" />
          
          {/* Telemetry data overlay */}
          <div className="absolute bottom-20 left-20 flex flex-col gap-2">
             <span className="font-display text-lg tracking-widest uppercase text-white shadow-black drop-shadow-lg">C43 Aerodynamics</span>
             <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-racing-red">Wind Tunnel Active</span>
          </div>
        </div>

        {/* Right Side: Scrolling Content Masked */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-10 md:px-24 z-10 bg-matte-black relative border-l border-white/5 shadow-[-20px_0_50px_rgba(0,0,0,0.8)]">
          <div className="absolute left-10 top-0 w-px h-full bg-gradient-to-b from-transparent via-racing-red/20 to-transparent hidden md:block" />
          
          <h2 className="font-display text-5xl md:text-[6rem] uppercase tracking-tighter leading-[0.8] mb-16 mt-20 md:mt-0 relative">
            <span className="absolute -left-10 md:-left-[5.5rem] top-1/2 -translate-y-1/2 w-12 h-[3px] bg-racing-red hidden md:block" />
            Airflow <br/> <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.8)" }}>Architecture</span>
          </h2>
          
          <div className="flex flex-col gap-16 relative z-10 h-full overflow-y-auto pr-4 pb-32 md:pb-0 scrollbar-hide">
            {aeroFeatures.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-20%" }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
                className="relative pl-10 group"
              >
                {/* Custom glowing indicator */}
                <div className="absolute left-0 top-3 w-3 h-3 rounded-none border border-racing-red rotate-45 group-hover:bg-racing-red transition-colors duration-500" />
                <div className="absolute left-0 top-3 w-3 h-3 rounded-none border border-racing-red rotate-45 animate-ping opacity-30" />
                
                <h3 className="font-display text-3xl md:text-4xl uppercase tracking-wider mb-4 text-white group-hover:text-racing-red transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="font-sans text-lg font-light text-metallic-silver leading-relaxed max-w-md">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
