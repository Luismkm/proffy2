import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'
import logo from  '../../../assets/images/logo.svg'
import backIcon from '../../../assets/images/icons/back.svg'

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <div id="header-component">
      <Link to="/">  
        <img src={backIcon} alt="Voltar"/>
      </Link>
      <p>{title}</p>
      <img src={logo} alt="Logo"/>
    </div>
  )
}

export default Header