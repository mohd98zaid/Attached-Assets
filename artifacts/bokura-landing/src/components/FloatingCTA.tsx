import React from "react";
import { motion } from "framer-motion";

export function FloatingCTA({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50 md:hidden"
    >
      <button
        onClick={onOpenModal}
        className="bg-primary text-black font-semibold px-6 py-3 rounded-full shadow-[0_0_20px_rgba(0,212,255,0.5)] hover:shadow-[0_0_30px_rgba(0,212,255,0.8)] transition-all"
      >
        Free Health Check
      </button>
    </motion.div>
  );
}