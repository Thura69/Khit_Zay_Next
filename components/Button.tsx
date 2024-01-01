
import { cn } from '@/utils/cn';
import { cva, VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, FC, forwardRef } from 'react';



const buttonVarient = cva(
    'active:border-2 w-[200px] h-[50px] bg-blue-500',
    {
        variants: {
            variant: {
                default: 'bg-blue-800 h-[50px] w-[200px] text-white',
                outline: 'border-2 h-[50px] w-[200px] text-white'
            },
            size: {
                default: "h-[200px] w-[200px] py-2 px-4",
                sm: "h-[150px] px-2 rounded-2",
                
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default'
        }
    }
    
);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVarient> {

};


export const Button = forwardRef<HTMLButtonElement,ButtonProps>(({className,size,variant,...props},ref) => {
  return (
    <button ref={ref} className={cn(buttonVarient({variant,size,className}))} {...props}/>
  )
})

Button.displayName = "button"