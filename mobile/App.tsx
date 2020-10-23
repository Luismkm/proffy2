import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo'
import { Archivo_400Regular, Archivo_700Bold, Archivo_600SemiBold, useFonts } from '@expo-google-fonts/archivo'
import { Poppins_400Regular, Poppins_600SemiBold,Poppins_300Light } from '@expo-google-fonts/poppins'

import Routes from './src/routes'
import { AuthProvider } from './src/contexts/auth'

const App: React.FC = () => {
  let[fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_600SemiBold,
    Archivo_700Bold,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_600SemiBold
  })

  if(!fontsLoaded){
    return <AppLoading />
  }else{
    return (
        <>
          <NavigationContainer>
            <AuthProvider>
              <Routes />
            </AuthProvider>
          </NavigationContainer>

          <StatusBar style="light" />
       </>
      
      );
    }
}

export default App
