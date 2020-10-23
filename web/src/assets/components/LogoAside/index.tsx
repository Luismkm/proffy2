import React from 'react'

import './styles.css'
import back from '../../images/background.svg'

function LogoAside() {
    return(
        <div className="logoAside-component">
          <img src={back} alt="logo" />
        </div>
    )
}

export default LogoAside