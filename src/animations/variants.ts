import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

export const textReveal: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { 
    y: "0%", 
    opacity: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
  }
};

export const scaleUp: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
  }
};

export const lineReveal: Variants = {
  hidden: { width: 0 },
  visible: { 
    width: "100%", 
    transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } 
  }
};

export const pulseGlow: Variants = {
  hidden: { opacity: 0.5, scale: 0.98 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 2, 
      repeat: Infinity, 
      repeatType: "reverse", 
      ease: "easeInOut" 
    } 
  }
};
