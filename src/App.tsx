import { PersistGate } from 'redux-persist/integration/react'
import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import StoreConfig from 'ducks/store'
import Login from 'views/screens/Login'
import './override.less'
import MainLayout from 'views/screens/MainLayout'
import NotFound from 'views/screens/NotFound'
import moment from 'moment'

moment.lang('es', {
  months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split(
    '_'
  ),
  monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
  weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sábado'.split('_'),
  weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
  weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_'),
} as any)

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
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App

export { store }
