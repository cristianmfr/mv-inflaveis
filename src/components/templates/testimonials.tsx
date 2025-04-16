'use client'

import React from 'react'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'

export function Testimonials() {
   return (
      <div className='h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-transparent dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden'>
         <InfiniteMovingCards
            items={testimonials}
            direction='right'
            speed='slow'
         />
      </div>
   )
}

const testimonials = [
   {
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Charles Dickens',
      title: 'A Tale of Two Cities',
   },
   {
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'William Shakespeare',
      title: 'Hamlet',
   },
   {
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Edgar Allan Poe',
      title: 'A Dream Within a Dream',
   },
   {
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Jane Austen',
      title: 'Pride and Prejudice',
   },
   {
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Herman Melville',
      title: 'Moby-Dick',
   },
]
