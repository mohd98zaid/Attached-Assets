import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-[9999] origin-left"
        style={{
          scaleX,
          height: "2px",
          background:
            "linear-gradient(90deg, #00d4ff 0%, #00f0ff 50%, #d4a017 100%)",
          boxShadow:
            "0 0 8px rgba(0,212,255,0.9), 0 0 20px rgba(0,212,255,0.5), 0 0 40px rgba(0,212,255,0.2)",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 right-0 z-[9998] origin-left pointer-events-none"
        style={{
          scaleX,
          height: "6px",
          background:
            "linear-gradient(90deg, rgba(0,212,255,0.15) 0%, rgba(0,240,255,0.08) 100%)",
          filter: "blur(4px)",
        }}
      />
    </>
  );
}
