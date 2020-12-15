import React from 'react'

import whatsappIcon from '../../images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>
            <img src="https://avatars2.githubusercontent.com/u/66795134?s=460&v=4" alt=""/>
            <div>
            <strong>Luis Moraes</strong>
            <span>Química</span>
            </div>
        </header>

        <p>
        Dev. buscando constante evolução para desenvolver sistemas capazes de resolver problemas do mundo real com objetivo de gerar valor para pessoas e empresas.
        </p>

        <div id="week">

          <div id="schedule">
            <p>Dia</p>
            <p className="bold">Segunda</p>
            <p>Horário</p>
            <p className="bold">8h - 18h</p>
          </div>

          <div id="schedule">
            <p>Dia</p>
            <p className="bold">Terça</p>
            <p>Horário</p>
            <p className="bold">8h - 18h</p>
          </div>

          <div id="schedule" className="off">
            <p>Dia</p>
            <p className="bold">Quarta</p>
            <p>Horário</p>
            <p className="bold">-</p>
          </div>

          <div id="schedule">
            <p>Dia</p>
            <p className="bold">Quinta</p>
            <p>Horário</p>
            <p className="bold">8h - 18h</p>
          </div>

          <div id="schedule" className="off">
            <p>Dia</p>
            <p className="bold">Sexta</p>
            <p>Horário</p>
            <p className="bold">-</p>
          </div>

        </div>
        <footer>
          <p>
            Preço/hora 
            <strong>R$ 20,00</strong>
          </p>
          <button type="button">
            <img src={whatsappIcon} alt="Whatsapp"/>
            Entrar em contato      
          </button>
        </footer>     
      </article>
    )
}

export default TeacherItem