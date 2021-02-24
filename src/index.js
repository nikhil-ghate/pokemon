import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import Store from './Store'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Provider store={Store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
)
