import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1
    },

    header:{
        height: '45%',
        backgroundColor: '#8257e5',
        justifyContent: 'center',
        paddingHorizontal: 40,
        
    },

    profile:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 48,
    },

    avatar:{
        width: 42,
        height: 42,
        borderRadius: 32,
        backgroundColor: '#ccc'
    },

    txtUser:{   
       fontFamily: 'Poppins_400Regular',
       fontSize: 12,
       color: '#D4C2FF',
    //    marginLeft: -32,
    //    backgroundColor: '#000',
       width: 180

    },

    powerIcon:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#774DD6',
        borderRadius: 10,
        width: 42,
        height: 42,
    },

    banner:{
        width: '100%',
        resizeMode: 'contain'
    },

    body:{
        flex: 1,
        backgroundColor:'#F0F0F7',
        justifyContent: 'flex-start',
        paddingHorizontal: 40,
        paddingVertical: 30
    },

    title:{
        fontFamily: 'Poppins_300Light',
        color: '#6A6180',
        fontSize: 20

    },

    titleBold:{
        fontFamily: 'Poppins_600SemiBold',
        color: '#6A6180',
        fontSize: 20,
    },

    buttonsContainer:{
        flexDirection: 'row',
        marginTop: 32,
        justifyContent: 'space-between'
    },

    button:{
        height: 150,
        width: '48%',
        backgroundColor: '#ccc',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between'
    },

    buttonPrimary:{
        backgroundColor: '#9871f5'
    },
    
    buttonSecondary:{
        backgroundColor: '#04d361'
    },

    buttonText:{
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 20,
    },

    totalConnections:{
        fontFamily: 'Poppins_400Regular',
        color: '#d4c2ff',
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 140,
        marginTop: 40,
    },
})

export default styles