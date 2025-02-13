"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = ["INTRODUCTION", "PROJECTS", "GALLERIES", "JOURNEY", "CONTACT ME"];

const highlightVariants = {
  initial: { width: "0%" },
  animate: { width: "100%" },
  exit: { width: "0%" },
};

export default function SlantedMenu() {
  const [active, setActive] = useState("PROJECTS");

  return (
    <div className="relative flex flex-col items-start gap-3 p-10">
      {menuItems.map((item, index) => (
        <motion.div
          key={item}
          className="relative text-6xl font-extrabold uppercase tracking-wide cursor-pointer"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          onClick={() => setActive(item)}
        >
          {/* Highlight dengan AnimatePresence */}
          <AnimatePresence mode="wait">
            {active === item && (
              <motion.div
                key="highlight"
                className="absolute top-0 left-0 h-full bg-black rotate-3"
                variants={highlightVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.15, ease: "easeInOut" }}
                style={{
                  clipPath: "polygon(0% 90%, 85% 0%, 100% 100%, 0% 90%)",
                }}
              />
            )}
          </AnimatePresence>

          {/* Text dengan blend mode */}
          <motion.div
            className="relative text-white"
            style={{ mixBlendMode: "difference" }}
          >
            {item}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
