import React from 'react'
import { Button as ButtonCN } from '../ui/button'
import { Loader2Icon } from 'lucide-react'
type ButtonProps = {
  height?: 'small' | 'medium' | 'large'
  children: React.ReactNode
  isLoading?: boolean
  variant?: string
  isLink?: boolean
} & React.ComponentProps<typeof ButtonCN>

export function Button({
  children,
  height = 'medium',
  isLoading,
  variant,
  isLink = false,
  ...props
}: ButtonProps) {

  return (
    <ButtonCN
      variant={variant}
      className="w-full max-w-fit normal-case"
      {...props}
    >
      {isLoading ?
        <>
          <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </> : children
      }
    </ButtonCN>
  )
}
