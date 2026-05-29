'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Mail } from 'lucide-react';

const coreFeatures = [
  'Step-by-step SQL curriculum',
  'Hands-on Python projects',
  'Hands-on SQL projects',
  '24/7 Q&A Mentor Support',
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: i * 0.1, 
      duration: 0.5, 
      ease: 'easeOut' 
    },
  }),
};

const AnimatedFooterLogo = () => (
  <motion.div 
    className="relative flex items-center justify-start w-full max-w-sm cursor-pointer"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
    whileHover="hover"
  >
    <motion.svg
      viewBox="0 0 320 60"
      className="w-full h-auto"
      initial="initial"
      animate="animate"
    >
      <defs>
        <linearGradient id="logo-blue-grad">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
        <linearGradient id="logo-purple-grad" x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
        <motion.linearGradient id="light-sweep-grad" x1="-1" y1="0" x2="1" y2="0">
            <stop stopColor="#a78bfa" stopOpacity="0" />
            <stop stopColor="#a78bfa" />
            <stop offset="1" stopColor="#a78bfa" stopOpacity="0" />
        </motion.linearGradient>
        <filter id="logo-glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
      </defs>

      {/* Logo Icon Group with floating and hover effects */}
      <motion.g 
        variants={{
          initial: { y: 0 },
          hover: { y: -5 },
          animate: { y: [0, -3, 0] }
        }}
        transition={{ 
          hover: { type: 'spring', stiffness: 300 },
          animate: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
        }}
      >
        {/* Bold 'B' shape */}
        <path d="M10 50 V 10 H 25 c 12 0 12 18 0 18 H 10 M 20 28 h 8 c 15 0 15 22 0 22 H 10" stroke="url(#logo-purple-grad)" strokeWidth="5" fill="none" />
        
        {/* Integrated Arrow */}
        <motion.path d="M30 10 L 40 0 L 50 10 H 30 Z" fill="url(#logo-purple-grad)" >
            <motion.path d="M30 10 L 40 0 L 50 10 H 30 Z" fill="url(#light-sweep-grad)" initial={{x: -40}} animate={{x: 40}} transition={{repeat: Infinity, duration: 3, ease: 'linear'}}/>
        </motion.path>

        {/* Bar graph elements */}
        <rect x="15" y="36" width="4" height="9" rx="1" fill="url(#logo-blue-grad)"/>
        <rect x="22" y="32" width="4" height="13" rx="1" fill="url(#logo-blue-grad)"/>
        <rect x="29" y="38" width="4" height="7" rx="1" fill="url(#logo-blue-grad)"/>
      </motion.g>

      {/* Text with shimmer and glow */}
      <motion.g filter="url(#logo-glow)">
        <text x="65" y="40" fontFamily="Poppins, sans-serif" fontSize="26" fontWeight="bold">
          <tspan fill="url(#logo-blue-grad)">Beginner</tspan>
          <tspan dx="5" fill="url(#logo-purple-grad)">ToPro+</tspan>
        </text>
        <motion.text x="65" y="40" fontFamily="Poppins, sans-serif" fontSize="26" fontWeight="bold" fill="url(#light-sweep-grad)" initial={{x: -300}} animate={{x: 300}} transition={{repeat: Infinity, duration: 4, ease: 'linear', delay: 1}}>
            <tspan>Beginner</tspan>
            <tspan dx="5">ToPro+</tspan>
        </motion.text>
      </motion.g>
    </motion.svg>
  </motion.div>
);

export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-gray-300 pt-16 md:pt-20 pb-10 overflow-hidden tech-grid-background">
      <div className="light-streak"></div>
      <motion.div
        className="container mx-auto px-4 md:px-6 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand & Rating Section */}
          <div className="md:col-span-4">
            <AnimatedFooterLogo />
            <p className="text-sm text-gray-400 mb-4 mt-4">Professional structured bootcamps designed to elevate programming capabilities for ambitious learners.</p>
            <div className="flex items-center">
              <span className="text-yellow-400 text-lg mr-2">★★★★☆</span>
              <p className="text-sm font-semibold">4.9 Cumulative Platform Rating</p>
            </div>
          </div>

          {/* Core Features */}
          <div className="md:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {coreFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -6, scale: 1.05, boxShadow: '0 0 25px rgba(139, 92, 246, 0.5)' }}
                  className="p-3 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 text-center text-xs cursor-pointer shadow-lg"
                >
                  <CheckCircle className="w-4 h-4 mx-auto mb-2 text-purple-400" />
                  {feature}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Help & Administration */}
          <div className="md:col-span-3 bg-gray-900/50 backdrop-blur-sm border border-blue-500/20 p-4 rounded-lg shadow-lg">
            <h4 className="font-semibold text-white mb-2">Help & Administration</h4>
            <p className="text-sm mb-3">Questions? Connect immediately with our verified developer support team.</p>
            <a href="mailto:beginnertoproplus@gmail.com" className="flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                beginnertoproplus@gmail.com
            </a>
          </div>
        </div>

        {/* Subtext */}
        <div className="text-center my-10">
          <p className="text-md md:text-lg max-w-2xl mx-auto text-gray-400">
            Transform your career with industry-ready{' '}
            <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              SQL & Python
            </span>{' '}
            skills.
          </p>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-800/50 pt-8 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} BeginnerToPro+. All Rights Reserved.</p>
          <p className="mt-1">Built for Future Data Engineers</p>
        </div>
      </motion.div>
    </footer>
  );
}
