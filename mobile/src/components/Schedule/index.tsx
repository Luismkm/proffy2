import React from 'react'
import {View, TextInput, Text} from 'react-native'

import styles from './styles'


const Schedule: React.FC = () => {
    return(
    <>
        <Text style={styles.labelInput}>Dia da semana</Text>
        <TextInput style={styles.input}></TextInput>

        <View style={styles.hoursBlock}>
          <View>
            <Text style={styles.labelInput}>Das</Text>
            <TextInput style={styles.inputHours}></TextInput>
          </View>

          <View>
            <Text style={styles.labelInput}>Até</Text>
            <TextInput style={styles.inputHours}></TextInput>
          </View>
        </View>
    </> 
    )
}

export default Schedule