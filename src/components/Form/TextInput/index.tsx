import { Slot } from '@radix-ui/react-slot'
import { HTMLAttributes, InputHTMLAttributes, ReactNode } from 'react'
import { VariantProps, tv } from 'tailwind-variants'
import { FormBase } from '../FormBase'

// function TextInputLabel(){}

type TextInputInputProps = InputHTMLAttributes<HTMLInputElement>

function TextInputInput({ className, ...props }: TextInputInputProps) {
  return (
    <input
      className="flex-1 bg-transparent text-sm text-zinc-700 outline-none placeholder:text-zinc-400 "
      {...props}
    />
  )
}

export const TextInput = {
  Root: FormBase.Root,
  Input: TextInputInput,
  Icon: FormBase.Icon,
}
