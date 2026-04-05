import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What accounting and bookkeeping services do you provide?",
    a: "We offer a full suite of services including daily bookkeeping, bank reconciliations, VAT filing, corporate tax registration and filing, financial reporting (P&L, balance sheets, cash flow), WPS-compliant payroll processing, inventory control, and business consultation."
  },
  {
    q: "Do you handle Corporate Tax registration and filing?",
    a: "Yes. We provide end-to-end corporate tax support — including registration with the Federal Tax Authority, return preparation and filing, advisory on eligible exemptions, and ongoing compliance monitoring."
  },
  {
    q: "How do you handle VAT filing and FTA compliance?",
    a: "We compile all taxable transactions, calculate your output and input VAT, and submit the return directly to the FTA portal before the deadline — keeping you fully compliant and penalty-free."
  },
  {
    q: "Do you work with free zone companies and mainland LLCs?",
    a: "Absolutely. We serve businesses across all major UAE Free Zones (DMCC, JAFZA, DDA, and more) as well as mainland LLCs, with tailored reporting for each entity type."
  },
  {
    q: "What financial reports can you prepare for banks or investors?",
    a: "We prepare Profit & Loss statements, Balance Sheets, Cash Flow reports, and customised project reports — formatted and presentation-ready for banks, investors, or internal management."
  },
  {
    q: "Where are you located and how can I book a meeting?",
    a: "Our office is conveniently located in Deira, Dubai — easily accessible for clients across Dubai and the Northern Emirates. Meetings are available at your convenience and can be scheduled in-person or remotely, based on your preferred time."
  },
  {
    q: "Do you serve clients outside Dubai?",
    a: "Yes. We work with businesses across the entire UAE and the wider GCC region, including remote and cloud-based engagements for clients who prefer online management."
  },
  {
    q: "What is your pricing model?",
    a: "We offer transparent, flat-rate monthly packages based on your business size and transaction volume. No hidden fees, no surprise hourly charges — just clear, predictable costs."
  },
];

export function FAQ() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="faq" className="py-16 sm:py-24 relative z-10">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-3xl">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest mb-3">FAQ</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Frequently Asked <span className="text-gradient-cyan">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="liquid-glass p-4 sm:p-6 md:p-8"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-primary/15 last:border-0">
                <AccordionTrigger
                  className="text-left text-white hover:text-primary transition-colors py-4 sm:py-5 font-medium text-sm sm:text-base"
                  data-testid={`faq-trigger-${idx}`}
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-sm sm:text-base leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
