import React from 'react'

import './styles.css'
import Header from '../../assets/components/Header'
import Input from '../../assets/components/InputText'
import TextArea from '../../assets/components/TextArea'
import Select from '../../assets/components/Select'
import imgBackground from '../../assets/images/background-profile.svg'
import cameraIcon from '../../assets/images/icons/camera.svg'

function Profile (){
  return (
    <>
      <Header title="Meu perfil" />
      <div id="page_profile">
        <div id="top_content">
          <img src={imgBackground} alt="Textura"/>
          <span className="avatar">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7f1Es84yxr11Bfj_10hV2_srMeJ-Ry71Yiw&usqp=CAU" alt="Avatar"/>
            <img src={cameraIcon} alt="Icon"/>
            <p>Luis Moraes</p>
            <p>Geografia</p>
          </span>
        </div>

        <div id="main_content">
        <main>
           <fieldset>
            <legend>Seus dados</legend>
              <span>
                <Input name="name" label="Nome" />
                <Input name="lastname" label="Sobrenome" />
              </span>
              <span>  
                <Input className="inputEmail" name="email" label="E-mail" />
                <Input name="whatsapp" label="Whatsapp" />
              </span>
              <TextArea name="bio" label="Biografia" />
             
            </fieldset>

            <fieldset>
            <legend>Sobre a aula</legend>
              <span className="aboutBlock">
                <Select 
                name="subject"
                label="Matéria"
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
                <Input name="cost" label="Custo hora por aula" />
                </span>   
            </fieldset>

            <fieldset className="hoursLabel">
            <legend>Horários disponíveis <span>+ Novo horário</span> </legend>
              <span className="hoursBlock">
                <Select 
                  name="week_day"
                  label="Dia da semana"
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
                <Input name="from" label="Das" />
                <Input name="to" label="Até" />
               
              </span>    
              <p>Excluir horário</p>

              <span className="hoursBlock">
                <Select 
                  name="week_day"
                  label="Dia da semana"
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
                <Input name="from" label="Das" />
                <Input name="to" label="Até" />
               
              </span>    
              <p>Excluir horário</p>       
            </fieldset>
        </main>
        </div>
        
        <div id="footer">
          <p>Ola</p>
        </div>  
       
      </div> 
    </>
  )
}

export default Profile