'use client';
import { VariantProps, tv } from "tailwind-variants"

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import { Circle } from "@/assets/icons";
import { HTMLAttributes, LabelHTMLAttributes } from "react";
import { FormBase } from "../FormBase";
import { Text, TextProps } from "@/components";

const radioGroupContent = tv({
  base: "flex gap-4 w-full flex-wrap",
  variants:{
    direction:{
      row: "flex-row",
      column: "flex-col"
    },
    justify:{
      start: "justify-start",
      center: "justify-center",
      between: "justify-between",
      around: "justify-around",
      end: "justify-end"
    }
  },
  defaultVariants:{
    direction: "row",
    justify: "start",
  }
})

const radioGroupItem = tv({
  base: "flex gap-2",
  variants:{
    direction:{
      row: "flex-row items-center",
      column: "flex-col items-center"
    }
  },
  defaultVariants:{
    direction: "row"
  }
})

interface RadioGroupRootProps extends HTMLAttributes<HTMLDivElement> {}

function RadioGroupRoot({className,...props}:RadioGroupRootProps){
  return (
    <div className='w-full py-2 px-4 rounded-md bg-zinc-100 focus-within:outline-none flex flex-col gap-3'  {...props} />
  )
}

function RadioGroupTitle(props:TextProps){
  return <Text {...props} />
}

interface RadioGroupContentProps extends RadioGroupPrimitive.RadioGroupProps,VariantProps<typeof radioGroupContent> {
  children: React.ReactNode
}

function RadioGroupContent({direction, justify,className,...props}:RadioGroupContentProps){  
  return (
    <RadioGroupPrimitive.Root className={radioGroupContent({direction, justify,className})} {...props} />
  )
}


interface RadioGroupItemContainerProps extends VariantProps<typeof radioGroupItem>{
  children: React.ReactNode
}

function RadioGroupItemContainer({children, direction}:RadioGroupItemContainerProps){
  return (
    <div className={radioGroupItem({direction})}>
      {children}
    </div>
  )
}

interface RadioGroupItemIndicatorProps extends RadioGroupPrimitive.RadioGroupItemProps {}

function RadioGroupItemIndicator({className, ...props}:RadioGroupItemIndicatorProps){
  return (
    <RadioGroupPrimitive.Item className='w-6 h-6 rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-primary-600 bg-zinc-400 data-[state=checked]:bg-primary-500  data-[disabled]:data-[state=unchecked]:bg-zinc-300 data-[disabled]:data-[state=checked]:bg-primary-300' {...props}>
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center w-full h-full relative">
        <Circle weight="fill" className="h-4 w-4 text-primary-50" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )

}

interface RadioGroupItemLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  disabled?:boolean
}

function RadioGroupItemLabel({className,disabled=false,...props}:RadioGroupItemLabelProps){

  return (
    <label data-disabled={disabled} className="text-zinc-700 text-sm flex-1 data-[disabled=true]:text-zinc-400" {...props} />
  )
}


export const RadioGroup = {
  Root: RadioGroupRoot,
  // Icon: FormBase.Icon,
  Title: RadioGroupTitle,
  Content: RadioGroupContent,
  Item: {
    Root: RadioGroupItemContainer,
    Indicator: RadioGroupItemIndicator,
    Label: RadioGroupItemLabel,
  }
}