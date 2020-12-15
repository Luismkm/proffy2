import React from 'react';

import './styles.css'
import Header from '../../assets/components/Header'
import Input from '../../assets/components/InputText'
import Select from '../../assets/components/Select' 
import TeacherItem from '../../assets/components/TeacherItem'

import smile from '../../assets/images/icons/smile.svg'

function Study() {
  return(
    <>
     <Header title="Estudar" />
     <div id="page_study">
        <div id="top_content">
          <div id="content">
            <span id="span_content">
              <h1>Estes são os <br /> proffys disponíveis.</h1>

              <span>
                <img src={ smile } alt="Emoji feliz"/>
                <p>Nós temos 32 <br /> professores.</p>
              </span>
            </span>
            

           { <form action="" id="search-teachers">
            <Select 
              name="subject"
              label="Matéria"
              defaultValue="Selecione"
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Ciências', label: 'Ciências' },
                { value: 'Ed. Física', label: 'Ed. Física' },
                { value: 'Física', label: 'Física' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'História', label: 'História' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Português', label: 'Português' },
                { value: 'Química', label: 'Química' },
              ]}  
              />

              <Select 
              name="week_day"
              label="Dia da semana"
              defaultValue="Selecione"
              options={[
                { value: '0', label: 'Domingo' },
                { value: '1', label: 'Segunda-feira' },
                { value: '2', label: 'Terça-feira' },
                { value: '3', label: 'Quarta-feira' },
                { value: '4', label: 'Quinta-feira' },
                { value: '5', label: 'Sexta-feira' },
                { value: '6', label: 'Sábado' },   
              ]}  
              />
              
             <Input name="time" label="Hora" placeholder="Selecione" />
            </form>}

          </div>
        </div>

        <div id="main_content">
          <TeacherItem />
          <TeacherItem />     
         
        </div>
          
      </div> 
      
    </>
  )
}

export default Study