import React from 'react'
import { Button as ButtonCN } from '../ui/button'
import { useTheme } from '@emotion/react'
type ButtonProps = {
  height?: 'small' | 'medium' | 'large'
  children: React.ReactNode
  isLoading?: boolean
  variant?: string
  isLink?: boolean
  sx?: any
} & React.ComponentProps<typeof ButtonCN>

export function Button({
  children,
  height = 'medium',
  isLoading,
  variant,
  isLink = false,
  sx = {},
  ...props
}: ButtonProps) {
  const heightSize = {
    small: '1.75rem',
    medium: '2.25rem',
    large: '3.5rem'
  }

  const theme = useTheme() as any

  const gradient = theme.custom?.buttonGradient ?? 'linear-gradient(to right, #D06409, #F97D00)'

  const variantIsLink = {
    border: 0,
    outline: 0,
    cursor: 'pointer',
    background: 'transparent',
    textDecoration: 'underline',
    color: 'black',
    textTransform: 'none',
    fontFamily: 'Saira, sans-serif',
    fontWeight: 500,
    '&.MuiButtonBase-root': {
      padding: 0,
      lineHeight: 1
    },
    '&:hover': {
      textDecoration: 'underline',
      background: 'transparent'
    },
    ...sx
  }

  return (
    <ButtonCN
      variant={variant}
      className="w-full max-w-fit normal-case text-white bg-background"
      {...props}
    >
      {children}
    </ButtonCN>
  )
}
