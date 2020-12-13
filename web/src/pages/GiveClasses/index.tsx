import React from 'react';

import './styles.css'
import Header from '../../assets/components/Header'
import Input from '../../assets/components/InputText'
import TextArea from '../../assets/components/TextArea'
import Select from '../../assets/components/Select'

import rocket from '../../assets/images/icons/rocket.svg'
import attenctionIcon from '../../assets/images/icons/warning.svg'

function GiveClasses() {
  return(
    <>
     <Header title="Dar aulas" />
     <div id="page_giveClasses">
        <div id="top_content">
          <div id="content">
            <h1>Que incrível que você <br /> quer dar aulas.</h1>
       
              <span id="span_content">
                <h3>O primeiro passo, é preencher esse <br />formulário de inscrição</h3>
                <span>
                  <img src={rocket} alt="Icone de Foguete"/>
                  <p>Prepare-se! <br/> vai ser o máximo. </p>
                </span>
              </span>
        
          </div>
        </div>

        <div id="main_content">

          <form onSubmit={() => {}}>
            <main>
              <fieldset>
                <legend>Seus dados</legend>
                 
                  <span id="avatar_content">
                    <div id="avatarArea">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7f1Es84yxr11Bfj_10hV2_srMeJ-Ry71Yiw&usqp=CAU" alt="Avatar"/>  
                      <p>Luis Moraes</p>  
                    </div>
                                     
                    <Input 
                      name="whatsapp" 
                      label="Whatsapp"
                    /*  onChange={ event => setWhatsapp(event.target.value) }  */
                    />
                  </span>
                  <TextArea 
                    name="bio" 
                    label="Biografia" 
                    /* onChange={ event => setBio(event.target.value) } */
                  />
                  
              </fieldset>

              <fieldset>
                <legend>Sobre a aula</legend>
                  <span className="aboutBlock">
                    <Select 
                    name="subject"
                    label="Matéria"
                    defaultValue="Selecione qual você quer ensinar"
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
                   /*   onChange={ event => setSubject(event.target.value) }   */
                    />
                    <Input 
                      name="cost" 
                      label="Custo hora por aula" 
                    /*  onChange={ event => setCost(event.target.value) } */
                    />
                  </span>   
              </fieldset>

              <fieldset className="hoursLabel">
                <legend>Horários disponíveis <span>+ Novo horário</span> </legend>
                  <span className="hoursBlock">
                    <Select 
                      name="week_day"
                      label="Dia da semana"
                      defaultValue="Selecione o dia"
                      options={[
                        { value: '0', label: 'Domingo' },
                        { value: '1', label: 'Segunda-feira' },
                        { value: '2', label: 'Terça-feira' },
                        { value: '3', label: 'Quarta-feira' },
                        { value: '4', label: 'Quinta-feira' },
                        { value: '5', label: 'Sexta-feira' },
                        { value: '6', label: 'Sábado' },   
                      ]}
                    /*  onChange={ event => setWeekday(event.target.value) }   */
                    />
                    <Input 
                      name="from" 
                      label="Das"
                    /*  onChange={ event => setFrom(event.target.value) } */
                    />
                    <Input 
                      name="to" 
                      label="Até" 
                    /*  onChange={ event => setTo(event.target.value) } */
                    />

                  </span>    
                  <p>Excluir horário</p>

                </fieldset>
            </main>
            <div id="footer">
          
          <div id="attectionBlock">
            <img src={attenctionIcon} alt="Atenção"/>
            <p>Importante! <span>Preencha todos os dados corretamente.</span> </p>          
          </div>
         
          <button type="submit">Salvar Cadastro</button>
        </div>
          </form>   
        </div>
       
      </div>
    </>
  )
}

export default GiveClasses