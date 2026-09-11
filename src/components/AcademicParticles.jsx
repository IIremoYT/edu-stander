import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const particleData = [
  // Words
  { text: 'grammar', type: 'word' },
  { text: 'vocabulary', type: 'word' },
  { text: 'present tense', type: 'word' },
  { text: 'adjective', type: 'word' },
  { text: 'noun', type: 'word' },
  { text: 'verb', type: 'word' },
  { text: 'paragraph', type: 'word' },
  { text: 'sentence', type: 'word' },
  { text: 'comprehension', type: 'word' },
  { text: 'essay', type: 'word' },
  // Letters
  { text: 'A', type: 'letter' },
  { text: 'B', type: 'letter' },
  { text: 'E', type: 'letter' },
  { text: 'W', type: 'letter' },
  { text: 'G', type: 'letter' },
  // Marks
  { text: '"', type: 'mark' },
  { text: '.', type: 'mark' },
  { text: ';', type: 'mark' },
  { text: '—', type: 'mark' },
  { text: '→', type: 'mark' },
  // Labels
  { text: 'Unit 3', type: 'label' },
  { text: 'Lesson 5', type: 'label' },
  { text: 'Chapter 1', type: 'label' },
  { text: 'Ex. 2', type: 'label' },
  { text: 'Review', type: 'label' },
  { text: 'Test', type: 'label' },
];

export default function AcademicParticles({ count = 25, className = '' }) {
  const shouldReduceMotion = useReducedMotion();
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const shuffled = [...particleData].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(count, shuffled.length));
    
    const newParticles = selected.map((data, i) => {
      const layers = ['layer1', 'layer2', 'layer3'];
      const layer = layers[i % 3];
      const speed = layer === 'layer1' ? 0.3 : layer === 'layer2' ? 0.5 : 0.7;
      
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const initialRotation = (Math.random() - 0.5) * 10;
      const targetRotation = initialRotation + (Math.random() - 0.5) * 8;
      const yOffset = -(50 + Math.random() * 100) * speed;
      const xOffset = (Math.random() - 0.5) * 40;
      const duration = 20 + Math.random() * 30;
      const delay = Math.random() * 10;

      return {
        id: i,
        data,
        layer,
        left,
        top,
        initialRotation,
        targetRotation,
        yOffset,
        xOffset,
        duration,
        delay
      };
    });
    
    setParticles(newParticles);
  }, [count]);

  const layerStyles = {
    layer1: { opacity: 0.03, fontSize: '0.875rem' },
    layer2: { opacity: 0.05, fontSize: '1rem' },
    layer3: { opacity: 0.08, fontSize: '1.25rem' }
  };

  const typeStyles = {
    word: { fontFamily: 'var(--font-serif)', fontStyle: 'italic' },
    letter: { fontFamily: 'var(--font-heading)', fontWeight: 700 },
    mark: { fontFamily: 'var(--font-serif)' },
    label: { fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', border: '1px solid currentColor', padding: '2px 6px', borderRadius: '4px' }
  };

  return (
    <div 
      className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`} 
      aria-hidden="true"
    >
      {particles.map(p => {
        const style = {
          position: 'absolute',
          color: 'var(--color-hero-text)',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          userSelect: 'none',
          left: `${p.left}%`,
          top: `${p.top}%`,
          opacity: layerStyles[p.layer].opacity,
          fontSize: p.data.type === 'label' ? undefined : layerStyles[p.layer].fontSize,
          ...typeStyles[p.data.type]
        };

        return (
          <motion.span
            key={p.id}
            style={style}
            initial={{ rotate: p.initialRotation, x: 0, y: 0 }}
            animate={
              shouldReduceMotion ? {} : {
                y: p.yOffset,
                x: p.xOffset,
                rotate: p.targetRotation
              }
            }
            transition={
              shouldReduceMotion ? {} : {
                duration: p.duration,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: p.delay
              }
            }
          >
            {p.data.text}
          </motion.span>
        );
      })}
    </div>
  );
}
