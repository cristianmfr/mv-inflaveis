'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import { CtaButton } from '@/components/cta-button'

export function Hero() {
   return (
      <section className='flex items-center justify-center pt-40 bg-gradient-to-b from-background via-70% via-primary/20 w-full'>
         <div className='container flex flex-col items-center gap-8 sm:gap-10'>
            <motion.h1
               animate={{ y: 0, opacity: 1 }}
               initial={{ y: 10, opacity: 0 }}
               transition={{ delay: 0, duration: 0.4 }}
               className='text-center font-heading text-4xl sm:text-5xl tracking-tight lg:text-6xl text-balance font-bold max-w-[700px]'
            >
               Desbloqueie o potencial do&nbsp;
               <span className='text-primary bg-clip-text bg-gradient-to-br to-primary from-secondary'>
                  seu espaço!
               </span>
            </motion.h1>
            <motion.p
               animate={{ y: 0, opacity: 1 }}
               initial={{ y: 10, opacity: 0 }}
               transition={{ delay: 0.2, duration: 0.4 }}
               className='max-w-[700px] text-center text-lg text-muted-foreground sm:text-xl'
            >
               Produtos exclusivos que transformam qualquer espaço. Peça seu
               orçamento personalizado agora e destaque-se da concorrência!
            </motion.p>
            <motion.div
               animate={{ y: 0.4, opacity: 1 }}
               initial={{ y: 10, opacity: 0 }}
               transition={{ delay: 0.4, duration: 0.4 }}
               className='flex'
            >
               <CtaButton href='#' text='Veja o nosso simulador' />
            </motion.div>
            <motion.div
               animate={{ y: 0.4, opacity: 1 }}
               initial={{ y: 10, opacity: 0 }}
               transition={{ delay: 0.6, duration: 0.4 }}
               className='flex items-center justify-center rounded-lg overflow-hidden max-h-[700px]'
            >
               <Image
                  alt='SaaS Dashboard'
                  src='/placeholder.svg'
                  width={1100}
                  height={698}
                  priority
               />
            </motion.div>
         </div>
      </section>
   )
}
