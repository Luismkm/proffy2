import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Landing from '../pages/Landing'
import Profile from '../pages/Profile'

const AppStack: React.FC = () => {
  return(
    <BrowserRouter>
      <Route path='/' exact component={Landing} />
      <Route path='/profile' exact component={Profile} />
    </BrowserRouter>
  )
}

export default AppStack