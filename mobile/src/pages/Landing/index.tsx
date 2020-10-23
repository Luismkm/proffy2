import React, { useState, useEffect } from 'react'
import { View, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import styles from './styles'
import { useAuth } from '../../contexts/auth'

import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'
import api from '../../services/api'

function Landing(){
    const { navigate } = useNavigation()
    const { signOut, user,} = useAuth()
    const [totalConnections, setTotalConnectons] = useState(0)
   
    // useEffect(() =>{
    //   api.get('connections').then(response => {
    //     const { total } = response.data

    //     setTotalConnectons(total)
    //   })
    // },[])
    function handleSignOut(){
      signOut()
    }

    function handleNavigateToPerfil(){
      navigate('Perfil')
    }

    function handleNavigateToGiveClassesPage(){
      navigate('GiveClasses')
    }

    function handleNavigateToStudyPages(){
      navigate('Study')
    }

    return(
       <View style={styles.container}>
         <View style={styles.header}>
          <View style={styles.profile}>
              <Image
                      style={styles.avatar}
                      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7f1Es84yxr11Bfj_10hV2_srMeJ-Ry71Yiw&usqp=CAU' }} 
                />
              <Text 
                style={styles.txtUser}
                onPress={ () =>{ handleNavigateToPerfil() } }
              >
                {`${user?.name} ${user?.lastname}`}
              </Text> 

              <RectButton 
                style={styles.powerIcon}
                onPress={() =>{ handleSignOut() }}
              >
                 <Feather name={'power'} size={20} color='#FFF' />
              </RectButton> 

          </View>
           <Image style={styles.banner} source={landingImg} />
         </View>
         
         <View style={styles.body}>
           <Text style={styles.title}>
             Seja bem-vindo. 
           </Text>
           <Text style={styles.titleBold}>
             O que deseja fazer?
           </Text>

           <View style={styles.buttonsContainer}>
              <RectButton 
                style={[styles.button, styles.buttonPrimary]}
                onPress={handleNavigateToStudyPages}
              >
                <Image source={studyIcon} />

                <Text style={styles.buttonText}>Estudar</Text>
              </RectButton>

              <RectButton 
                style={[styles.button, styles.buttonSecondary]}
                onPress={handleNavigateToGiveClassesPage}
              >
                <Image source={giveClassesIcon} />

                <Text style={styles.buttonText}>Dar aulas</Text>
              </RectButton>
           </View>

           <Text style={styles.totalConnections}>
              Total de {totalConnections} conexões já realizadas {' '} 
              <Image source={heartIcon} />
           </Text>
       </View>
       </View>  

    )
}

export default Landing