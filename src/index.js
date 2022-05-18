import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AuthProviderWrapper } from './context/auth.context'
import { MessageProviderWrapper } from './context/message.context'




const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <MessageProviderWrapper>
      <AuthProviderWrapper>
        <App />
      </AuthProviderWrapper>
    </MessageProviderWrapper>
  </Router>
)
