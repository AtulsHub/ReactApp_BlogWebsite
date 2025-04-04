import React, { forwardRef } from 'react'

const Input = forwardRef(function Input({
    label,
    type = 'text',
    className= '',
    ...props
}, ref) {
  return (
    <div className='w-full'>
        {label && <label 
        className={`inline-block pl-1 mb-1 `}
        >{label}
        </label>}
        <input 
        type={type}
        className={`${className}`}
        ref={ref}
        {...props}
        />
    </div>
  )
});

export default Input