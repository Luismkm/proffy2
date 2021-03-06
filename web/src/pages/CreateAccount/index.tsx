import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'
import back from '../../assets/images/icons/back.svg'

import PageContent from '../../assets/components/PageContent'
import LogoAside from '../../assets/components/LogoAside'
import Input from '../../assets/components/Input'

function CreateAccount() {
    return(
     <>
        <div id="page-create-account">     
          <LogoAside />
           <div className="form-content">
             <Link to='/' className="backIcon" title="Voltar">
               <img src={back} alt="Voltar" />
             </Link>
            <PageContent
            label='Cadastro'
            description='Preencha os dados abaixo para começar.' 
            button='Concluir cadastro'
            linkTo='/PageCreateSuccess'
            >
            <div className="inputblock">
              <Input type="text" name="name" placeholder="Nome" />
              <Input type="text" name="lastName" placeholder="Sobrenome" />
              <Input type="text" name="email" placeholder="E-mail" />
              <Input type="password" name="password" placeholder="Senha" />
            </div>
            </PageContent>
           </div>
        </div>
     </>
    )
}

export default CreateAccount