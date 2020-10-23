import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    img:{
      width: 265,
      height: 225,
      marginHorizontal: 8,
      marginVertical: 12,
      justifyContent: 'center',
      alignItems: 'center'
    },

    avatar:{
        width: 130,
        height: 130,
        backgroundColor: '#eee',
        borderRadius: 100,
        
    },

    cameraIcon:{
        marginLeft: 100,
        marginTop: -40,
        width: 40,
        height: 40,
        borderRadius: 100,
        backgroundColor: '#ccc'
    },

    name:{
        fontFamily: 'Archivo_700Bold',
        fontSize: 22,
        color: '#FFF'
    },

    spec:{
        fontFamily: 'Poppins_300Light',
        fontSize: 14,
        color: '#FFF',
        marginBottom: 8
    },

    // STYLE DATA
    perfilData:{
        backgroundColor: '#FFF',
        marginTop: -34,
        margin: 16,
        borderRadius: 8
    },

    dataBlock:{
        paddingHorizontal: 16, 
        paddingBottom: 16,
    },
    
   title:{
        fontFamily: 'Archivo_600SemiBold',
        fontSize: 20,
        color: '#32264D',
        paddingTop: 16,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#E6E6F0'
   },
   
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

    inputBio:{
        backgroundColor: '#FAFAFC',
        borderWidth: 1,
        borderColor: '#E6E6F0',
        borderRadius: 8,
        padding: 16,
        textAlignVertical: 'top',
        fontFamily: 'Poppins_300Light',
        fontSize: 14,
        lineHeight: 24,
        color: '#6A6180'
    },
    
    hoursLabel:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },

    addLabel:{
        fontFamily: 'Archivo_600SemiBold',
        fontSize: 14,
        color: '#8257E5',
        paddingTop: 20,
        paddingLeft: 48,
        borderBottomWidth: 1,
        borderColor: '#E6E6F0',
       
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

    excludeArea:{
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#E6E6F0',
    },

    excludeLabel:{
        fontFamily: 'Archivo_400Regular',
        color: '#E33D3D',
        fontSize: 12,
    },

    excludeLabelTop:{
        textAlign: 'center',
        width: 98,
        height: 20,
        backgroundColor: '#FFF',
        marginTop: -10,
        marginLeft: 100,

    },

    excludeLabelBottom:{
        textAlign: 'center',
        width: 98,
        height: 20,
        backgroundColor: '#FFF',
        marginBottom: -10,
        marginLeft: 100,
    },

    footer:{
        flex: 1,
        backgroundColor: '#FAFAFC',
        borderTopWidth: 1,
        borderColor: '#E6E6F0',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,

    },

    btnSave:{
        width: 290,
        height: 56,
        backgroundColor: '#04D361',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginLeft: 20,

        marginVertical: 20
        
    },

    txtBtnSave:{
        fontFamily: 'Archivo_600SemiBold',
        color: '#FFF',
        fontSize: 16,
    },
})

export default styles