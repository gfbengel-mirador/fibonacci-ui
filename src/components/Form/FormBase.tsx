import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react'

interface FormBaseRootProps {
  children: ReactNode
  className?: string
}

function FormBaseRoot({ className, ...props }: FormBaseRootProps) {
  return (
    <div
      className="flex h-12 w-full items-center gap-3 rounded-md bg-zinc-100 px-4 py-2 focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-600"
      {...props}
    />
  )
}

// function FormBaseLabel(){}

interface FormBaseIconProps {
  children: ReactNode
}

function FormBaseIcon({ children }: FormBaseIconProps) {
  return (
    <Slot className="h-6 w-6 text-zinc-300 focus-within:text-red-500">
      {children}
    </Slot>
  )
}
// FormBaseIcon.displayName = 'FormBase.Icon'

export const FormBase = {
  Root: FormBaseRoot,
  Icon: FormBaseIcon,
}
