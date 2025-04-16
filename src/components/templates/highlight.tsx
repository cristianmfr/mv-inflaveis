import { DollarSign, LineChart, Zap } from 'lucide-react'
import { Button } from '../animations/moving-border'

export function Highlight() {
   return (
      <div className='mt-20 -mb-10'>
         <Button
            borderRadius='2rem'
            className='bg-white dark:bg-black/20 text-black dark:text-white border-neutral-200 dark:border-primary/20'
         >
            <div className='flex flex-wrap gap-y-4 justify-center gap-x-16 px-8'>
               <div className='flex items-center gap-2 justify-center'>
                  <Zap className='w-5 h-5 text-white' />
                  <span className='text-white'>
                     Entrega em todo o território nacional
                  </span>
               </div>
               <div className='flex items-center gap-2 justify-center'>
                  <LineChart className='w-5 h-5 text-white' />
                  <span className='text-white'>Suporte em todo o processo</span>
               </div>
               <div className='flex items-center gap-2 justify-center'>
                  <DollarSign className='w-5 h-5 text-white' />
                  <span className='text-white'>
                     Condições especiais de pagamento
                  </span>
               </div>
            </div>
         </Button>
      </div>
   )
}
