import { Slot } from "@radix-ui/react-slot"
import { ReactNode } from "react"

interface FormBaseRootProps {
  children: ReactNode
  className?:string
}

function FormBaseRoot({className,...props}:FormBaseRootProps){
  return (<div className='w-full h-12 flex items-center gap-3 py-2 px-4 rounded-md bg-zinc-100 focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-600' {...props} />)
}

// function FormBaseLabel(){}




interface FormBaseIconProps {
  children: ReactNode
}

function FormBaseIcon({children}:FormBaseIconProps){
  return(
    <Slot className='text-zinc-300 h-6 w-6 focus-within:text-red-500'>
      {children}
    </Slot>
  )
}
// FormBaseIcon.displayName = 'FormBase.Icon'

export const FormBase = {
  Root:FormBaseRoot,
  Icon:FormBaseIcon
}