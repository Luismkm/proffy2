import React, { InputHTMLAttributes } from 'react'

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: string;
    name: string;
}

const Input: React.FC<InputProps> = ({ type, name, ...rest }) => {
    return(
        <input className="input-component" type={type} id={name} {...rest} />
    )
}

export default Input