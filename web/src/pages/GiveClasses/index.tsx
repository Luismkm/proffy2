import React, { useState, useEffect, FormEvent } from 'react';

import './styles.css'
import Header from '../../assets/components/Header'
import Input from '../../assets/components/InputText'
import TextArea from '../../assets/components/TextArea'
import Select from '../../assets/components/Select'

import rocket from '../../assets/images/icons/rocket.svg'
import attenctionIcon from '../../assets/images/icons/warning.svg'

import api from '../../services/api'

type newSchedule = { 
  id: number, // id schedule
  week_day: number,
  day: string,
  from: string,
  to: string,
  class_id: number, //id subject
}

type Subjects = {
  subject_id: number,
  subject: string
  bio: string
  cost: number
}

type Option = {
  value: string
  label: string
}

function GiveClasses() {

  const[option, setOption] = useState<Option[]>([
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
  ])

  // apenas para visualização dos dados
  const[imgPreview, setImgPreview] = useState('')
  const[whatsapp, setWhatsapp] = useState('')
  const[from, setFrom] = useState('')
  const[to, setTo] = useState('')
  //

  const[userId, setUserId] = useState('1')
  const[bio, setBio] = useState('')
  const[cost, setCost] = useState('')
  const[subject, setSubject] = useState('')
  const[newDataSchedule, setNewDataSchedule] = useState<newSchedule[]>([])
  const[currentSchedule, setCurrentSchedule] = useState<newSchedule[]>([])
  const[dayValue, setDayValue] = useState('0')


  useEffect(() =>{
    api.get(`users/1`).then(response => {
      const user = response.data[0]
      const userData = response.data
    
      setUserId(user.user_id)
      setImgPreview(`http://localhost:3333/uploads/${ user.avatar }`)
      setWhatsapp(user.whatsapp)

      const subjects = userData.map((data:any) => {
        const subject = {
          subject_id: data.class_id,
          subject: data.subject,
          bio: data.bio,
          cost: data.cost,
        }
        return subject
      })
      
      //setSubjects(subjects)

      let newOptions:any = []

      option.map((item: Option) => {

        subjects.map((sub: Subjects)  =>{
          
          if(item.value !== sub.subject){
            newOptions = [...newOptions, item]
          }

        })

      })

      setOption(newOptions)
      
    })

  },[])

 

  function handleAddNewSchedule(){
    console.log(setCurrentSchedule.length )

    if((setCurrentSchedule.length > 1)&&(from === '' || to === '')){
      alert('Preencha todos os dados')
      return
    } 

    if(from || to){

      setNewDataSchedule([...newDataSchedule, { id: 1, week_day:+dayValue, day:dayValue, from:from, to:to, class_id:0 }])
      setFrom('')
      setTo('')
      setDayValue('0')
      setCurrentSchedule( [{ id: 1, week_day:+dayValue, day:dayValue, from:from, to:to, class_id:0 }] )
      return
    }

    setCurrentSchedule( [{ id: 1, week_day:+dayValue, day:dayValue, from:from, to:to, class_id:0 }] )

    
  }

  function handleExclude(index: number){
   
   newDataSchedule.splice(index,1)
   setNewDataSchedule([... newDataSchedule])
  }

  function handleExcludeCurrentSchedule(index: number){
   
    currentSchedule.splice(index,1)
    setCurrentSchedule([])
   }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    
    const data = {
      'user_id': userId,
      bio,
      cost,
      'day_id': dayValue,
    }

    await api.post('classes', data)
    alert('Classe criada com sucesso.')
   
  }

  function handleSetFrom(value:string){
    setFrom(value)
  }

  function handleSetTo(value:string){
    setTo(value)
  }


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

          <form onSubmit={handleSubmit}>
            <main>
              <fieldset>
                <legend>Seus dados</legend>
                 
                  <span id="avatar_content">
                    <div id="avatarArea">
                      <img src={ imgPreview } alt="Avatar"/>  
                      <p>Luis Moraes</p>  
                    </div>
                                     
                    <Input 
                      name="whatsapp" 
                      label="Whatsapp"
                      value={ whatsapp }
                      disabled
                    
                    />
                  </span>
                  <TextArea 
                    name="bio" 
                    label="Biografia" 
                    value={ bio }
                    onChange={ event => setBio(event.target.value) }
                  />
                  
              </fieldset>

              <fieldset>
                <legend>Sobre a aula</legend>
                  <span className="aboutBlock">
                    <Select 
                    name="subject"
                    label="Matéria"
                    defaultValue="Selecione qual você quer ensinar"
                    options={ option }
                    onChange={ event => setSubject(event.target.value) } 
                    />
                    <Input 
                      name="cost" 
                      label="Custo hora por aula" 
                      onChange={ event => setCost(event.target.value) }
                    />
                  </span>   
              </fieldset>

              <fieldset className="hoursLabel">
              <legend>Horários disponíveis <span onClick={ () =>{ handleAddNewSchedule() } }>+ Novo horário</span> </legend>

                  {  

                    currentSchedule && currentSchedule.map((item:newSchedule) => (
                    
                    <>
                       <span key={ item.class_id }className="hoursBlock">

                          {
                              <>
                                <Select 
                                name="week_day"
                                label="Dia da semana"
                                value={ dayValue }
                                onChange={ event => setDayValue( event.target.value )}
                               
                                
                                options={[
                                  { value: `1`, label: `Domingo` },
                                  { value: `2`, label: `Segunda-feira` },
                                  { value: `3`, label: `Terça-feira` },
                                  { value: `4`, label: `Quarta-feira` },
                                  { value: `5`, label: `Quinta-feira` },
                                  { value: `6`, label: `Sexta-feira` },
                                  { value: `7`, label: `Sábado` }
                                 ]}
                                />
                                 <Input 
                                  name="from" 
                                  label="Das"
                                  value={ from }
                                  onChange={ event => handleSetFrom( event.target.value )}
                                  //onFocus={ event => setFrom(event.target.value) }

                                 />
                                 <Input 
                                  name="to" 
                                  label="Até" 
                                  value={ to }
                                  onChange={ event => handleSetTo( event.target.value )}
                                  
                                />
                              </>
                            
                            
                          
                          }

                        </span>
                    
                      <button 
                        className="btnExclude" 
                        type='button'
                        onClick={ () => { handleExcludeCurrentSchedule( currentSchedule.indexOf(item) ) } }>

                         Excluir
                      
                      </button>
                    </>

                  ))
              }

{
                    newDataSchedule && newDataSchedule.slice(0).reverse().map((item:newSchedule) => (
                      <>
                           <span key={ item.class_id }className="hoursBlock">

                          {
                              <>
                                <Select 
                                name="week_day"
                                label="Dia da semana"
                                value={ item.day }
                                onChange={ event => setDayValue( event.target.value )}
                               
                                
                                options={[
                                  { value: `1`, label: `Domingo` },
                                  { value: `2`, label: `Segunda-feira` },
                                  { value: `3`, label: `Terça-feira` },
                                  { value: `4`, label: `Quarta-feira` },
                                  { value: `5`, label: `Quinta-feira` },
                                  { value: `6`, label: `Sexta-feira` },
                                  { value: `7`, label: `Sábado` }
                                 ]}
                                />
                                 <Input 
                                  name="from" 
                                  label="Das"
                                  value={ item.from }
                                  //onChange={ event => setFrom( event.target.value )}
                                  //onFocus={ event => setFrom(event.target.value) }

                                 />
                                 <Input 
                                  name="to" 
                                  label="Até" 
                                  value={ item.to }
                                 // onChange={ event => setTo( event.target.value )}
                                  
                                />
                                
                              </>
                          
                          }

                        </span> 
                        <button 
                          className="btnExclude" 
                          type='button'
                          onClick={ () => { handleExclude( newDataSchedule.indexOf(item) ) } }>

                          Excluir
                      
                         </button>  
                      </>
                    ))

                   
                  }

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