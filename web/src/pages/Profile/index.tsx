import React, { useState, FormEvent } from 'react'

import './styles.css'
import Header from '../../assets/components/Header'
import Input from '../../assets/components/InputText'
import TextArea from '../../assets/components/TextArea'
import Select from '../../assets/components/Select'
import imgBackground from '../../assets/images/background-profile.svg'
import cameraIcon from '../../assets/images/icons/camera.svg'
import attenctionIcon from '../../assets/images/icons/warning.svg'
import api from '../../services/api'

function Profile (){
  const[avatar, setAvatar] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7f1Es84yxr11Bfj_10hV2_srMeJ-Ry71Yiw&usqp=CAU')
  const[imgFile, setImgFile] = useState('')
  const[name, setName] = useState('')
  const[lastname, setLastname] = useState('')
  const[email, setEmail] = useState('')
  const[whatsapp, setWhatsapp] = useState('')
  const[bio, setBio] = useState('')
  const[subject, setSubject] = useState('')
  const[cost, setCost] = useState('')
  const[weekday, setWeekday] = useState('')
  const[from, setFrom] = useState('')
  const[to, setTo] = useState('')

  function handleFile(e:any) {
    if (e.target.files.length > 0) {
      const file = e.target.files[0]

      const avatarPreview = URL.createObjectURL(file);

      setImgFile(file)
      setAvatar(avatarPreview)
    }
   return
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const schedule = `${weekday},${from},${to}`

    const data = new FormData()
    data.append('user_id', '1')
    data.append('avatar', imgFile)
    data.append('whatsapp', whatsapp)
    data.append('bio', bio)
    data.append('subject', subject)
    data.append('cost', cost)
    data.append('schedule', schedule)

    await api.post('classes', data)
    alert('Cadastro')
  }

  

  return (
    <>
      <Header title="Meu perfil" />
      <div id="page_profile">
        <div id="top_content">
          <img src={imgBackground} alt="Textura"/>
          <span className="avatar">
            <div id="avatarArea">
              <img src={avatar} alt="Avatar"/>
            </div>
           
            
            {/* <label htmlFor='selecao-arquivo'>Selecionar um arquivo &#187;</label>
            <input id='selecao-arquivo' type='file'> */}

            <label htmlFor='file'>
              <img className="cameraIcon" src={cameraIcon} alt="Icon"/>
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
        <form onSubmit={handleSubmit}>
        <main>
           <fieldset>
            <legend>Seus dados</legend>
              <span>
                <Input 
                  name="name" 
                  label="Nome"
                  onChange={ event => setName(event.target.value) } 
                />
                <Input 
                  name="lastname" 
                  label="Sobrenome"
                  onChange={ event => setLastname(event.target.value) }
                />
              </span>
              <span>  
                <Input 
                  className="inputEmail" 
                  name="email" 
                  label="E-mail"
                  onChange={ event => setEmail(event.target.value) } 
                />
                <Input 
                  name="whatsapp" 
                  label="Whatsapp"
                  onChange={ event => setWhatsapp(event.target.value) } 
                />
              </span>
              <TextArea 
                name="bio" 
                label="Biografia" 
                onChange={ event => setBio(event.target.value) }
              />
             
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
                  onChange={ event => setWeekday(event.target.value) }  
                />
                <Input 
                  name="from" 
                  label="Das"
                  onChange={ event => setFrom(event.target.value) }
                />
                <Input 
                  name="to" 
                  label="Até" 
                  onChange={ event => setTo(event.target.value) }
                />
               
              </span>    
              <p>Excluir horário</p>

              {/*  <span className="hoursBlock">
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
              <p>Excluir horário</p> */}

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

export default Profile