import React from 'react'
import { View, ImageBackground, Image, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import imgBackground from '../../assets/images/background.png'
import iconDone from '../../assets/images/icons/done.png'

import styles from './styles'



function CreateAccountConclude(){
    const { navigate } = useNavigation()

    function handleNavigateToLogin(){
        navigate('Login')
    }
    return(
        <>
            <View style={styles.container}>
                <ImageBackground resizeMode={'contain'} style={styles.imgBackground} source={imgBackground}>
                    <Image source={iconDone} style={styles.iconDone} />
                    <Text style={styles.txtDone}> Cadastro {'\n'} concluído!</Text>
                    <Text style={styles.txtDone2}>Agora você faz parte da plataforma da Proffy</Text>
                </ImageBackground>
                <RectButton 
                    style={styles.btnLogin}
                    onPress={() => handleNavigateToLogin()}
                >
                    <Text style={styles.txtLogin}> Fazer login </Text>
                </RectButton>
            </View>
        </>
    )
}

export default CreateAccountConclude