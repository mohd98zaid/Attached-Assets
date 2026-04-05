import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    title: "Daily Financial Recording",
    description: "Meticulous day-to-day bookkeeping ensuring your records are always accurate and up-to-date.",
    icon: "📊"
  },
  {
    title: "Bank Reconciliation",
    description: "Flawless matching of your records with bank statements to prevent discrepancies.",
    icon: "🏦"
  },
  {
    title: "Audit-Ready Financial Reporting",
    description: "Comprehensive, transparent reports designed to pass any stringent audit with flying colors.",
    icon: "📑"
  },
  {
    title: "Payroll Management",
    description: "Accurate and punctual payroll processing compliant with UAE labor laws.",
    icon: "👥"
  },
  {
    title: "Financial Analysis & Insights",
    description: "Deep data-driven insights to guide your strategic decisions and scale your business.",
    icon: "📈"
  },
  {
    title: "UAE VAT & GCC Tax Compliance",
    description: "Full FTA compliance, precise VAT filing, and expert tax advisory for regional peace of mind.",
    icon: "🛡️"
  }
];

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-24 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Premium Financial <span className="text-gradient-cyan">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Elevating your business finances with precision, compliance, and strategic foresight.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="liquid-glass p-8 flex flex-col h-full"
            >
              <div className="text-4xl mb-4 bg-black/50 w-16 h-16 flex items-center justify-center rounded-2xl border border-primary/20 shadow-[0_0_15px_rgba(0,212,255,0.1)]">
                {service.icon}
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed flex-grow">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}