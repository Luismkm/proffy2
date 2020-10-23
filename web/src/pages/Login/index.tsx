import React from 'react'
import { Link } from 'react-router-dom'

import LogoAside from '../../assets/components/LogoAside'
import Input from '../../assets/components/Input'

import heartIcon from '../../assets/images/icons/purple-heart.svg'
import './styles.css'

function Login() {
    return(
       <div id="page-login">
         <LogoAside />
         <div className="form-content">
           <main>
             <fieldset>
                 <legend>Fazer Login</legend>
                 <div className="inputblock">
                  <Input type="text" name="email" placeholder="E-mail" />
                  <Input type="password" name="password" placeholder="Senha" />
                 </div>
                 <div className="remember">
                   <input type="checkbox" name="remember" id="remember"/>
                    <span>Lembrar-me</span>
                    <span>Esqueci minha senha</span>
                 </div>
                 <button>Entrar</button>
             </fieldset>
             <footer>
               <p>Não tem conta? <br /><span><Link to='/CreateAccount'>Cadastre-se</Link></span></p>
               <span>é de graça <img src={heartIcon} alt="Coração" /></span>  
             </footer>
           </main>     
         </div>      
       </div>
    )
}

export default Login