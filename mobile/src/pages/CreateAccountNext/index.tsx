import React, { useState } from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import PHeaderCreateAccount from '../../components/PHeaderCreateAccount'

import styles from './styles'

function CreateAccountNext(){
    const[isVisiblePassword, setIsVisiblePassword] = useState(false)
    const[valueInputEmail, setValueInputEmail] = useState('')
    const[valueInputPassword, setValueInputPassword] = useState('')

    const { navigate } = useNavigation()

    function handleNavigateToPageSuccess(){
        navigate('PageSuccess',{title: ' Cadastro \n concluído!', description: 'Agora você faz parte da \n plataforma da Proffy', txtBtn: 'Fazer login'})
    }

    return(
      <>
          <PHeaderCreateAccount step={false} />
          <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined }>
            <View style={styles.formBlock}>
                <Text style={styles.txtCreate}>02.  Email e Senha </Text>
                 <TextInput 
                    style={styles.input}
                    placeholder='Email'
                    autoCorrect={false}
                    value={valueInputEmail}
                    onChangeText={text => setValueInputEmail(text)}
                    autoFocus={true}
                 />
                <View style={styles.blockPassword}>
                    <TextInput 
                        style={styles.inputPassword}
                        placeholder='Senha'
                        autoCorrect={false}
                        value={valueInputPassword}
                        secureTextEntry={isVisiblePassword ? true : false}
                        onChangeText={text => setValueInputPassword(text)}
                    />
                    <Feather 
                        onPress={() => { setIsVisiblePassword(!isVisiblePassword)}}
                        style={styles.eyeIcon} 
                        name={ isVisiblePassword ? 'eye' : 'eye-off'} size={20}
                        color={'#9C98A6'} 
                    />  
                </View>   
                <RectButton 
                    style={ valueInputEmail.length >= 9 && valueInputPassword.length >= 6 ? styles.btnConcludeValid : styles.btnConclude }
                    onPress={() => { handleNavigateToPageSuccess() }}
                >
                    <Text style={ valueInputEmail.length >= 9 && valueInputPassword.length >= 6 ? styles.txtBtnConcludeValid : styles.txtBtnConclude }>
                        Concluir cadastro
                    </Text>
                </RectButton>
                    
                </View>

          </KeyboardAvoidingView>
      </>
    )
}

export default CreateAccountNext