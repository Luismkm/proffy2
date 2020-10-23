import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    
    labelInput:{
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        color: '#9C98A6',
        paddingTop: 8
    },

    input:{
        width: 290,
        height: 52,
        backgroundColor: '#FAFAFC',
        borderWidth: 1,
        borderColor: '#E6E6F0',
        borderRadius: 8,
        paddingHorizontal: 16,
        fontFamily: 'Poppins_300Light',
        fontSize: 14,
        color: '#6A6180'
    },

    hoursBlock:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 28,
    },

    inputHours:{
        width: 139,
        height: 56,
        backgroundColor: '#FAFAFC',
        borderWidth: 1,
        borderColor: '#E6E6F0',
        borderRadius: 8,
        paddingHorizontal: 16,
        fontFamily: 'Poppins_300Light',
        fontSize: 14,
        color: '#6A6180'
    },
})

export default Styles