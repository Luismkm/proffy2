import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F0F0F7',
    },

    login:{
        backgroundColor: '#8257e5',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        // height: '50%'
    },

    bgLogin:{
        width: 269,
        height: 240,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },

    formLogin:{

        backgroundColor: '#F0F0F7',
        paddingHorizontal: 42,
        paddingTop: 24,
        paddingBottom: 8,
      
       
    },

    loginText:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    textLogin:{
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 24,
        color: '#32264D',
        
       
    },

    txtCriarConta:{
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        paddingHorizontal: 4,
        color: '#8257E5',
    },

    inputEmail:{
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        // justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 16,        
       
    },

    inputPassword:{
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 2,
        flex: 1
    },
    
    inputPasswordFocus:{
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 2,
        flex: 1,
        borderLeftColor: '#8257E5',
        borderLeftWidth: 2.5,
        
    },

    inputEmailFocus:{
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 16,
        borderLeftColor: '#8257E5',
        borderLeftWidth: 2.5,
        
    },

    formOptions:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
    },

    txtRemember:{
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        color: '#9C98A6',
        marginRight: 32,
    },

    txtPassword:{
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        color: '#9C98A6',
        borderRadius: 8,
        paddingHorizontal: 4,
       
    },

    btnEntry:{
        backgroundColor: '#DCDCE5',
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16
       
    },
    btnEntryValid:{
        backgroundColor: '#04D361',
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16
       
    },

    txtBtnEntry:{
        fontFamily: 'Archivo_600SemiBold',
        fontSize: 16,
        color: '#9C98A6',
    },

    txtBtnEntryValid:{
        fontFamily: 'Archivo_600SemiBold',
        fontSize: 16,
        color: '#FFF',
    },
    
    blockPassword:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    eyeIcon:{
        backgroundColor: '#fff',
        height: 54,
        marginLeft: -8,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        marginTop: 2,
        paddingTop: 16,
        paddingRight: 16

    },


    
})

export default styles