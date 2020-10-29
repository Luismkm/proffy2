import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from '../pages/Login'
import CreateAccount from '../pages/CreateAccount'
import PageCreateSuccess from '../pages/PageCreateSuccess'
import ForgotPassword from '../pages/ForgotPassword'
import SendPasswordSuccess from '../pages/SendPasswordSuccess'

const AuthStack: React.FC = () => {

  return(
      <BrowserRouter>
        <Route path='/' exact component={Login} />
        <Route path='/CreateAccount' component={CreateAccount} />
        <Route path='/PageCreateSuccess' component={PageCreateSuccess} />
        <Route path='/ForgotPassword' component={ForgotPassword} />
        <Route path='/SendPasswordSuccess' component={SendPasswordSuccess} />
      </BrowserRouter>
  )
}

export default AuthStack