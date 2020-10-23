import React from 'react'
import { View, ImageBackground, Image, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import imgBackground from '../../assets/images/background.png'
import iconDone from '../../assets/images/icons/done.png'

import styles from './styles'

interface PageConclude{
   titleMessage: string;
   description: string;
   txtBtn: string

}

const CreateAccountConclude: React.FC<PageConclude> = ({ titleMessage, description, txtBtn }) => {
    const { navigate } = useNavigation()

    function handleNavigateToLogin(){
        navigate('Login')
    }
    return(
        <>
            <View style={styles.container}>
                <ImageBackground resizeMode={'contain'} style={styles.imgBackground} source={imgBackground}>
                    <Image source={iconDone} style={styles.iconDone} />
                    <Text style={styles.txtDone}>{ titleMessage }</Text>
                    <Text style={styles.txtDone2}>{ description }</Text>
                </ImageBackground>
                <RectButton 
                    style={styles.btnLogin}
                    onPress={() => handleNavigateToLogin()}
                >
                    <Text style={styles.txtLogin}> { txtBtn } </Text>
                </RectButton>
            </View>
        </>
    )
}

export default CreateAccountConclude