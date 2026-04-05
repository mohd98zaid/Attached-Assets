import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function WhyUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    { title: "Expert UAE Knowledge", desc: "Deep understanding of UAE mainland and free zone financial regulations." },
    { title: "Strict FTA Compliance", desc: "Always aligned with the latest Federal Tax Authority mandates." },
    { title: "Fast Turnaround", desc: "Speedy reporting and reconciliation so you never miss a deadline." },
    { title: "Dedicated Account Manager", desc: "A single point of contact who knows your business inside and out." },
    { title: "Transparent Pricing", desc: "No hidden fees. Premium service with clear, predictable costs." }
  ];

  return (
    <section id="why-us" className="py-24 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              The <span className="text-gradient-gold">Gold Standard</span> in Bookkeeping.
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We don't just crunch numbers. We provide a fortified financial foundation that allows Dubai's most ambitious businesses to scale securely.
            </p>
          </div>
          
          <div ref={ref} className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`liquid-glass p-6 ${idx === 4 ? "sm:col-span-2 text-center" : ""}`}
              >
                <h3 className="text-xl font-display font-semibold text-secondary mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}