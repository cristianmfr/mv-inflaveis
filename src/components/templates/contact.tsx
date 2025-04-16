'use client'
import React from 'react'
import { GlareCard } from '../ui/glare-card'

export function Contact() {
   return (
      <div className='flex items-center justify-center flex-col'>
         <GlareCard className='flex flex-col items-center justify-center'>
            <div className='text-center'>
               <p>Rua Luiz Gonzaga Faria, Qd. 29 Lt. 09</p>
               <p>Parque Trindade | Aparecida de Goiânia - GO</p>
               <p>CEP 74921-227</p>
               <p>contato@mvinflaveis.com.br</p>
               <p>(62) 4103-3521</p>
            </div>
         </GlareCard>
      </div>
   )
}
