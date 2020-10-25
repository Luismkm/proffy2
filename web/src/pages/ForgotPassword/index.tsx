import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'
import back from '../../assets/images/icons/back.svg'

import PageContent from '../../assets/components/PageContent'
import LogoAside from '../../assets/components/LogoAside'
import Input from '../../assets/components/Input'

function ForgotPassword() {
    return(
     <>
        <div id="page-alter-password">     
          <LogoAside />
           <div className="form-content">
             <Link to='/' className="backIcon" title="Voltar">
               <img src={back} alt="Voltar" />
             </Link>
            <PageContent 
            label='Eita, esqueceu sua senha?'
            description='Não esquenta, vamos dar um jeito nisso.' 
            button='Enviar'
            linkTo='/SendPasswordSuccess'
            >
            <div className="inputblock">
              <Input type="text" name="email" placeholder="E-mail" />
            </div>
            </PageContent>
           </div>
        </div>
     </>
    )
}

export default ForgotPassword