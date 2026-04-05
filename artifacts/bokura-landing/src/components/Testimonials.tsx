import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    quote: "BOKURA entirely transformed our financial operations. They navigated the FTA requirements seamlessly, giving us total peace of mind.",
    name: "Ahmed Al Mansoori",
    role: "CEO, Mainland LLC"
  },
  {
    quote: "As a fast-growing tech startup, we needed a firm that understood modern business. BOKURA acts like our in-house CFO.",
    name: "Sarah Jenkins",
    role: "Founder, Tech FZCO"
  },
  {
    quote: "Their precision in reconciling our multi-currency accounts is unmatched. The finest bookkeeping service in the GCC, hands down.",
    name: "Tariq Rashid",
    role: "Director, Retail Group"
  }
];

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="testimonials" className="py-24 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Trusted by <span className="text-gradient-cyan">Industry Leaders</span>
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="liquid-glass p-8 flex flex-col justify-between"
            >
              <div>
                <div className="text-primary mb-6">
                  <svg className="w-10 h-10 opacity-50" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed italic mb-8">
                  "{test.quote}"
                </p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <h4 className="text-white font-semibold">{test.name}</h4>
                <p className="text-primary text-sm">{test.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}