import { all, takeLatest, put } from 'redux-saga/effects'
import * as TYPES from './action-types'

function* login(action: any): any {
  const { user, password } = action?.payload || {}
  yield put(TYPES.LOGIN.request())
}

export function* logout(): any {
  yield put({ type: TYPES.LOGOUT })
}

export function* userSagas(): any {
  yield all([takeLatest(TYPES.LOGIN.TRIGGER, login)])
}
