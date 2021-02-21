import React, { SelectHTMLAttributes } from 'react'

import './styles.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    name: string;
    defaultValue?: string;
    //id?: string;
    options: Array<{
      value: string;
      label: string;
    }>
}

const Select: React.FC<SelectProps> = ({ label, name, defaultValue, id, options, ...rest }) => {
    return(
      <div className="select-block">
        <label htmlFor={ name }>{ label }</label>
        <select id={ name } { ...rest } >
         {
           defaultValue && <option value="" disabled selected hidden>{ defaultValue }</option>
           
         }

         {  
            options.map(option => {
                return <option key={ option.value } id={ id } value={ option.value }>{ option.label }</option>
              }
            )
         }
        </select>
      </div>       
    )
}

export default Select