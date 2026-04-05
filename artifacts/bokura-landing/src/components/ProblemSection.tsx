import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function ProblemSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const problems = [
    "VAT Headaches & FTA Penalties",
    "Confusing Free Zone Reporting",
    "Messy Bank Reconciliations",
    "Missed Filing Deadlines",
    "Lack of Clear Financial Visibility"
  ];

  return (
    <section className="py-24 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="liquid-glass-static border-red-500/20 p-8 md:p-12 relative">
          {/* Subtle red glow for the "problem" vibe */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent pointer-events-none rounded-2xl"></div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight"
              >
                Is Your Business <br/>
                <span className="text-red-400 drop-shadow-[0_0_10px_rgba(248,113,113,0.5)]">Losing Money</span> in the Dark?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-300 text-lg mb-8 leading-relaxed"
              >
                Dubai's regulatory landscape is shifting rapidly. Corporate Tax, VAT complexities, and stringent FTA requirements mean that sloppy bookkeeping isn't just an inconvenience anymore — it's a massive financial risk.
              </motion.p>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="space-y-4">
                {problems.map((problem, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                    className="flex items-center gap-4 bg-black/40 p-4 rounded-xl border border-red-500/10"
                  >
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/30 text-red-400 shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </div>
                    <span className="text-gray-200 font-medium">{problem}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}