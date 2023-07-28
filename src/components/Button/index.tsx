import { Slot } from '@radix-ui/react-slot'
import { ButtonHTMLAttributes, ComponentProps, ComponentPropsWithoutRef } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'font-medium focus:outline-none focus:ring-2 focus:ring-offset-1 ease-in-out transition-all duration-300 hover:cursor-pointer',
  variants: {
    color: {
      primary: 'focus:ring-primary-600 disabled:text-primary-700',
      secondary: 'focus:ring-secondary-600 disabled:text-secondary-700',
      danger: 'focus:ring-danger-600 disabled:text-danger-700',
      success: 'focus:ring-success-600 disabled:text-success-700',
      info: 'focus:ring-info-600 disabled:text-info-700',
      warn: 'focus:ring-warn-600 disabled:text-warn-700',
    },
    size: {
      xs: 'text-xs rounded-md px-1.5 h-6',
      sm: 'text-sm rounded-md px-2 h-8',
      md: 'text-md rounded-lg px-4 h-10',
      lg: 'text-lg rounded-lg px-6 h-12',
    },
    variant: {
      solid: '',
      outline: 'bg-transparent',
      gradient: 'bg-gradient-to-br',
      link: 'p-0 px-1.5 h-auto hover:underline underline-offset-4',
    },
    disabled: {
      true: 'opacity-50 focus:pointer-events-none hover:cursor-not-allowed hover:no-underline',
    },
    block: {
      true: 'w-full',
    },
  },
  compoundVariants: [
    {
      color: 'primary',
      variant: 'solid',
      class:
        'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 disabled:bg-primary-200 ',
    },
    {
      color: 'primary',
      variant: 'outline',
      class:
        ' text-primary-700 border hover:bg-primary-50 active:bg-primary-100 border-primary-700',
    },
    {
      color: 'primary',
      variant: 'gradient',
      class:
        'from-primary-400 to-primary-600 text-white hover:from-primary-500 hover:to-primary-700 active:from-primary-600 active:to-primary-800 disabled:from-primary-100 disabled:to-primary-300 ',
    },
    {
      color: 'primary',
      variant: 'link',
      class:
        'text-primary-500 hover:text-primary-600 active:text-primary-700 disabled:text-primary-300',
    },

    {
      color: 'secondary',
      variant: 'solid',
      class:
        'bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700 disabled:bg-secondary-200',
    },
    {
      color: 'secondary',
      variant: 'outline',
      class:
        'text-secondary-700 border hover:bg-secondary-50 active:bg-secondary-100 border-secondary-700',
    },
    {
      color: 'secondary',
      variant: 'gradient',
      class:
        ' from-secondary-400 to-secondary-600 text-white hover:from-secondary-500 hover:to-secondary-700 active:from-secondary-600 active:to-secondary-800 disabled:from-secondary-100 disabled:to-secondary-300 ',
    },

    {
      color: 'secondary',
      variant: 'link',
      class:
        'text-secondary-500 hover:text-secondary-600 active:text-secondary-700 disabled:text-secondary-300',
    },

    {
      color: 'danger',
      variant: 'solid',
      class:
        'bg-danger-500 text-white hover:bg-danger-600 active:bg-danger-700 disabled:bg-danger-200 ',
    },
    {
      color: 'danger',
      variant: 'outline',
      class:
        ' text-danger-700 border hover:bg-danger-50 active:bg-danger-100 border-danger-700',
    },
    {
      color: 'danger',
      variant: 'gradient',
      class:
        'from-danger-400 to-danger-600 text-white hover:from-danger-500 hover:to-danger-700 active:from-danger-600 active:to-danger-800 disabled:from-danger-100 disabled:to-danger-300 ',
    },
    {
      color: 'danger',
      variant: 'link',
      class:
        'text-danger-500 hover:text-danger-600 active:text-danger-700 disabled:text-danger-300',
    },

    {
      color: 'success',
      variant: 'solid',
      class:
        'bg-success-500 text-white hover:bg-success-600 active:bg-success-700 disabled:bg-success-200 ',
    },
    {
      color: 'success',
      variant: 'outline',
      class:
        ' text-success-700 border hover:bg-success-50 active:bg-success-100 border-success-700',
    },
    {
      color: 'success',
      variant: 'gradient',
      class:
        'from-success-400 to-success-600 text-white hover:from-success-500 hover:to-success-700 active:from-success-600 active:to-success-800 disabled:from-success-100 disabled:to-success-300 ',
    },
    {
      color: 'success',
      variant: 'link',
      class:
        'text-success-500 hover:text-success-600 active:text-success-700 disabled:text-success-300',
    },

    {
      color: 'info',
      variant: 'solid',
      class:
        'bg-info-500 text-white hover:bg-info-600 active:bg-info-700 disabled:bg-info-200 ',
    },
    {
      color: 'info',
      variant: 'outline',
      class:
        ' text-info-700 border hover:bg-info-50 active:bg-info-100 border-info-700',
    },
    {
      color: 'info',
      variant: 'gradient',
      class:
        'from-info-400 to-info-600 text-white hover:from-info-500 hover:to-info-700 active:from-info-600 active:to-info-800 disabled:from-info-100 disabled:to-info-300 ',
    },
    {
      color: 'info',
      variant: 'link',
      class:
        'text-info-500 hover:text-info-600 active:text-info-700 disabled:text-info-300',
    },

    {
      color: 'warn',
      variant: 'solid',
      class:
        'bg-warn-500 text-white hover:bg-warn-600 active:bg-warn-700 disabled:bg-warn-200 ',
    },
    {
      color: 'warn',
      variant: 'outline',
      class:
        ' text-warn-700 border hover:bg-warn-50 active:bg-warn-100 border-warn-700',
    },
    {
      color: 'warn',
      variant: 'gradient',
      class:
        'from-warn-400 to-warn-600 text-white hover:from-warn-500 hover:to-warn-700 active:from-warn-600 active:to-warn-800 disabled:from-warn-100 disabled:to-warn-300 ',
    },
    {
      color: 'warn',
      variant: 'link',
      class:
        'text-warn-500 hover:text-warn-600 active:text-warn-700 disabled:text-warn-300',
    },
  ],
  defaultVariants: {
    size: 'md',
    color: 'primary',
    disabled: false,
    variant: 'solid',
    block: false,
  },
})


type AsButton = {
  asChild?: false
} & ButtonHTMLAttributes<HTMLButtonElement>

type AsSlot = {
  asChild?: true
}

type ButtonProps = {
  children: React.ReactNode
  className?:string
} & VariantProps<typeof button> & (AsButton | AsSlot)


export function Button({
  size,
  color,
  disabled,
  variant,
  block,
  className,
  asChild = false,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : 'button'
  return (
    <>
      <Component
        className={button({ size, color, disabled, variant, block, className })}
        disabled={disabled}
        {...props}
      />
    </>
  )
}
