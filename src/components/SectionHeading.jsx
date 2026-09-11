import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle, centered = false }) {
  const containerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1, 
      transition: { duration: 0.6, ease: 'easeOut', delay: 0.3 }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-12%" }}
      className={`mb-12 ${centered ? 'text-center flex flex-col items-center' : ''}`}
    >
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-1">
        {title}
      </h2>
      <p className="text-muted-foreground font-serif italic mb-4" dir="ltr">
        {subtitle}
      </p>
      <motion.div 
        variants={lineVariants}
        className="w-16 h-1 bg-accent rounded-full heading-underline relative origin-left"
        style={{ transformOrigin: centered ? 'center' : 'left' }}
      ></motion.div>
    </motion.div>
  );
}
