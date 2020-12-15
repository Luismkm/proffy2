import React from  'react'
import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/Intro.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import logoutIcon from '../../assets/images/icons/logout.svg'

import './styles.css'

function Landing(){
    return(
       <div id="page-landing">
        <div id="page-landing-content" className="container">

          <div id="header-landing">
           
            <span>
              <Link to="/profile">  
               <img className="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7f1Es84yxr11Bfj_10hV2_srMeJ-Ry71Yiw&usqp=CAU" alt="Avatar"/>
              </Link>
              <p>Luis Marcelo Krautiuk</p>
            </span>
            <img src={logoutIcon} alt="Sair"/>
          </div>

          <div className="logo-container">
            <img src={logoImg} alt="Proffy" />
          </div>
            <img src={landingImg} alt="Plataforma de estudos" className="hero-image" />


           
        </div>
        <div id="footer-landing">
              <p>
                Seja bem-vindo,<br />
                <span>O que deseja fazer ?</span>
              </p>

              <span className="total-connections">
                Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="Coração" />
            </span>


            <div className="buttons-container">
              <Link to="/study" className="study">
                  <img src={studyIcon} alt="Estudar" />
                  Estudar
              </Link>

              <Link to="/giveClasses" className="give-classes">
                  <img src={giveClassesIcon} alt="Dar aula" />
                  Dar aula
              </Link>

            </div>

           
            </div>
       </div>
    )
}

export default Landing