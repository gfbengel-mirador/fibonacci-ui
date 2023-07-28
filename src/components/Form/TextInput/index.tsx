import { Slot } from '@radix-ui/react-slot'
import { HTMLAttributes, InputHTMLAttributes, ReactNode } from 'react'
import { VariantProps, tv } from "tailwind-variants"
import { FormBase } from '../FormBase'



// function TextInputLabel(){}

interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput({className,...props}:TextInputInputProps){

  return (
    <input className="bg-transparent outline-none flex-1 text-zinc-700 text-sm placeholder:text-zinc-400 " {...props} />
  )
}


export const TextInput = {
  Root: FormBase.Root,
  Input: TextInputInput,
  Icon: FormBase.Icon,
}