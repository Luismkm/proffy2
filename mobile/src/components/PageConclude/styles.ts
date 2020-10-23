import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40,
    },

    imgBackground:{
        width: '100%',
        height: '100%',
        alignItems: 'center',
       
    },

    iconDone:{
        width: '28%',
        height: '12%',
        marginTop: 180,
    },

    txtDone:{
        fontFamily: 'Archivo_700Bold',
        fontSize: 32,
        lineHeight: 37,
        color: '#FFF',
        width: 180,
        textAlign: 'center',
        paddingTop: 16
    },

    txtDone2:{
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        lineHeight: 24,
        color: '#D4C2FF',
        // width: 169,
        textAlign: 'center',
        paddingTop: 24
    },
    
    btnLogin:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#04D361',
        height: 54,
        borderRadius: 8,
        marginTop: -32,
    },

    txtLogin:{
        fontFamily: 'Archivo_600SemiBold',
        fontSize: 16,
        color: '#FFF'
    },

})

export default styles