import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react'

import './styles.css'
import Header from '../../assets/components/Header'
import Input from '../../assets/components/InputText'
import TextArea from '../../assets/components/TextArea'
import Select from '../../assets/components/Select'
import imgBackground from '../../assets/images/background-profile.svg'
import cameraIcon from '../../assets/images/icons/camera.svg'
import attenctionIcon from '../../assets/images/icons/warning.svg'
import api from '../../services/api'

/* const session = JSON.parse(localStorage.getItem('@PFAuth:user') || '') */


interface newSchedule{ 
  id: number, // id schedule
  week_day: number,
  day: string,
  from: string,
  to: string,
  class_id: number, //id subject
}

interface Subjects {
  subject_id: number,
  subject: string
  bio: string
  cost: number
}

interface Option {
  value: string
  label: string
}

function Profile (){
  //const[avatar, setAvatar] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7f1Es84yxr11Bfj_10hV2_srMeJ-Ry71Yiw&usqp=CAU')
  const[imgPreview, setImgPreview] = useState('')
  
  const[userId, setUserId] = useState('')
  const[avatar, setAvatar] = useState('')
  const[name, setName] = useState('')
  const[lastname, setLastname] = useState('')
  const[email, setEmail] = useState('')
  const[whatsapp, setWhatsapp] = useState('')

  const[subjects, setSubjects] = useState<Subjects[]>([])

  const[selectedSubject, setSelectedSubject] = useState('')

  const[option, setOption] = useState<Option[]>([])

  const[bio, setBio] = useState('')
  const[cost, setCost] = useState('')

  const[schedule, setSchedule] = useState<newSchedule[]>([])

  const[newDataSchedule, setNewDataSchedule] = useState<newSchedule[]>([])

  const[dayValue, setDayValue] = useState<string>('0')


  useEffect(() =>{
    api.get(`users/1`).then(response => {
      const user = response.data[0]
      const userData = response.data
     
      setUserId(user.user_id)
      setImgPreview(`http://localhost:3333/uploads/${ user.avatar }`)
      setAvatar(user.avatar)
      setName(user.name)
      setLastname(user.lastname)
      setEmail(user.email)
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

      setSubjects(subjects)

      const subjectsOption = subjects.map((subject:any) => {
        
        const option = {
          value: subject.subject_id,
          label: subject.subject,

        }
        return option
      })

      setOption(subjectsOption)
      
    })

  },[])

  useEffect(() => {

    if(selectedSubject) {
    
      subjects.forEach((subject:Subjects) => {
       
        if(subject.subject_id === Number(selectedSubject) ) {
          setBio(subject.bio)
          setCost(String(subject.cost))
        }

      })

      api.get(`schedule/${selectedSubject}`).then(response => {
        const schedule = response.data
        console.log(schedule)
        setSchedule(schedule)
      })
    }
    

  },[selectedSubject])


  function handleFile(e:any) {
   
    if (e.target.files.length > 0) {
      const file = e.target.files[0]

      const avatarPreview = URL.createObjectURL(file)
      
      console.log(avatarPreview)
      setImgPreview(avatarPreview)
      setAvatar(file)
    }
   return
  }

  function handleSubject( event:ChangeEvent<HTMLSelectElement> ) {

    const subjectValue = event.target.value
    setSelectedSubject(subjectValue)

  }

  function handleExclude(index: number){
   

   api.get(`exclude/schedule/?id=${ index }`).then(response =>{
     console.log(response)
   })

    /* setInputSubject(inputSubjectValue)
    teste.splice(index,1)
    setTeste(teste)
    handleAtt(teste) */

  
   
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    
    const data = new FormData()

    data.append('user_id', userId)
    data.append('avatar', avatar)
    data.append('name', name)
    data.append('lastname', lastname)
    data.append('email', email)
    data.append('whatsapp', whatsapp)
    data.append('subject_id', selectedSubject)
    data.append('bio', bio)
    data.append('cost', cost)

    // testa se o schedule(calendário) foi alterado
    if(schedule.length !== 0){
      // pergar schedule
      
      data.append('schedule', JSON.stringify(schedule))
      
    }

    await api.put('users', data)
    alert('Cadastro')
   
  }



  function handleAddNewSchedule(){

    setNewDataSchedule( [...newDataSchedule, { id: 0, week_day:0, day:'', from:'', to:'', class_id:0 }] )
    
  }
  
  /* if (name === ''){
    return <p>Carregando...</p>
  } */

  return (
    <>
      <Header title="Meu perfil" />
      <div id="page_profile">
        <div id="top_content">
          <img src={ imgBackground } alt="Textura"/>
          <span className="avatar">
            <div id="avatarArea">
              <img src={ imgPreview } alt="Avatar"/>
            </div>

            
           
            
            {/* <label htmlFor='selecao-arquivo'>Selecionar um arquivo &#187;</label>
            <input id='selecao-arquivo' type='file'> */}

            <label htmlFor='file'>
              <img className="cameraIcon" src={ cameraIcon } alt="Icon"/>
            </label>
           {/*  <input
              onChange={(e) => handleFile(e)} 
              type="file" 
              name="file" 
              id="file"/> */}

<input multiple onChange={(e) => handleFile(e)} type="file" id="file" />

            {/* <img src={cameraIcon} alt="Icon"/> */}
            <p>Luis Moraes</p>
            <p>Geografia</p>
          </span>
        </div>

        <div id="main_content">
        <form onSubmit={ handleSubmit }>
        <main>
           <fieldset>
            <legend>Seus dados</legend>
              <span>
                <Input 
                  name="name" 
                  label="Nome"
                  value={ name }
                  onChange={ event => setName( event.target.value ) } 
                />
                <Input 
                  name="lastname" 
                  label="Sobrenome"
                  value={ lastname }
                  onChange={ event => setLastname( event.target.value ) }
                />
              </span>
              <span>  
                <Input 
                  className="inputEmail" 
                  name="email" 
                  label="E-mail"
                  value={ email }
                  onChange={ event => setEmail( event.target.value ) } 
                />
                <Input 
                  name="whatsapp" 
                  label="Whatsapp"
                  value={ whatsapp }
                  onChange={ event => setWhatsapp( event.target.value ) } 
                />
              </span>
              <TextArea 
                name="bio" 
                label="Biografia"
                value={ bio }
               /*  onChange={ event => setBio( event.target.value ) } */
              />
             
            </fieldset>

            <fieldset>
            <legend>Sobre a aula</legend>

           
              <span className="aboutBlock">

              
                <Select 
                name="subject"
                label="Matéria"
                defaultValue="Suas matérias cadastradas"
                onChange={ handleSubject } 
                options={ option }


                /*   { value: 'Artes', label: 'Artes' },
                  { value: 'Biologia', label: 'Biologia' },
                  { value: 'Ciências', label: 'Ciências' },
                  { value: 'Ed. Física', label: 'Ed. Física' },
                  { value: 'Física', label: 'Física' },
                  { value: 'Geografia', label: 'Geografia' },
                  { value: 'História', label: 'História' },
                  { value: 'Matemática', label: 'Matemática' },
                  { value: 'Português', label: 'Português' },
                  { value: 'Química', label: 'Química' }, */
                
                
                
                
                />
                <Input 
                  name="cost" 
                  label="Custo hora por aula"
                  value={ cost } 
                  onChange={ event => setCost(event.target.value) }
                />
                </span>   
            </fieldset>

            <fieldset className="hoursLabel">
            <legend>Horários disponíveis <span onClick={ () =>{ handleAddNewSchedule() } }>+ Novo horário</span> </legend>
              

              {
                  schedule && schedule.map((item:newSchedule) => (
                    
                    <>
                     
                        <span key={ item.class_id }className="hoursBlock">

                          {
                            
                            item.from&& (
                              <>
                                <Select 
                                  name="week_day"
                                  label="Dia da semana"
                                  options={[
                                    { value: `${ item.week_day }`, label: `${ item.day }` }
                                  ]}
                                />
                                <Input 
                                  name="from" 
                                  label="Das"
                                  value={ `${ item.from }` }
                                />
                                <Input 
                                  name="to" 
                                  label="Até" 
                                  value={ `${ item.to}` }
                                />
                        
                              </>
                            )
                          }
                        </span>
                    
                      <button 
                        className="btnExclude" 
                        type='button'
                        onClick={ () => { handleExclude( item.id ) } }
                      >

                        Excluir
                      
                      </button>
                    </>

                  ))
              }

              {
                  newDataSchedule && newDataSchedule.map((item:newSchedule) => (
                    
                    <>
                       <span key={ item.class_id }className="hoursBlock">

                          {
                            
                            !item.from&& (
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
                                  //value={ from }
                                  //onChange={ event => handleAlterFrom( event.target.value, newDataSchedule.indexOf(item) ) }
                                  //onFocus={ event => setFrom(event.target.value) }

                                 />
                                 <Input 
                                  name="to" 
                                  label="Até" 
                                 // value={ to }
                                 // onChange={ event => handleAlterTo( event.target.value, schedule.indexOf(item) ) }
                                  
                                />
                              </>
                            
                            )
                          
                          }
                        
                        </span>
                    
                      <button 
                        className="btnExclude" 
                        type='button'
                        onClick={ () => { handleExclude( item.id ) } }>

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
         
          <button type="submit" >Salvar Cadastro</button>
        </div>
        </form>    
        </div>
        
       
       
      </div> 
    </>
  )
}

export default Profile