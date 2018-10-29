// Application entrypoint.

// Load up the application styles
require('../styles/application.scss')

// Render the top-level React component
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import AppReducer from './reducers'
import App from './App.jsx'

const store = createStore(
  AppReducer,
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root')
)
