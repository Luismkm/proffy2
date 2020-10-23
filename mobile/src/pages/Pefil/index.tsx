import React, { useState } from 'react'
import { ImageBackground, Image, Text, ScrollView, View, TextInput} from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import Constants from 'expo-constants'
import * as Permission from 'expo-permissions'
import * as ImagePeacker from 'expo-image-picker'

import styles from './styles'
import PageHeader from '../../components/PageHeader'
import AboutClass from '../../components/AboutClass'

import bgLogin from '../../assets/images/background_login.png'
import cameraIcon from '../../assets/images/icons/camera.png'


function Perfil(){
    const[avatar, setAvatar] = useState({uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7f1Es84yxr11Bfj_10hV2_srMeJ-Ry71Yiw&usqp=CAU'})

    async function imagePeackerCall(){
      if(Constants.platform?.ios){
        const { status } =await Permission.askAsync(Permission.CAMERA_ROLL)

        if(status !== 'granted'){
          alert('Essa permissão é necessária')
          return
        }
      }

      const data = await ImagePeacker.launchImageLibraryAsync({})
      
      if(data.cancelled){
        return
      }

      if(!data.uri){
        return
      }

      setAvatar(data)

    }

    return(
    <>
        <PageHeader pageTitle={'Meu perfil'} >
            <ImageBackground style={styles.img} resizeMode={'contain'} source={bgLogin} >
              <Image style={styles.avatar} source={{uri: avatar.uri}} />
              <RectButton
                onPress={imagePeackerCall}
                style={styles.cameraIcon}

              >
               
                <Image source={cameraIcon} />
               </RectButton>
              <Text style={styles.name}>Luís Marcelo Krautiuk</Text>
              <Text style={styles.spec}>Geografia</Text>
            </ImageBackground>
        </PageHeader>

        <ScrollView 
          style={styles.perfilData} 
        >
        
            <View style={styles.dataBlock}>
              <Text style={styles.title}>Seus dados</Text>

              <Text style={styles.labelInput}>Nome</Text>
              <TextInput style={styles.input}></TextInput>

              <Text style={styles.labelInput}>Sobrenome</Text>
              <TextInput style={styles.input}></TextInput>

              <Text style={styles.labelInput}>E-mail</Text>
              <TextInput style={styles.input}></TextInput>

              <Text style={styles.labelInput}>Whatsapp</Text>
              <TextInput style={styles.input}></TextInput>

              <Text style={styles.labelInput}>Biografia</Text>
                <TextInput 
                  style={styles.inputBio}
                  placeholder={'As vezes não sei nem onde eu tô, mas consigo me localizar facilmente em qualquer lugar. Tenho memória fotográfica e nunca fico perdido.'}
                  numberOfLines={6}
                  multiline={true}
                  maxLength={255}
                  >
                </TextInput>
                <AboutClass />
                {/* <Text style={styles.title}>Sobre a aula</Text>

                <Text style={styles.labelInput}>Matéria</Text>
                <TextInput style={styles.input}></TextInput>

                <Text style={styles.labelInput}>Custo da sua hora por aula</Text>
                <TextInput style={styles.input}></TextInput>

                <View style={styles.hoursLabel}>
                <Text style={styles.title}>Horários disponíveis</Text>
                <Text style={styles.addLabel}>+ Novo</Text>
                </View>

                <Text style={styles.labelInput}>Dia da semana</Text>
                <TextInput style={styles.input}></TextInput>

              <View style={styles.hoursBlock}>
                <View>
                    <Text style={styles.labelInput}>Das</Text>
                    <TextInput style={styles.inputHours}></TextInput>
                </View>

                <View>
                    <Text style={styles.labelInput}>Até</Text>
                    <TextInput style={styles.inputHours}></TextInput>
                </View> 
              </View>*/}

              <View style={styles.excludeArea}>
                <Text style={ [styles.excludeLabel, styles.excludeLabelTop]}>Excluir horário</Text>

                <Text style={styles.labelInput}>Dia da semana</Text>
                <TextInput style={styles.input}></TextInput>

                    <View style={styles.hoursBlock}>
                    <View>
                        <Text style={styles.labelInput}>Das</Text>
                        <TextInput style={styles.inputHours}></TextInput>
                    </View>

                    <View>
                        <Text style={styles.labelInput}>Até</Text>
                        <TextInput style={styles.inputHours}></TextInput>
                    </View>
                </View>
                <Text style={[ styles.excludeLabel, styles.excludeLabelBottom]}>Excluir horário</Text>
              </View>

            </View>

            <View style={styles.footer}>
                <RectButton 
                  style={styles.btnSave}
                  onPress={ () =>{} }
                >
                  <Text style={styles.txtBtnSave}>Salvar cadastro</Text>
                </RectButton>
              </View>
        </ScrollView>

    </>
)}

export default Perfil