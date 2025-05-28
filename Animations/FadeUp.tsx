'use client'
import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

const FadeUp = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0, scale: 0.9 }}
      whileInView={{ 
        y: [40, -10, 0], 
        opacity: 1, 
        scale: 1 
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 30,
        duration: 3,
        delayChildren: 0.5,
        staggerChildren: 0.3,
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
