import React from 'react'
import { useAuth } from '../context/auth'
import AppStack from './AppStack'
import AuthStack from './AuthStack'

const Routes: React.FC = () => {
  const { signed } = useAuth()
  console.log(signed)
  return signed ? <AppStack/> : <AuthStack/>
}

export default Routes