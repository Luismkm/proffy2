import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'
import PageCreateSuccess from './pages/PageCreateSuccess'

function Routes() {
    return(
        <BrowserRouter>
          <Route path='/' exact component={Login} />
          <Route path='/CreateAccount' component={CreateAccount} />
          <Route path='/PageCreateSuccess' component={PageCreateSuccess} />
        </BrowserRouter>
    )
}

export default Routes