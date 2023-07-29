import { Slot } from '@radix-ui/react-slot'
import { HTMLAttributes, ReactNode } from 'react'
import { VariantProps, tv } from 'tailwind-variants'
import { baseTextColors } from '../Text'

const heading = tv({
  extend: baseTextColors,
  base: 'font-bold',
  variants: {
    size: {
      xs: 'text-md',
      sm: 'text-lg',
      md: 'text-xl',
      lg: 'text-2xl',
      xl: 'text-3xl',
    },
    weight: {
      thin: 'font-normal',
      light: 'font-medium',
      normal: 'font-bold',
      bold: 'font-extrabold',
      black: 'font-black',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'default',
    weight: 'normal',
  },
})

type AsH2 = {
  asChild?: false
} & HTMLAttributes<HTMLHeadingElement>

type AsSlot = {
  asChild?: true
}

type HeadingProps = {
  children: React.ReactNode
  className?: string
} & VariantProps<typeof heading> &
  (AsH2 | AsSlot)

export function Heading({
  size,
  asChild,
  color,
  weight,
  className,
  ...props
}: HeadingProps) {
  const Component = asChild ? Slot : 'h2'

  return (
    <Component
      className={heading({ size, color, weight, className })}
      {...props}
    />
  )
}
