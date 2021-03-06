import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'
import img_back from '../../assets/images/pg-success.svg'

function PageCreateSuccess() {
  return(
    <div id="page-create-success">
      <div className="page-content">
        <img src={img_back} alt="back" />

        <div className="titles">
          <h1>Cadastro concluído</h1>
          <p>Agora você faz parte da plataforma da Proffy.
            Tenha uma ótima experiência.
          </p>
          <Link to='/'>
            <button>Fazer login</button>
          </Link>
        </div>
    
      </div>
		</div>
    )
}

export default PageCreateSuccess