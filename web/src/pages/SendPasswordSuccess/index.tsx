import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'
import img_back from '../../assets/images/pg-success.svg'

function SendPasswordSuccess() {
  return(
    <div id="page-send-password-success">
      <div className="page-content">
        <img src={img_back} alt="back" />

        <div className="titles">
          <h1>Redefinição enviada!</h1>
          <p>Boa, agora é só checar o e-mail que foi enviado para você
              redefinir sua senha e aproveitar os estudos.
          </p>
          <Link to='/'>
            <button>Voltar ao login</button>
          </Link>
        </div>
    
      </div>
		</div>
    )
}

export default SendPasswordSuccess