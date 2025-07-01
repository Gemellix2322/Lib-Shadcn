import * as React from 'react'
import { cn } from '../../lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { ErrorOutline } from '@mui/icons-material'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  asChild?: boolean
  label?: string
  isRequired?: boolean
  icon?: React.ReactElement
  help?: string
  errors?: { 
    message?: string
  }
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      asChild = false,
      label,
      isRequired = false,
      icon,
      help,
      errors,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'input'
    const hasError = !!errors?.message

    return (
      <div className="w-full max-w-xs flex flex-col items-start">
        {label && (
          <div className="flex items-center gap-1 mb-1">
            <label
              htmlFor={props.name}
              className={`text-sm ${
                isRequired ? 'font-bold' : 'font-medium'
              } text-gray-800 dark:text-gray-200`}
            >
              {isRequired && <span className="text-red-500 mr-1">*</span>}
              {label}
            </label>
            {icon &&
              React.cloneElement(icon, {
                className: 'w-4 h-4 text-gray-500 dark:text-gray-400'
              })}
          </div>
        )}

        <Comp
          type={type}
          className={cn(
            'file:text-foreground placeholder:text-muted-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
            hasError
              ? 'ring-destructive/40 border-destructive ring-2'
              : '',
            className
          )}
          ref={ref}
          aria-invalid={hasError}
          {...props}
        />

        <div className="mt-1 h-4">
          {hasError ? (
            <div className="flex items-center gap-1.5">
              <ErrorOutline
                sx={{ color: '#d02738', width: '14px', height: '14px' }}
              />
              <p className="text-xs text-red-600 dark:text-red-500">
                {errors.message}
              </p>
            </div>
          ) : (
            help && (
              <p className="text-xs text-gray-500 dark:text-gray-400">{help}</p>
            )
          )}
        </div>
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }