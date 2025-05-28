'use client'
import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

interface SlowFadeProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const SlowFade = ({ children, delay = 0, className }: SlowFadeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ 
        opacity: 1, 
        scale: 1 
      }}
      transition={{
        type: 'tween',
        duration: 2,
        ease: 'easeInOut',
        delay: delay,
        delayChildren: delay,
        staggerChildren: 0.3,
      }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SlowFade;
