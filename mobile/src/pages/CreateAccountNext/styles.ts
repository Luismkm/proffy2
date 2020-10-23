import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    // container:{
    //     flex: 1,
    //     justifyContent: 'center',
    //     backgroundColor: '#F0F0F7'
    // },

    formBlock:{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 40,
        paddingTop: 56,
        backgroundColor: '#F0F0F7',
        // justifyContent: 'center',
    },

    txtCreate:{
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 24,
        color: '#32264D',
        marginBottom: 16,
        paddingTop: 40,
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

    blockPassword:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    inputPassword:{
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 2,
        flex: 1
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

    btnConclude:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCE5',
        height: 54,
        borderRadius: 8,
        marginVertical: 24,
        color: '#9C98A6',
    },

    btnConcludeValid:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#04D361',
        height: 54,
        borderRadius: 8,
        marginVertical: 24,
    },

    txtBtnConclude:{
        fontFamily: 'Archivo_600SemiBold',
        color: '#9C98A6',
        fontSize: 16,
    },

    txtBtnConcludeValid:{
        fontFamily: 'Archivo_600SemiBold',
        color: '#FFF',
        fontSize: 16,
    }
})

export default styles