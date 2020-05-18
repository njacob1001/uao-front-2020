import { all, takeLatest, put, call, select } from 'redux-saga/effects'
import { getAll } from 'services/entrepreneur/get'
import * as TYPES from './types'

function* getAllEntrepreneurSaga(): any {
  try {
    yield put(TYPES.MAIN_REQUEST.request())
    const { data: result } = yield call(getAll)
    if (result.data?.users) {
      yield put(
        TYPES.MAIN_REQUEST.success(
          result.data?.users.map((m: any) => ({
            ...m,
            photo: m?.photo?.url,
            carrera: m?.carrera?.name,
          }))
        )
      )
    }
  } catch (err) {
    yield put(TYPES.MAIN_REQUEST.failure(err))
  } finally {
    yield put(TYPES.MAIN_REQUEST.fulfill())
  }
}

export function* entrepeneursSagas(): any {
  yield all([takeLatest(TYPES.MAIN_REQUEST.TRIGGER, getAllEntrepreneurSaga)])
}