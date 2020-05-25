import { PersistGate } from 'redux-persist/integration/react'
import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import StoreConfig from 'ducks/store'
import Login from 'views/screens/Login'
import './override.less'
import MainLayout from 'views/screens/MainLayout'

const { store, persistor } = StoreConfig()

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/app">
              <MainLayout />
            </Route>
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App

export { store }
