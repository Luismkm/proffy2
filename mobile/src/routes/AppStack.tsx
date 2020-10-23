import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack' 

import Login from '../pages/Login'
import CreateAccount from '../pages/CreateAccount'
import CreateAccountNext from '../pages/CreateAccountNext'
import Landing from '../pages/Landing'
import Perfil from '../pages/Pefil'
import GiveClasses from '../pages/GiveClasses'
import StudyTabs from './StudyTabs'

const { Navigator, Screen } = createStackNavigator()

const AppStack: React.FC = () => {
    return(
          <Navigator screenOptions={{ headerShown: false }}>
              <Screen name='Landing' component={Landing} />
              <Screen name='Perfil' component={Perfil} />
              <Screen name='GiveClasses' component={GiveClasses} />
              <Screen name='Study' component={StudyTabs} />
          </Navigator>
    )
}

export default AppStack