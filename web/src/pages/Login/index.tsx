import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'
import { useAuth } from '../../context/auth' 

import LogoAside from '../../assets/components/LogoAside'
import Input from '../../assets/components/Input'

import './styles.css'
import heartIcon from '../../assets/images/icons/purple-heart.svg'


function Login() {
  const { signIn } = useAuth()

  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  function handleSignIn(){
    console.log(email, password)
    signIn(email, password) 
  }

    return(
       <div id="page-login">
         <LogoAside />
         <div className="form-content">
           <main>
             <fieldset>
                 <legend>Fazer Login</legend>
                 <div className="inputblock">
                  <Input 
                    type="text" 
                    name="email" 
                    placeholder="E-mail"
                    value={email}
                    onChange={event => setEmail(event.target.value)} 
                  />

                  <Input 
                    type="password" 
                    name="password"
                    placeholder="Senha"
                    value={password}
                    onChange={event => setPassword(event.target.value)} 
                  />

                 </div>
                 <div className="remember">
                   <input type="checkbox" name="remember" id="remember"/>
                    <span>Lembrar-me</span>
                    <Link className="forgotPassword" to='/ForgotPassword'>
                      
                      <span>Esqueci minha senha</span>
                    
                    </Link>
                 </div>
                 <button onClick={handleSignIn}>Entrar</button>
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