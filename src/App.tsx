import { PersistGate } from 'redux-persist/integration/react'
import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import StoreConfig from 'ducks/store'
import Login from 'views/screens/Login'
import Schedule from 'views/screens/Schedule'
import './override.less'
import Facilitators from 'views/screens/Facilitators'
import Entrepreneurs from 'views/screens/Entrepreneurs'

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
            <Route path="/facilitators">
              <Facilitators />
            </Route>
            <Route path="/entrepreneurs">
              <Entrepreneurs />
            </Route>
            <Route path="/home">
              <Schedule />
            </Route>
            <Route>
              <Redirect to="/login" />
            </Route>
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App

export { store }
