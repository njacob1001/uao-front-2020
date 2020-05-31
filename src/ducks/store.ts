import { userReducer } from 'ducks/user/reducer'
import { UserReducer } from 'ducks/user/models'
import { meetingReducer } from 'ducks/meeting/reducer'
import { MeetingReducer } from 'ducks/meeting/models'
import { EntrepreneurReducer } from 'ducks/entrepreneurs/models'
import { entrepreneurReducer } from 'ducks/entrepreneurs/reducer'
import { FacilitatorReducer } from 'ducks/facilitators/models'
import { facilitatorReducer } from 'ducks/facilitators/reducer'
import { ProjectReducer } from 'ducks/projects/models'
import { projectReducer } from 'ducks/projects/reducer'
import { administratorReducer } from 'ducks/admins/reducer'

import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { all, call } from 'redux-saga/effects'
import { userSagas } from 'ducks/user/sagas'
import { meetingSagas } from 'ducks/meeting/sagas'
import { entrepeneursSagas } from 'ducks/entrepreneurs/sagas'
import { facilitatorsSaga } from 'ducks/facilitators/sagas'
import { projectsSagas } from 'ducks/projects/sagas'
import { adminSaga } from 'ducks/admins/sagas'
import createSagaMiddleware, { SagaIterator } from 'redux-saga'
import { AdministratorReducer } from './admins/models'

export interface Store {
  userReducer: UserReducer
  meetingReducer: MeetingReducer
  entrepreneurReducer: EntrepreneurReducer
  facilitatorReducer: FacilitatorReducer
  projectReducer: ProjectReducer
  administratorReducer: AdministratorReducer
}

function* rootSaga(): SagaIterator {
  try {
    yield all([
      call(userSagas),
      call(meetingSagas),
      call(entrepeneursSagas),
      call(facilitatorsSaga),
      call(projectsSagas),
      call(adminSaga),
    ])
  } catch (error) {
    console.error(error)
  }
}

const rootReducer = combineReducers({
  userReducer,
  meetingReducer,
  entrepreneurReducer,
  facilitatorReducer,
  projectReducer,
  administratorReducer,
})

const persistConfig = {
  key: 'root',
  whitelist: [
    'userReducer',
    'meetingReducer',
    'entrepreneurReducer',
    'facilitatorReducer',
    'projectReducer',
    'administratorReducer',
  ],
  storage,
}

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middlewares = [sagaMiddleware]

const enhancers = [applyMiddleware(...middlewares)]

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default (): any => {
  const store = createStore(persistedReducer, composeEnhancers(...enhancers))
  const persistor = persistStore(store)
  sagaMiddleware.run(rootSaga)
  return { store, persistor }
}
