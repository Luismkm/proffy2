import React from 'react'
import {View, ActivityIndicator} from 'react-native'
import { useAuth } from '../contexts/auth'
import AppStack from './AppStack'
import AuthStack from './AuthStack'


const Routes: React.FC = () => {
    const { signed } = useAuth()
    return signed ? <AppStack /> : <AuthStack />
}

export default Routes