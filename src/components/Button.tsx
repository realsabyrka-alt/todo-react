import clsx from 'clsx'
import * as React from 'react'

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
}

export const Button = ({ className, children, type = 'button', ...props }: ButtonProps) => {
  return (
    <button
      className={clsx('button', className)}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}
