import React from "react";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Layer 1: Pulsating dark gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80"
        animate={{ opacity: [0.7, 0.9, 0.7], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Layer 2: Slowly moving diagonal dark overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-gray-800 via-gray-700 to-gray-800 opacity-50 mix-blend-overlay"
        animate={{ x: [-50, 50, -50], y: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Layer 3: Radial vignette darkening effect */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black to-black opacity-60"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default AnimatedBackground;
