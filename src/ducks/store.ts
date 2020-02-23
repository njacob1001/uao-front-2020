import { userReducer } from 'ducks/user/reducer'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { all, call } from 'redux-saga/effects'
import { userSagas } from 'ducks/user/sagas'
import createSagaMiddleware, { SagaIterator } from 'redux-saga'

function* rootSaga(): SagaIterator {
  try {
    yield all([call(userSagas)])
  } catch (error) {
    console.error(error)
  }
}

const rootReducer = combineReducers({
  userReducer,
})

const persistConfig = {
  key: 'root',
  whitelist: ['userReducer'],
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
