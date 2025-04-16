'use client'

import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'

import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'

const labelVariants = cva('', {
  variants: {
    variant: {
      heading: 'text-4xl font-bold select-none',
      highlight: 'text-2xl font-semibold select-none',
      title: 'text-2xl font-bold',
      subtitle: 'text-lg font-normal',
      card: 'text-lg font-semibold',
      content: 'text-sm font-light',
      review: 'text-md font-semibold',
      input: 'text-[14px] font-medium select-none',
    },
  },
})

interface LabelProps
  extends React.ComponentProps<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {}

function Label({ className, variant, ...props }: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot='label'
      className={cn(labelVariants({ variant, className }))}
      {...props}
    />
  )
}

export { Label, labelVariants }
