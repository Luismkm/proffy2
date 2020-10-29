import React from 'react';
import { BrowserRouter } from "react-router-dom";

import './assets/styles/global.css'
import { AuthProvider} from '../src/context/auth'

import Routes from '../src/routes'

function App() {
  return (

		<AuthProvider>
			<Routes />
		</AuthProvider>
  )
}

export default App;
