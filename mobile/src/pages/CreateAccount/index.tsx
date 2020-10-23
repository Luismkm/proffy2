import React, { useState } from 'react'
import { View, Text, TextInput, KeyboardAvoidingView } from 'react-native'
import { RectButton, ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'


import PHeaderCreateAccount from '../../components/PHeaderCreateAccount'

import styles from './styles'


function CreateAccount(){
    const[userName, setUserName] = useState('')
    const[userSurname, setSurname] = useState('')

    const { navigate } = useNavigation()

    function handleNavigateToCANext(){
        navigate('CreateAccountNext')
    }
    
    return(
        <>  
            <PHeaderCreateAccount />
            <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
            
            <View style={styles.container}>
            <ScrollView>
                <View style={styles.txtBlock}>
                    <Text style={styles.txtCreate}>Crie sua{'\n'}conta gratuíta</Text>
                    <Text style={styles.txtCreate2}>Basta preencher esses dados e você estará conosco.</Text>
                </View>
               

                <View style={styles.formBlock}>
                    <Text style={styles.txtCreate3}>01.  Quem é você?</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Nome'
                        maxLength={24}
                        autoCorrect={false}
                        onChangeText={text => setUserName(text)}

                    />
                    <TextInput 
                        style={styles.input}
                        placeholder='Sobrenome'
                        autoCorrect={false}
                        onChangeText={text => setSurname(text)}
                    />
                    <RectButton 
                        style={ userName.length >= 2 && userSurname.length >= 2 ? styles.btnNextValid : styles.btnNext}
                        onPress={() => { handleNavigateToCANext() }}
                    >
                        <Text style={ userName.length >= 2 && userSurname.length >= 2 ? styles.txtBtnNextValid : styles.txtBtnNext}>
                           Próximo
                        </Text>
                    </RectButton>
                    
                </View>
            </ScrollView>
            </View>
            </KeyboardAvoidingView>
    
        </>
    )
}

export default CreateAccount