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
            <h3 className="text-2xl font-bold text-white mb-2">BeginnerToPro+</h3>
            <p className="text-sm text-gray-400 mb-4">Professional structured bootcamps designed to elevate programming capabilities for ambitious learners.</p>
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
          <p>© {new Date().getFullYear()} SQLDB. All Rights Reserved.</p>
          <p className="mt-1">Built for Future Data Engineers</p>
        </div>
      </motion.div>
    </footer>
  );
}
