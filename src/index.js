// react
import React from 'react'
import ReactDOM from 'react-dom'
// routing
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
// Theming
import { ThemeProvider } from 'emotion-theming'
import 'typeface-anonymous-pro/index.css'
import 'typeface-kalam/index.css'
// redux
import { Provider as ReduxStoreProvider } from 'react-redux'
// redux store
import configureStore from './redux/store'
// service worker
import registerServiceWorker from './registerServiceWorker'

// general imports
import './css/bootstrap.min.css'
import './css/index.css'
import theme from './css/theme'


// components
import App from './App'


export const history = createHistory()
export const store = configureStore({}, history)

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ReduxStoreProvider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </ReduxStoreProvider>
  </ThemeProvider>,
  document.getElementById('root'),
)
registerServiceWorker()
