import React, { useState } from 'react'
import { View,Image,Text, Linking } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-community/async-storage'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles'
import api from '../../services/api'

export interface Teacher {
    id: number
    avatar: string
    bio: string
    cost: number
    name: string
    subject: string
    whatsapp: string
}

interface TeacherItemProps {
    teacher: Teacher
    favorited: boolean
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
    const [isFavorited, setIsFavorited] = useState(favorited)

    function handleLinkToWhatsapp(){
        api.post('connections',{
           user_id: teacher.id 
        })

        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
    }

    async function handleToggleFavorite(){
        const favorites = await AsyncStorage.getItem('favorites') 

        let favoritesArray = []

        if(favorites){
            favoritesArray = JSON.parse(favorites)   
        } 

        if (isFavorited) {
            const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
                return teacherItem.id === teacher.id
            })
            
            favoritesArray.splice(favoriteIndex, 1)
            setIsFavorited(false)
        } else {
           favoritesArray.push(teacher)
          
           setIsFavorited(true)
        }

        await AsyncStorage.setItem('favorires', JSON.stringify(favoritesArray))
    }

    return(
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                  style={styles.avatar}
                  source={{ uri: 'https://github.com/diego3g.png' }} 
                />
           
            <View style={styles.profileInfo}>
                <Text style={styles.name}>Diego Fernandes</Text>
                <Text style={styles.subject}>Química</Text>
            </View>
         </View>

            <Text style={styles.bio}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>
                <View style={styles.buttonsContainer}>
                    <RectButton 
                        onPress={handleToggleFavorite} 
                        style={[styles.favoriteButton, 
                                isFavorited ? styles.favorited : {}
                        ]}
                    >
                        { isFavorited 
                            ? <Image source={unFavoriteIcon} /> 
                            : <Image source={heartOutlineIcon} /> 
                        }
                         
                    </RectButton>

                    <RectButton onPress={handleLinkToWhatsapp} style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}


export default TeacherItem