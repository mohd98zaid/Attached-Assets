import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function SectionReveal({ children, delay = 0, className = "" }: SectionRevealProps) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        initial={{
          opacity: 0,
          y: 64,
          scale: 0.97,
          filter: "blur(14px)",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
        }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: 0.85,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Scan beam that sweeps across on reveal */}
        <motion.div
          initial={{ x: "-100%", opacity: 0.9 }}
          whileInView={{ x: "200%", opacity: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.9,
            delay: delay + 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-2xl"
          style={{ mixBlendMode: "screen" }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              width: "80px",
              background:
                "linear-gradient(90deg, transparent 0%, rgba(0,212,255,0.25) 40%, rgba(0,240,255,0.5) 50%, rgba(0,212,255,0.25) 60%, transparent 100%)",
              filter: "blur(6px)",
            }}
          />
        </motion.div>

        {children}
      </motion.div>

      {/* Glowing top edge that flashes on entry */}
      <motion.div
        initial={{ scaleX: 0, opacity: 1 }}
        whileInView={{ scaleX: 1, opacity: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: 0.7,
          delay: delay + 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute top-0 left-0 right-0 origin-left pointer-events-none z-10"
        style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, #00d4ff, #00f0ff, #d4a017, transparent)",
          boxShadow: "0 0 12px rgba(0,212,255,0.8), 0 0 30px rgba(0,212,255,0.4)",
        }}
      />
    </div>
  );
}
