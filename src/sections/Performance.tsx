"use client";
import { motion } from "framer-motion";
import { performanceStats, IMAGES } from "@/constants";

export default function Performance() {
  return (
    <section className="relative w-full py-40 bg-dark-charcoal text-white overflow-hidden border-t border-white/5">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-racing-red/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-min">
          
          {/* Massive Header Block with Audi Background (Col Span 7) */}
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-end p-12 border border-white/10 relative overflow-hidden group min-h-[500px]">
            {/* The Audi R26 Background Image masked and darkened */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-1000 ease-out mix-blend-luminosity"
              style={{ backgroundImage: `url(${IMAGES.performanceBg})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/60 to-transparent" />
            <div className="absolute inset-0 border-[rgba(255,255,255,0.02)] border-[1px] m-4 pointer-events-none" />
            
            <h2 className="font-display text-[4rem] md:text-[6rem] tracking-tighter uppercase leading-[0.8] mb-6 relative z-10 text-white">
              Absolute <br/> <span className="text-racing-red">Domination</span>
            </h2>
            <p className="font-sans text-metallic-silver text-lg max-w-md relative z-10 font-light border-l border-racing-red pl-5 bg-matte-black/40 backdrop-blur-sm p-4">
              The hybrid powertrain pushes engineering beyond the absolute limit, optimized for brutal track presence and unmatched velocity.
            </p>
          </div>

          {/* Bento Boxes */}
          {performanceStats.map((stat, idx) => {
            const isLarge = idx === 0;
            const spanClass = isLarge ? "lg:col-span-5" : "lg:col-span-4";

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1, duration: 0.8, ease: "easeOut" }}
                className={`${spanClass} glass-panel border border-white/10 p-10 flex flex-col justify-between relative group hover:bg-white/5 transition-colors min-h-[350px] overflow-hidden`}
              >
                 <div className="absolute top-0 right-0 w-32 h-32 bg-racing-red/5 rounded-full blur-2xl group-hover:bg-racing-red/20 transition-colors duration-700" />
                 
                 <div className="flex justify-between items-start mb-12 relative z-10">
                   <span className="font-sans text-[10px] tracking-widest text-metallic-silver uppercase border border-white/20 px-3 py-1">
                     Metric.{idx + 1}
                   </span>
                 </div>
                 
                 <div className="relative z-10 mt-auto">
                   <div className="font-display text-[5rem] md:text-[6rem] tracking-tighter leading-none mb-4 text-white group-hover:text-racing-red transition-colors duration-500">
                     {stat.value}
                   </div>
                   <div className="font-sans text-xl text-white font-medium mb-3 uppercase tracking-wider">
                     {stat.label}
                   </div>
                   <div className="font-sans text-sm text-metallic-silver font-light leading-relaxed max-w-xs">
                     {stat.detail}
                   </div>
                 </div>
                 
                 {/* Cyberpunk scanning line */}
                 <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-racing-red to-transparent opacity-0 group-hover:opacity-100 group-hover:-translate-y-full transition-all duration-1000 ease-in-out" />
              </motion.div>
            )
          })}
          
        </div>
      </div>
    </section>
  );
}
