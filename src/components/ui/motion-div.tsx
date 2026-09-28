'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

interface MotionDivProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'slide-in' | 'fade-in' | 'fade-in-up' | 'zoom-in';
  delay?: number;
  duration?: number;
}

export default function MotionDiv({
  children,
  className,
  animation = 'fade-in-up',
  delay = 0,
  duration = 0.6,
}: MotionDivProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const reduceMotion = useReducedMotion();

  const variants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : animation === 'slide-in' ? 40 : animation === 'fade-in-up' ? 24 : 0,
      scale: animation === 'zoom-in' && !reduceMotion ? 0.94 : 1,
      filter: reduceMotion ? 'blur(0px)' : 'blur(8px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transitionEnd: { filter: 'none' },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
