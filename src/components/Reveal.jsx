import React from 'react';
import { motion } from 'framer-motion';

export default function Reveal({ 
  children, 
  className = '', 
  delay = 0, 
  y = 24, 
  duration = 0.6,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: duration, delay: delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
