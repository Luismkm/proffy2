import React, { SelectHTMLAttributes } from 'react'

import './styles.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    name: string;
    defaultValue: string;
    options: Array<{
      value: string;
      label: string;
    }>
}

const Select: React.FC<SelectProps> = ({ label, name, defaultValue, options, ...rest }) => {
    return(
      <div className="select-block">
        <label htmlFor={ name }>{ label }</label>
        <select id={ name } { ...rest } >
          <option value="" disabled selected hidden>{ defaultValue }</option>
          {options.map(option => {
            return <option key={ option.value } value={ option.value }>{ option.label }</option>
          })}
        </select>
      </div>       
    )
}

export default Select