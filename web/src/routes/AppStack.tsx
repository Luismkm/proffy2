import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Landing from '../pages/Landing'
import Profile from '../pages/Profile'
import GiveClasses from '../pages/GiveClasses'
import Study from '../pages/Study'

const AppStack: React.FC = () => {
  return(
    <BrowserRouter>
      <Route path='/' exact component={Landing} />
      <Route path='/profile' exact component={Profile} />
      <Route path='/study' exact component={Study} />
      <Route path='/giveClasses' exact component={GiveClasses} />
    </BrowserRouter>
  )
}

export default AppStack