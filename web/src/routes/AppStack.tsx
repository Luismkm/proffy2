import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from '../pages/Landing'

const AppStack: React.FC = () => {
  return(
    <BrowserRouter>
      <Route path='/' exact component={Landing} />
    </BrowserRouter>
  )
}

export default AppStack