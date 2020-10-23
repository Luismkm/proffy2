import React, { useState, useEffect } from 'react'
import { View, Image, Text, ScrollView, TextInput } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import attentionIcon from '../../assets/images/icons/attention.png'
import PageHeader from '../../components/PageHeader'
// import Schedule from '../../components/Schedule'
import AboutClass from '../../components/AboutClass'

import styles from './styles'


function GiveClasses() {
  const { navigate } = useNavigation()

  const [scheduleData, setScheduleData] = useState<number[]>([0])

  function handleAdd (newInput:number) {
    setScheduleData([...scheduleData , newInput])
  }

  function handleNavigateToPageSuccess(){
    navigate('PageSuccess',{title: ' Cadastro \n Salvo!', description: 'Tudo certo, seu cadastro está \n na nossa lista de professores. Agora é \n só ficar de olho no seu WhatsApp.', txtBtn: 'Fazer login'})
  }
    return(
     <>
        <View style={styles.container}>
          <PageHeader 
            pageTitle={'Dar aulas'} 
          />
          <View style={styles.headerContent}>
            <View style={styles.header}>
              <Text style={styles.titleHeader}>{'Que incrível que você  quer dar aulas.'}</Text>
              <Text style={styles.subTitleHeader}>{'O primeiro passo, é preencher esse  formulário de inscrição.'}</Text>
            </View>
          </View>
          
          <ScrollView 
             style={styles.teacherData} 
          >
              <View style={styles.dataBlock}>
                <Text style={styles.title}>Seus dados</Text>  
                <View style={styles.profileHeader}>
                  <Image
                    style={styles.avatar}
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7f1Es84yxr11Bfj_10hV2_srMeJ-Ry71Yiw&usqp=CAU' }} 
                  />
            
                  <View style={styles.profileInfo}>
                    <Text style={styles.name}>Luis Moraes</Text>
                    <Text style={styles.subject}>Química</Text>
                  </View>
                </View>
                <View style={styles.profileBody}>
                  <Text style={styles.labelInput}>Whatsapp</Text>
                  <TextInput style={styles.input}></TextInput>

                  <Text style={styles.labelInput}>Biografia</Text>
                  <TextInput 
                    style={styles.inputBio}
                    placeholder={'As vezes não sei nem onde eu tô, mas consigo me localizar facilmente em qualquer lugar. Tenho memória fotográfica e nunca fico perdido.'}
                    numberOfLines={6}
                    multiline={true}
                    maxLength={255}
                    ></TextInput>
                  <AboutClass />
                  {/* <Text style={styles.title}>Sobre a aula</Text>

                  <Text style={styles.labelInput}>Matéria</Text>
                  <TextInput style={styles.input}></TextInput>

                  <Text style={styles.labelInput}>Custo da sua hora por aula</Text>
                  <TextInput style={styles.input}></TextInput>

                  <View style={styles.hoursLabel}>
                    <Text style={styles.titleHours}>Horários disponíveis</Text>

                    <RectButton
                     style={styles.btnPlus}
                      onPress={ ()=>{ handleAdd(scheduleData.length+1) } }>
                     <Text  style={styles.addLabel}> + Novo </Text>
                    </RectButton>

                  </View>
                 {
                   scheduleData.map(newInput =>(
                     <View key={newInput} >
                      <Schedule />
                     </View>

                   ))
                 } */}
               
                </View>
              </View>

              <View style={styles.footer}>
                <RectButton 
                  style={styles.btnSave}
                  onPress={() => { handleNavigateToPageSuccess() }}
                >
                  <Text style={styles.txtBtnSave}>Salvar cadastro</Text>
                </RectButton>
              </View>

              <View style={styles.attentionArea}>
                <Image style={styles.attentionIcon} source={attentionIcon} />
                <View>
                  <Text style={styles.txtImportant}>Importante!</Text>
                  <Text style={styles.txtImportantInfo}>Preencha todos os dados</Text>
                </View>
              </View>

          </ScrollView>
          
        </View>
     </>
    )
}

export default GiveClasses