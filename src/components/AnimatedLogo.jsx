// src/components/AnimatedLogo.jsx

import { motion } from "framer-motion";

export default function LionSVG() {
  return (
    <motion.a
      href="#home"
      className="animated-logo"
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <motion.img
        src="/images/univora-logo.png"
        alt="Univora"
        variants={{
          hidden: {
            opacity: 0,
            scale: 0.7,
            rotate: -8,
            filter: "drop-shadow(0 0 0px rgba(50,170,255,0))",
          },
          visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            filter: [
              "drop-shadow(0 0 0px rgba(50,170,255,0))",
              "drop-shadow(0 0 22px rgba(50,170,255,0.65))",
              "drop-shadow(0 0 8px rgba(50,170,255,0.25))",
            ],
            transition: {
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
              filter: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              },
            },
          },
          hover: {
            scale: 1.06,
            filter: "drop-shadow(0 0 25px rgba(75,150,255,0.9))",
            transition: {
              duration: 0.25,
            },
          },
        }}
      />

      <motion.div
        className="logo-shine"
        initial={{ x: "-120%" }}
        animate={{ x: "130%" }}
        transition={{
          delay: 1.3,
          duration: 1.1,
          repeat: Infinity,
          repeatDelay: 5,
          ease: "easeInOut",
        }}
      />
    </motion.a>
  );
}
