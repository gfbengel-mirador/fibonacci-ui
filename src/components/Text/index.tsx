import { Slot } from '@radix-ui/react-slot'
import { HTMLAttributes, ReactNode } from 'react'
import { VariantProps, tv } from "tailwind-variants"


export const baseTextColors = tv({
  base: '',
  variants:{
    color: {
      default: 'text-gray-900',
      gray: 'text-gray-300',
      primary: 'text-primary-600',
      secondary: 'text-secondary-500',
      danger: 'text-danger-500',
      success: 'text-success-500',
      warn: 'text-warn-500',
      info: 'text-info-500',
    }
  }
})


const text = tv({
  extend: baseTextColors,
  variants: {
    size:{
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
    weight:{
      thin: 'font-thin',
      light: 'font-light',
      normal: 'font-normal',
      bold: 'font-semibold',
      black: 'font-extrabold',
    }
  },
  defaultVariants:{
    size: 'md',
    color: 'default',
    weight: 'normal'
  }
})


type AsSpan = {
  asChild?: false
} & HTMLAttributes<HTMLSpanElement>

type AsSlot = {
  asChild?: true
}

export type TextProps = {
  children: React.ReactNode
  className?:string

} & VariantProps<typeof text> & (AsSpan | AsSlot)


export function Text({size,asChild,color,weight,className,...props}:TextProps){

  const Component = asChild ? Slot : 'span'

  
  return (
    <Component className={text({size,color,weight,className})} {...props} />
  )
}