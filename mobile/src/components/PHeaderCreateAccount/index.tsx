import React from 'react'
import {View, Image} from 'react-native'
import {BorderlessButton} from 'react-native-gesture-handler'
import { Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

import backIcon from '../../assets/images/icons/back.png'

interface PageStepProps{
    step?: boolean
}

const pHeaderCreateAccount: React.FC<PageStepProps> = ( { step = true } ) => {
    const { navigate, goBack } = useNavigation()

    function handleGoBack(step: boolean){
        step ? navigate('Login') : goBack()
    }
    return(
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={()=>{handleGoBack(step)}}>
                    <Image source={backIcon} resizeMode='contain' />
                </BorderlessButton>
                <View style={styles.dotTop}>
                { step ? (
                    <> 
                        <Entypo name='dot-single' size={20} color='#8257E5' />
                        <Entypo name='dot-single' size={20} color='#C1BCCC' />
                    </>) 
                    :
                         (
                     <> 
                        <Entypo name='dot-single' size={20} color='#C1BCCC' />
                        <Entypo name='dot-single' size={20} color='#8257E5' />
                    </>
                )}
                   
                   
                    {/* <Entypo name='dot-single' size={20} color='#8257E5' />
                    <Entypo name='dot-single' size={20} color='#C1BCCC' /> */}
                </View>
            </View>
        </View>
    )
}

export default pHeaderCreateAccount