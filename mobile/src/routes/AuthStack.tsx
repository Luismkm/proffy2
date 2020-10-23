import React from 'react'
import { createStackNavigator } from '@react-navigation/stack' 

import Login from '../pages/Login'
import CreateAccount from '../pages/CreateAccount'
import CreateAccountNext from '../pages/CreateAccountNext'
import PageSuccess from '../pages/PageSuccess'

const { Navigator, Screen } = createStackNavigator()

const AuthStack = () => {
    return(
          <Navigator screenOptions={{ headerShown: false }}>
              <Screen name='Login' component={Login} />
              <Screen name='CreateAccount' component={CreateAccount} />
              <Screen name='CreateAccountNext' component={CreateAccountNext} />
              <Screen name='PageSuccess' component={PageSuccess} />
          </Navigator>
    )
}

export default AuthStack