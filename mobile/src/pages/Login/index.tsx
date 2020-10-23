import React, { useState, useEffect } from 'react'
import { View, Image, ImageBackground, Text, TextInput, KeyboardAvoidingView, Platform} from 'react-native'
import { RectButton, BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'

import styles from './styles'
import { useAuth } from '../../contexts/auth'

import bgLogin from '../../assets/images/background_login.png'
import logoLogin from '../../assets/images/intro.png'


const Login: React.FC = () => {
  const { navigate } = useNavigation()
  const { signIn, user } = useAuth()

   const[isPasswordFocus, setIsPasswordFocus] = useState(false)
   const[isEmailFocus, setIsEmailFocus] = useState(false)
   const[isVisiblePassword, setIsVisiblePassword] = useState(true)
   const[toggleCheckBox, setToggleCheckBox] = useState(false)
   const[valueInputEmail, setValueInputEmail] = useState<string>('')
   const[valueInputPassword, setValueInputPassword] = useState<string>('')

   useEffect(() =>{
    async function loadStorageData(){
      const rememberInput =  await AsyncStorage.getItem('@PFRemember:Login')
      if(rememberInput){
        setToggleCheckBox(true)
        const storageEmail = await AsyncStorage.getItem('@PFRemember:Email' )
        const storagePassword = await AsyncStorage.getItem('@PFRemember:Password')
        setValueInputEmail(storageEmail ? storageEmail : '' )
        setValueInputPassword(storagePassword ? storagePassword : '')
      }
    }
    loadStorageData()
   },[])

   useEffect(() => {
    async function loadStorageData(){
      if(toggleCheckBox){
        await AsyncStorage.setItem('@PFRemember:Email', valueInputEmail ? valueInputEmail : '' )
        await AsyncStorage.setItem('@PFRemember:Password', valueInputPassword ? valueInputPassword : ''  )
      }
    }
    loadStorageData()
   },[valueInputEmail,valueInputPassword])
   

   function handleNavigateToCreateAccount(){
    navigate('CreateAccount')
   }

   async function handleCheckBox(value: boolean){
    if(value){
      await AsyncStorage.setItem('@PFRemember:Login', 'true')
      await AsyncStorage.setItem('@PFRemember:Email', valueInputEmail ? valueInputEmail : '' )
      await AsyncStorage.setItem('@PFRemember:Password', valueInputPassword ? valueInputPassword : ''  )
      setToggleCheckBox(value)
    }else{
      AsyncStorage.multiRemove(['@PFRemember:Login', '@PFRemember:Email', '@PFRemember:Password' ]).then(() => {
        setValueInputEmail(valueInputEmail)
        setValueInputPassword(valueInputPassword)
        setToggleCheckBox(value)
      })
    }
   }
   
   function handleSignIn(){
    signIn(valueInputEmail,valueInputPassword)
   }
   
    return( 
    <>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined }>
          <View style={styles.login}>
            <ImageBackground style={styles.bgLogin} source={bgLogin}>
                <Image resizeMode={'contain'} source={logoLogin} />
            </ImageBackground>
          </View>

          <View style={styles.formLogin}>
            <View style={styles.loginText}>
                <Text style={styles.textLogin}>Fazer login</Text>
                <BorderlessButton 
                  borderless={false}
                  onPress={handleNavigateToCreateAccount}
                >
                   <Text style={styles.txtCriarConta}>Criar uma conta</Text>
                </BorderlessButton>
            </View>

              <TextInput 
                style={isEmailFocus ? styles.inputEmailFocus : styles.inputEmail} 
                placeholder='E-mail'
                value={valueInputEmail}
                onChangeText={text => setValueInputEmail(text)}
                onFocus={() => setIsEmailFocus(true)}
                onBlur={() => setIsEmailFocus(false)}
              />
              <View style={styles.blockPassword}>
                <TextInput
                  style={ isPasswordFocus ? styles.inputPasswordFocus : styles.inputPassword }
                  placeholder='Senha'
                  autoCorrect={false}
                  value={valueInputPassword}
                  onChangeText={text => setValueInputPassword(text)}
                  secureTextEntry={isVisiblePassword ? true : false}
                  onFocus={() => setIsPasswordFocus(true)}
                  onBlur={() => setIsPasswordFocus(false)}
                />
                
               <Feather 
                  onPress={() => { setIsVisiblePassword(!isVisiblePassword)}} 
                  style={styles.eyeIcon} 
                  name={ isVisiblePassword ? 'eye' : 'eye-off'} size={20} 
                  color={ isPasswordFocus ? '#8257E5' : '#9C98A6'} 
               />      
              
              </View>

            <View style={styles.formOptions}>
              <CheckBox
                value={toggleCheckBox} 
                tintColors={{ true:'#04D361', false:'#9C98A6'}}
                onValueChange={() => {handleCheckBox(!toggleCheckBox)}} 
              />
              
              <Text onPress={() => {handleCheckBox(!toggleCheckBox)}} style={styles.txtRemember}>Lembrar-me</Text>

              <BorderlessButton borderless={false}>
              <Text style={styles.txtPassword}>Esqueci minha senha</Text>
              </BorderlessButton>

            </View>
            
           <RectButton 
              style={ valueInputPassword.length <= 5 ? styles.btnEntry : styles.btnEntryValid}
              onPress={() => { handleSignIn() }}
            >
             <Text style={ valueInputPassword.length <= 5 ?styles.txtBtnEntry : styles.txtBtnEntryValid }>Entrar</Text>
           </RectButton>
          </View>
          </KeyboardAvoidingView>
    </>      
    )
}

export default Login