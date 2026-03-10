'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface MotionDivProps {
  children: React.ReactNode;
  className?: string;
  animation: 'slide-in' | 'fade-in' | 'zoom-in';
  delay?: number;
  duration?: number;
}

export default function MotionDiv({
  children,
  className,
  animation,
  delay = 0.2,
  duration = 0.5,
}: MotionDivProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: {
      opacity: 0,
      y: animation === 'slide-in' ? 50 : 0,
      x: 0,
      scale: animation === 'zoom-in' ? 0.8 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
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
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}
