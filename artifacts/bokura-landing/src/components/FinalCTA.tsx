import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function FinalCTA({ onOpenModal }: { onOpenModal: () => void }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="liquid-glass-static relative overflow-hidden rounded-3xl p-10 md:p-20 text-center"
        >
          {/* Intense glow effects */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/20 blur-[60px] pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Ready to Transform Your Business Finances?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Partner with BOKURA today and experience the precision, security, and strategic clarity your business deserves.
            </p>
            <button
              onClick={onOpenModal}
              className="bg-primary text-black px-10 py-5 rounded-full font-bold text-xl shadow-[0_0_30px_rgba(0,212,255,0.6)] hover:shadow-[0_0_50px_rgba(0,212,255,0.9)] hover:bg-primary/90 transition-all transform hover:scale-105"
            >
              Inquire Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}