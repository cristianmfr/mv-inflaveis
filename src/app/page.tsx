import { LensCard } from '@/components/lens'
import { Contact } from '@/components/templates/contact'
import { Hero } from '@/components/templates/hero'
import { Highlight } from '@/components/templates/highlight'
import { NavHeader } from '@/components/templates/nav-header'
import { Products } from '@/components/templates/products'
import { Testimonials } from '@/components/templates/testimonials'

export default function Home() {
   return (
      <main className='flex min-h-screen w-full flex-col items-center justify-between py-4'>
         <NavHeader />
         <Hero />
         <Highlight />
         <Testimonials />
         <Products />
         <Contact />
      </main>
   )
}
