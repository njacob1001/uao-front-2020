import { all, takeLatest, put, call } from 'redux-saga/effects'
import { loginRequest } from 'services/auth'
import * as TYPES from './action-types'
import { DELETE_ALL } from '../meeting/types'
import { LOGOUT_SAGA } from './types'

function* login(action: any): any {
  const { user, password } = action?.payload || {}
  try {
    yield put(TYPES.LOGIN.request())
    const { data: result } = yield call(loginRequest, {
      identifier: user,
      password,
    })
    if (result.jwt) {
      yield put(
        TYPES.LOGIN.success({
          name: result.user.names,
          token: result.jwt,
          email: result.user.email,
          role: result.user?.role?.name,
          id: result.user.id,
          lastName: result.user.last_names,
          cc: result.user.identification,
          uaoCode: result.user.uao_code,
          username: result.user.username,
          photo: result?.user?.photo?.url,
        })
      )
    }
  } catch (err) {
    yield put(TYPES.LOGIN.failure(err))
  } finally {
    yield put(TYPES.LOGIN.fulfill())
  }
}

export function* logout(): any {
  yield put({ type: TYPES.LOGOUT })
  yield put({ type: DELETE_ALL })
}

export function* userSagas(): any {
  yield all([takeLatest(TYPES.LOGIN.TRIGGER, login), takeLatest(LOGOUT_SAGA, logout)])
}
