import { all, takeLatest, put, call, select } from 'redux-saga/effects'
import { getAll } from 'services/projects/get'
import { metaDataUserSelector } from 'ducks/user/selectors'
import * as TYPES from './types'

function* getAllProjectSaga(): any {
  try {
    yield put(TYPES.MAIN_REQUEST.request())
    const user = yield select(metaDataUserSelector)
    let userId = ''
    if (user.role === 'emprendedor') {
      userId = user.id
    }
    const { data: result } = yield call(getAll, userId)
    if (result.data?.proyectos) {
      yield put(TYPES.MAIN_REQUEST.success(result.data?.proyectos))
    }
  } catch (err) {
    yield put(TYPES.MAIN_REQUEST.failure(err))
  } finally {
    yield put(TYPES.MAIN_REQUEST.fulfill())
  }
}

export function* projectsSagas(): any {
  yield all([takeLatest(TYPES.MAIN_REQUEST.TRIGGER, getAllProjectSaga)])
}
