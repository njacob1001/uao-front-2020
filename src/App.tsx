import { PersistGate } from 'redux-persist/integration/react'
import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import StoreConfig from 'ducks/store'
import Login from 'views/screens/Login'
import './override.less'
import Facilitators from 'views/screens/Facilitators'
import Entrepreneurs from 'views/screens/Entrepreneurs'
import Projects from 'views/screens/Projects'
import Meetings from 'views/screens/Meeting'

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
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/meetings">
              <Meetings />
            </Route>

            <Route path="/home">
              <Meetings />
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
