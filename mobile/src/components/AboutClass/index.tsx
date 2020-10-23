import React, { useState } from 'react'
import {Text, TextInput, View} from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import Schedule from '../../components/Schedule'

import styles from './styles'

const AboutClass:React.FC = () => {

    const [scheduleData, setScheduleData] = useState<number[]>([0])
    
    function handleAdd (newInput:number) {
        setScheduleData([...scheduleData , newInput])
    
    }

    return(
    <>    
        <Text style={styles.title}>Sobre a aula</Text>

        <Text style={styles.labelInput}>Matéria</Text>
        <TextInput style={styles.input}></TextInput>

        <Text style={styles.labelInput}>Custo da sua hora por aula</Text>
        <TextInput style={styles.input}></TextInput>

        <View style={styles.hoursLabel}>
        <Text style={styles.titleHours}>Horários disponíveis</Text>

        <RectButton
            style={styles.btnPlus}
            onPress={ ()=>{ handleAdd(scheduleData.length+1) } 
        }>
            <Text  style={styles.addLabel}> + Novo </Text>
        </RectButton>

        </View>
        {
        scheduleData.map(newInput =>(
        <View key={newInput} >
            <Schedule />
        </View>

        ))
        }
    </>
    )
}

export default AboutClass
