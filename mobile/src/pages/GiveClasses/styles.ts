import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
   container:{
       flex: 1,
       backgroundColor: '#E5E5E5'
   
   },
    headerContent:{
        backgroundColor: '#8257e5',
        paddingHorizontal: 40,
    },

    header:{
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-around'

    },

    titleHeader:{
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 24,
        lineHeight: 32,
        // maxWidth: 160,
        paddingVertical: 20,
       
    },

    subTitleHeader:{
        fontFamily: 'Poppins_400Regular',
        color: '#D4C2FF',
        fontSize: 14,
        lineHeight: 24,
        paddingBottom: 52,
       
    },

   teacherData:{
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

   titleHours:{
    fontFamily: 'Archivo_600SemiBold',
    fontSize: 20,
    color: '#32264D',
    paddingTop: 16,
    paddingBottom: 10,
   
   },

   btnPlus:{
    height: 30,
    width: 65,
    marginTop: 18,
    backgroundColor: '#fff',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 8,
   },

   profileHeader:{
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: 18,
        paddingLeft: 4,
    },

    avatar:{
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#ccc'
    },

    profileInfo:{
        marginLeft: 16,
    },

    name:{
        fontFamily: 'Archivo_700Bold',
        color: '#32264d',
        fontSize: 20,
    },

    subject:{
        fontFamily: 'Poppins_400Regular',
        color: '#6a6180',
        fontSize: 12,
        marginTop: 4,
    },

    txtUser:{
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        color: '#D4C2FF',
        marginLeft: -72 
    },

    // styles profile

    profileBody:{
        marginTop: 18,
        paddingLeft: 4,
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
        borderBottomWidth: 1,
        borderColor: '#E6E6F0',
        
    },

    addLabel:{
        fontFamily: 'Archivo_600SemiBold',
        fontSize: 14,
        color: '#8257E5',
        width: 60,
        marginLeft: 3
    },

    footer:{
        flex: 1,
        backgroundColor: '#FAFAFC',
        borderTopWidth: 1,
        borderColor: '#E6E6F0',
    },

    btnSave:{
        width: 290,
        height: 56,
        backgroundColor: '#04D361',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginLeft: 20,
        marginTop: 24
        
    },

    txtBtnSave:{
        fontFamily: 'Archivo_600SemiBold',
        color: '#FFF',
        fontSize: 16,
    },

    attentionArea:{
        flexDirection: 'row',
        backgroundColor: '#FAFAFC',
        paddingBottom: 20,
    },

    attentionIcon:{
        width: 32,
        height: 32,
        marginTop: 24,
        marginLeft: 20,
    },

    txtImportant:{
        fontFamily: 'Poppins_400Regular',
        color: '#6842C2',
        fontSize: 12,
        marginTop: 18,
        marginLeft: 56
        
    },

    txtImportantInfo:{
        fontFamily: 'Poppins_400Regular',
        color: '#A0A0B3',
        fontSize: 12,
        marginLeft: 56
        
    },


    
})

export default styles