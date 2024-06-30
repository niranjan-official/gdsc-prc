'use client'
import { motion } from 'framer-motion';
import React, { ReactNode } from 'react'

const FadeUp = ({children}:{children:ReactNode}) => {
  return (
    <motion.div 
    initial={{y:20,opacity:0}}
    whileInView={{y:0,opacity:1}}
    transition={{ease:'easeInOut',duration: 0.75}}
    viewport={{once:true}}
    >
      {children}
    </motion.div>
  )
}
export default FadeUp;