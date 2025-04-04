import React from 'react'

function Select({
    option,
    label,
    className = '',
    ...props
}, ref){
    const id = useId()
  return (
    <div>
        {label && <label htmlFor={id} 
        ></label>}
        <select
        className={`${className}`}
        ref ={ref}  
        id={id} 
        {...props}>
            {option?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>

    </div>
  )
}

export default React.forwardRef(Select)