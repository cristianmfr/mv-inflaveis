'use client'
import { useEffect } from 'react'
import { stagger, useAnimate } from 'framer-motion'
import * as motion from 'framer-motion/client'
import { cn } from '@/lib/utils'

export const TextGenerateEffect = () => {
   return (
      <motion.div
         initial={{ opacity: 0.0, y: 40 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
         }}
         className='relative flex flex-col gap-4 items-center justify-center px-4'
      >
         <div className='text-xl md:text-4xl font-bold dark:text-white text-center'>
            Conheça nossos produtos
         </div>
      </motion.div>
   )
}
