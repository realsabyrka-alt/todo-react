import clsx from 'clsx'
import * as React from 'react'

interface FieldProps extends React.ComponentPropsWithoutRef<'input'> {
  label: string
  id: string
  ref: React.Ref<HTMLInputElement>
}

export const Field = ({ className, label, id, type = 'text', ref, ...props }: FieldProps) => {
  return (
    <div className={clsx('field', className)}>
      <label
        className="field__label"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="field__input"
        id={id}
        placeholder=" "
        autoComplete="off"
        type={type}
        ref={ref}
        {...props}
      />
    </div>
  )
}
