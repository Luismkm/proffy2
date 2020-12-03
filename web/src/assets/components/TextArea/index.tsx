import React, { TextareaHTMLAttributes } from 'react'

import './styles.css'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    name: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
    return(
      <div className="textarea-block">
        <label htmlFor={name}>{label}<span>(Máximo 300 caracteres)</span> </label>
        <textarea id={name} {...rest} />
      </div>       
    )
}

export default Textarea