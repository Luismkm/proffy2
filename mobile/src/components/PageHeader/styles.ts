import {StyleSheet} from 'react-native'

const styles= StyleSheet.create({
    
    topBar:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#774DD6',
        paddingHorizontal: 40,
        paddingTop: 50,
        paddingBottom: 24,
        
    },
    
    headerContent:{
        backgroundColor: '#8257e5',
        paddingHorizontal: 40,
    },

    // header:{
    //     // flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent:'space-around'

    // },

    pageTitle:{
        fontFamily: 'Archivo_400Regular',
        color: '#D4C2FF',
        fontSize: 14,
    },

    // title:{
    //     fontFamily: 'Archivo_700Bold',
    //     color: '#FFF',
    //     fontSize: 24,
    //     lineHeight: 32,
    //     // maxWidth: 160,
    //     paddingVertical: 20,
    // },

    // subTitle:{
    //     fontFamily: 'Poppins_400Regular',
    //     color: '#D4C2FF',
    //     fontSize: 14,
    //     lineHeight: 24,
    //     paddingBottom: 52,
    // },

})

export default styles