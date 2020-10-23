import React, { ReactNode } from 'react'
import { View, Image, Text } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import backIcon from '../../assets/images/icons/back.png'
import logoImg from '../../assets/images/logo.png'

import styles from './styles'


interface PageHeaderProps{
    pageTitle: string;
    title?: string;
    headerRight?: ReactNode;
    description?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ pageTitle, title, headerRight, description, children }) => {
    const {navigate } = useNavigation()

    function handleGoBack(){
        navigate('Landing')
    }

    return(
        <>
         <View style={styles.topBar}>
             <BorderlessButton onPress={handleGoBack}>
               <Image source={backIcon} resizeMode='contain' />
             </BorderlessButton>
             <Text style={styles.pageTitle}>{ pageTitle }</Text>
             <Image source={logoImg} resizeMode='contain' />
         </View>

         <View style={styles.headerContent}>
            {/* <View style={styles.header}>
                <Text style={styles.title}>{ title }</Text>
                <Text style={styles.subTitle}>{ description }</Text>
                {headerRight}
            </View> */}

            {children}
         </View>
        </>
    )
}

export default PageHeader