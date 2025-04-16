'use client'
import { useState } from 'react'
import { Lens } from './ui/lens'
import Image from 'next/image'
import * as motion from 'framer-motion/client'

interface LensCardProps {
   imageUrl: string
   title: string
   description: string
}

export function LensCard({ imageUrl, title, description }: LensCardProps) {
   const [hovering, setHovering] = useState(false)

   return (
      <div>
         <div className='w-full relative rounded-3xl overflow-hidden max-w-md mx-auto bg-[#37061B]/40 border border-primary/30 p-8 my-10'>
            <div className='relative z-10'>
               <Lens hovering={hovering} setHovering={setHovering}>
                  <Image
                     src={imageUrl}
                     alt='image'
                     width={500}
                     height={500}
                     className='rounded-2xl'
                  />
               </Lens>
               <motion.div
                  animate={{
                     filter: hovering ? 'blur(2px)' : 'blur(0px)',
                  }}
                  className='py-4 relative z-20'
               >
                  <h2 className='text-white text-2xl text-left font-bold'>
                     {title}
                  </h2>
                  <p className='text-neutral-200 text-left mt-2 text-sm'>
                     {description}
                  </p>
               </motion.div>
            </div>
         </div>
      </div>
   )
}
