'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedHeadlinePremiumProps {
  text: string;
  className?: string;
}

export default function AnimatedHeadlinePremium({ text, className }: AnimatedHeadlinePremiumProps) {
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <motion.h1
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, index) => {
        const isSpecial = word === 'SQL' || word === '&' || word === 'Python';
        return (
          <motion.span key={index} variants={wordVariants} className={`inline-block mr-2 ${isSpecial ? 'neon-shine-text' : 'gradient-wave-text'}`}>
            {word}
          </motion.span>
        );
      })}
    </motion.h1>
  );
}
