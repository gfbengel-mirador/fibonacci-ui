'use client';

import { LabelHTMLAttributes, ReactNode } from 'react'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { FormBase } from '../FormBase'
import { Check } from '@/assets/icons'


interface CheckboxRootProps {
  children: ReactNode
  className?:string
}

function CheckboxRoot({className,...props}:CheckboxRootProps){
  return (<div className='w-full h-12 flex items-center gap-3 py-2 px-4 rounded-md bg-zinc-100 focus-within:outline-none ' {...props} />)
}

interface CheckboxCheckboxProps extends CheckboxPrimitive.CheckboxProps {}

function CheckboxCheckbox({className,...props}:CheckboxCheckboxProps){
  
  return (
    <CheckboxPrimitive.Root
        className="w-5 h-5 p-[2px] focus:outline-none focus:ring-2 focus:ring-primary-600 bg-zinc-400 data-[state=checked]:bg-primary-500 rounded data-[disabled]:data-[state=unchecked]:bg-zinc-300 data-[disabled]:data-[state=checked]:bg-primary-300"
        {...props}
      >
        <CheckboxPrimitive.Indicator asChild>
          <Check weight='bold' className='h-4 w-4 text-primary-50' />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    )
  }
  
interface CheckboxLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  disabled?:boolean
}

function CheckboxLabel({className,disabled=false,...props}:CheckboxLabelProps){

  return (
    <label data-disabled={disabled} className="text-zinc-700 text-sm flex-1 data-[disabled=true]:text-zinc-400" {...props} />
  )
}


export const Checkbox = {
  Root: CheckboxRoot,
  Checkbox: CheckboxCheckbox,
  Icon: FormBase.Icon,
  Label: CheckboxLabel,
}