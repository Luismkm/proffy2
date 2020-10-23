import { StyleSheet } from 'react-native'

const styles= StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F0F0F7'
    },

    txtBlock:{
       paddingHorizontal: 40,
       paddingVertical: 56,
      
    },

    txtCreate:{
        fontFamily: 'Poppins_600SemiBold',
        color: '#32264D',
        fontSize: 32,
        justifyContent: 'center'
      
    },

    txtCreate2:{
       fontFamily: 'Poppins_400Regular',
       color: '#6A6180',
       fontSize: 14,
       marginTop: 8,
       lineHeight: 24,
       maxWidth: 208,

    },

    txtCreate3:{
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 24,
        color: '#32264D',
        marginBottom: 16,
        paddingTop: 40,
    },

    formBlock:{
        paddingHorizontal: 40,
        justifyContent: 'center',
    },

    input:{
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        paddingHorizontal: 16,
        marginTop: 2,    
    },

    btnNext:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCE5',
        height: 54,
        borderRadius: 8,
        marginVertical: 24,
        color: '#9C98A6',
    },

    btnNextValid:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8257E5',
        height: 54,
        borderRadius: 8,
        marginVertical: 24,
       
    },
    
    txtBtnNext:{
        fontFamily: 'Archivo_600SemiBold',
        color: '#9C98A6',
        fontSize: 16,
    },

    txtBtnNextValid:{
        fontFamily: 'Archivo_600SemiBold',
        color: '#FFF',
        fontSize: 16,
    }

})

export default styles