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
  duration = 0.18,
}: MotionDivProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const reduceMotion = useReducedMotion();

  const variants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : animation === 'slide-in' ? 24 : animation === 'fade-in-up' ? 12 : 0,
      scale: animation === 'zoom-in' && !reduceMotion ? 0.98 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{
        duration: reduceMotion ? 0 : Math.min(duration, 0.2),
        delay: reduceMotion ? 0 : Math.min(delay, 0.06),
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
}
