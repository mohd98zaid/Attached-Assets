import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1 liquid-glass-static rounded-full text-primary text-sm font-semibold mb-6 tracking-widest uppercase">
              About BOKURA
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
              Built for Dubai's Most <br className="hidden md:block" />
              <span className="text-gradient-cyan">Ambitious Enterprises</span>
            </h2>
            <div className="liquid-glass-static p-8 md:p-12 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-[80px]"></div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6 relative z-10">
                BOKURA Accounting and Bookkeeping L.L.C was founded on a simple premise: Dubai's rapid growth demands financial services that move at the speed of innovation.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed relative z-10">
                Operating across mainland UAE and major free zones, our team of seasoned financial experts transforms chaotic ledgers into crystal-clear insights. We act as your invisible financial engine, ensuring compliance, driving efficiency, and providing the pristine financial clarity you need to dominate your market.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}